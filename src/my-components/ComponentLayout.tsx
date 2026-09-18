import { Suspense, useState } from "react"
import { ChevronRightIcon, Code2Icon, ComponentIcon, EyeIcon } from "lucide-react"
import { Outlet, useNavigate, useResolvedPath } from "react-router"
import { getImportTexts, getComponentByPath, getVariantByPath, getComponentText, getWholeCode } from "./my-components"
import { cn } from "cn"
import { useComponentStore } from "./useComponentStore"
import { useShallow } from "zustand/shallow"
import ThemeToggle from "@/components/ThemeToggle"

export default function ComponentLayout() {
	const pathname = useResolvedPath({}).pathname
	const navigate = useNavigate()

	const component = getComponentByPath(pathname.split("/")[2])
	const variant = getVariantByPath(pathname.split("/")[4])

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

	const [codeCoppied, setCodeCoppied] = useState(false)
	const handleCopyCode = async () => {
		if (!component || !variant) return
		const codeText = getWholeCode(component.name, variant.fileName)
		await navigator.clipboard.writeText(codeText)
		setCodeCoppied(true)
		setTimeout(() => setCodeCoppied(false), 1000)
	}

	const { isPreview, setIsPreview } = useComponentStore(
		useShallow(state => ({
			isPreview: state.isPreview,
			setIsPreview: state.setIsPreview,
		})),
	)

	const handleTogglePreview = (isPreview: boolean) => {
		setIsPreview(isPreview)
		navigate(`${isPreview ? "preview" : "code"}/${variant?.path}`)
	}

	return (
		<div className="flex h-full flex-col gap-1.5">
			<header className="flex items-center justify-between gap-1">
				<span className="corner-bevel flex h-10 min-w-0 flex-1 items-center gap-1 rounded-md border-2 border-lime-400 px-3">
					<ComponentIcon size={16} className="shrink-0" />
					<h1 className="shrink-0 whitespace-nowrap">{component?.name}</h1>
					<ChevronRightIcon size={16} className="shrink-0" />
					<h1 className="min-w-0 truncate">{variant?.name}</h1>
				</span>
				<div className="flex gap-1">
					<div className="corner-bevel flex h-10 rounded-md border-2 border-lime-400 p-0.5 text-sm">
						<button
							className={cn(
								"corner-bevel flex h-full w-12 cursor-pointer items-center justify-center rounded-sm",
								isPreview && "bg-lime-400 text-black",
							)}
							onClick={() => handleTogglePreview(true)}
						>
							<EyeIcon size={16} />
						</button>
						<button
							className={cn(
								"corner-bevel flex h-full w-12 cursor-pointer items-center justify-center rounded-sm",
								!isPreview && "bg-lime-400 text-black",
							)}
							onClick={() => handleTogglePreview(false)}
						>
							<Code2Icon size={16} />
						</button>
					</div>
					<div className="space-x-1">
						<button className="custom-button w-35" onClick={handleCopyImports}>
							{importCoppied ? "Copied!" : "Copy Imports"}
						</button>
						<button className="custom-button w-35" onClick={handleCopyComponent}>
							{componentCoppied ? "Copied!" : "Copy Component"}
						</button>
						<button className="custom-button w-35" onClick={handleCopyCode}>
							{codeCoppied ? "Copied!" : "Copy Code"}
						</button>
					</div>
					<ThemeToggle />
				</div>
			</header>
			<div className="corner-bevel h-full flex-1 overflow-hidden rounded-md border-2 border-lime-400 p-4">
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}
