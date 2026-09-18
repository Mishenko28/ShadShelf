import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

export type ComponentCopy = {
	[key: string]: {
		[variant: string]: {
			importText: string
			componentText: string
			wholeCode: string
		}
	}
}

const SEPARATOR = "// ---"

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

			const contentParts = contents.split(SEPARATOR)

			if (contentParts.length < 4) {
				console.warn(
					`Skipping ${componentName}/${variation} because it does not have the required number of separators (${contentParts.length - 1}/4).`,
				)
				return acc
			}

			const importText = contentParts[1].trim()
			const componentText = contentParts[3].trim()
			const wholeCode = contents
				.split(/\r?\n/)
				.filter(line => line.trim() !== SEPARATOR)
				.join("\n")
				.trim()

			acc[variationName] = {
				importText,
				componentText,
				wholeCode,
			}

			console.log(`+ ${componentName}/${variationName}`)
			return acc
		},
		{} as { [key: string]: { importText: string; componentText: string; wholeCode: string } },
	)
}

fs.writeFileSync(
	path.join(__dirname, "../my-components/componentCopy.json"),
	JSON.stringify(componentCopy, null, 4),
	"utf-8",
)
