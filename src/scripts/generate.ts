import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

type ComponentCopy = {
	[key: string]: {
		[variant: string]: {
			importText: string
			componentText: string
		}
	}
}

const IMPORT_START = "// IMPORT START"
const IMPORT_END = "// IMPORT END"
const COMPONENT_START = "// COMPONENT START"
const COMPONENT_END = "// COMPONENT END"

const componentPath = "../my-components/components/"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsNames = fs.readdirSync(path.join(__dirname, componentPath))

let componentCopy: ComponentCopy = {}

for (const componentName of componentsNames) {
	const componentVariations = fs.readdirSync(path.join(__dirname, componentPath, componentName))

	componentCopy[componentName] = componentVariations.reduce(
		(acc, variation) => {
			const variationName = variation.split(".")[0]
			const contents = fs.readFileSync(path.join(__dirname, componentPath, componentName, variation), "utf-8")

			if (!contents.includes(IMPORT_START) || !contents.includes(IMPORT_END)) {
				console.warn(
					`Skipping ${componentName}/${variation} as it does not contain the required import markers.`,
				)
				return acc
			}

			const importText = contents.split(IMPORT_START)[1].split(IMPORT_END)[0].trim()
			const componentText = contents.split(COMPONENT_START)[1].split(COMPONENT_END)[0].trim()

			acc[variationName] = {
				importText,
				componentText,
			}

			console.log(`+ ${componentName}/${variationName}`)
			return acc
		},
		{} as { [key: string]: { importText: string; componentText: string } },
	)
}

fs.writeFileSync(
	path.join(__dirname, "../my-components/componentCopy.json"),
	JSON.stringify(componentCopy, null, 4),
	"utf-8",
)
