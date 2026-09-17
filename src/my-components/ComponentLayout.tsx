import { Suspense, useState } from "react"
import { ChevronRightIcon, ComponentIcon } from "lucide-react"
import { Outlet, useResolvedPath } from "react-router"
import { getImportTexts, getComponentByPath, getVariantByPath, getComponentText } from "./my-components"

export default function ComponentLayout() {
	const pathname = useResolvedPath({}).pathname

	const component = getComponentByPath(pathname.split("/")[2])
	const variant = getVariantByPath(pathname.split("/")[3])

	const [importCoppied, setImportCoppied] = useState(false)
	const handleCopyImports = async () => {
		if (!component || !variant) return
		const importTexts = getImportTexts(component.name, variant.fileName)
		await navigator.clipboard.writeText(importTexts)
		setImportCoppied(true)
		setTimeout(() => setImportCoppied(false), 1000)
	}

	const [componentCoppied, setComponentCoppied] = useState(false)
	const handleCopyComponent = async () => {
		if (!component || !variant) return
		const componentText = getComponentText(component.name, variant.fileName)
		await navigator.clipboard.writeText(componentText)
		setComponentCoppied(true)
		setTimeout(() => setComponentCoppied(false), 1000)
	}

	return (
		<div className="flex h-full flex-col gap-1.5">
			<header className="corner-bevel flex items-center justify-between rounded-md border-2 border-lime-400 p-1.25 pl-3">
				<span className="flex items-center gap-1">
					<ComponentIcon size={16} />
					<h1>{component?.name}</h1>
					<ChevronRightIcon size={16} />
					<h1>{variant?.name}</h1>
				</span>
				<div className="space-x-1">
					<button className="custom-button w-38" onClick={handleCopyImports}>
						{importCoppied ? "Copied!" : "Copy Imports"}
					</button>
					<button className="custom-button w-38" onClick={handleCopyComponent}>
						{componentCoppied ? "Copied!" : "Copy Component"}
					</button>
				</div>
			</header>
			<div className="corner-bevel flex-1 rounded-md border-2 border-lime-400 p-4">
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}
