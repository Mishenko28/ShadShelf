import Sidebar from "./Sidebar"
import { Suspense, useEffect, useState } from "react"
import { ChevronRightIcon, Code2Icon, ComponentIcon, EyeIcon, MoveLeftIcon } from "lucide-react"
import { Outlet, useNavigate, useResolvedPath } from "react-router"
import { getImportTexts, getComponentByPath, getVariantByPath, getComponentText, getWholeCode } from "./my-components"
import { cn } from "cn"
import { useComponentStore } from "./useComponentStore"
import { useShallow } from "zustand/shallow"
import ThemeToggle from "@/components/ThemeToggle"

export default function ComponentsLayout() {
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
		if (!component || !variant) return
		setIsPreview(isPreview)
		navigate(`${component.path}/${isPreview ? "preview" : "code"}/${variant.path}`)
	}

	useEffect(() => {
		if (pathname.split("/")[3] === "code") {
			setIsPreview(false)
		}
	}, [])

	return (
		<>
			<div className="flex h-svh flex-col items-center justify-center px-8 text-center text-sm lg:hidden">
				<span>This page is not available on small screens.</span>
				<span>Please use screen larger that 1024px.</span>
			</div>
			<div className="hidden h-svh items-center justify-center p-4 lg:flex">
				<div className="mx-auto flex h-full w-7xl gap-1.5">
					<Sidebar />
					<main className="flex flex-1 flex-col gap-1.5 overflow-hidden">
						<header className="flex items-center justify-between gap-1">
							<span className="corner-bevel flex h-10 min-w-0 flex-1 items-center gap-1 rounded-md border-2 border-lime-400 px-3">
								{component && (
									<>
										<ComponentIcon size={16} className="shrink-0" />
										<h1 className="shrink-0 whitespace-nowrap">{component?.name}</h1>
										{variant && (
											<>
												<ChevronRightIcon size={16} className="shrink-0" />
												<h1 className="min-w-0 truncate">{variant?.name}</h1>
											</>
										)}
									</>
								)}
							</span>
							<div className="flex gap-1">
								<div className="corner-bevel flex h-10 rounded-md border-2 border-lime-400 p-0.5 text-sm">
									<button
										className={cn(
											"corner-bevel flex h-full w-12 cursor-pointer items-center justify-center rounded-sm",
											isPreview && "bg-lime-400 text-black disabled:disabled:bg-lime-400/50",
										)}
										disabled={!component || !variant}
										onClick={() => handleTogglePreview(true)}
									>
										<EyeIcon size={16} />
									</button>
									<button
										className={cn(
											"corner-bevel flex h-full w-12 cursor-pointer items-center justify-center rounded-sm",
											!isPreview && "bg-lime-400 text-black disabled:disabled:bg-lime-400/50",
										)}
										disabled={!component || !variant}
										onClick={() => handleTogglePreview(false)}
									>
										<Code2Icon size={16} />
									</button>
								</div>
								<div className="space-x-1">
									<button
										className="custom-button w-35"
										disabled={!component || !variant}
										onClick={handleCopyImports}
									>
										{importCoppied ? "Copied!" : "Copy Imports"}
									</button>
									<button
										className="custom-button w-35"
										disabled={!component || !variant}
										onClick={handleCopyComponent}
									>
										{componentCoppied ? "Copied!" : "Copy Component"}
									</button>
									<button
										className="custom-button w-35"
										disabled={!component || !variant}
										onClick={handleCopyCode}
									>
										{codeCoppied ? "Copied!" : "Copy Code"}
									</button>
								</div>
								<ThemeToggle className="" />
							</div>
						</header>
						<div
							className={cn(
								"corner-bevel h-full flex-1 overflow-hidden rounded-md border-2 border-lime-400",
								isPreview && "p-4",
							)}
						>
							{!component || !variant ? (
								<div className="flex h-full w-full items-center justify-center">
									<div className="flex items-center gap-2">
										<MoveLeftIcon />
										<span className="text-sm">Select a component & variant to preview</span>
									</div>
								</div>
							) : (
								<Suspense fallback={<p>Loading...</p>}>
									<Outlet />
								</Suspense>
							)}
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
