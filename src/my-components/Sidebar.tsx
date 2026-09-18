import { startTransition, useState } from "react"
import { myComponents } from "./my-components"
import { useNavigate, useResolvedPath } from "react-router"
import { cn } from "cn"

type Navigation = {
	name: string
	path: string
	variants: {
		name: string
		path: string
	}[]
}

const navigations: Navigation[] = myComponents.map(component => ({
	name: component.name,
	path: component.path,
	variants: component.variants.map(variant => ({
		name: variant.name,
		path: variant.path,
	})),
}))

export default function Sidebar() {
	const navigate = useNavigate()

	const pathname = useResolvedPath({}).pathname
	const activeVariantPath = pathname.split("/")[3]
	const activeComponentPath = pathname.split("/")[2]

	const [activeComponent, setActiveComponent] = useState<Navigation | null>(
		activeComponentPath ? navigations.find(nav => nav.path === activeComponentPath) || null : null,
	)

	const onWheelVariations = (e: React.WheelEvent<HTMLDivElement>) => {
		const isScrollingUp = e.deltaY < 0
		const currentIndex = activeComponent?.variants.findIndex(variant => variant.path === activeVariantPath) || 0
		const nextIndex = isScrollingUp ? currentIndex - 1 : currentIndex + 1

		if (activeComponent && nextIndex >= 0 && nextIndex < activeComponent.variants.length) {
			const nextVariant = activeComponent.variants[nextIndex]
			startTransition(() => navigate(`${activeComponent.path}/${nextVariant.path}`))
		}
	}

	const onWheelComponents = (e: React.WheelEvent<HTMLDivElement>) => {
		const isScrollingUp = e.deltaY < 0
		const currentIndex = activeComponent ? navigations.findIndex(nav => nav.path === activeComponent.path) : 0
		const nextIndex = isScrollingUp ? currentIndex - 1 : currentIndex + 1

		if (nextIndex >= 0 && nextIndex < navigations.length) {
			const nextComponent = navigations[nextIndex]
			setActiveComponent(nextComponent)
			startTransition(() => navigate(`${nextComponent.path}/${nextComponent.variants[0].path}`))
		}
	}

	return (
		<div className="flex gap-3">
			<div className="corner-bevel w-40 overflow-hidden rounded-md border-2 border-lime-400">
				<div className="bg-accent text-accent-foreground border-b-2 border-b-lime-400 p-1.5 text-center text-sm">
					<h1>Components</h1>
				</div>
				<div onWheel={onWheelComponents} className="h-full">
					{navigations.map(nav => (
						<h1
							key={nav.path}
							onClick={() => setActiveComponent(nav)}
							className={cn(
								"cursor-pointer px-3 py-1 text-sm",
								activeComponent?.path === nav.path ? "text-background bg-lime-400" : "hover:bg-accent",
							)}
						>
							{nav.name}
						</h1>
					))}
				</div>
			</div>
			<div className="corner-bevel w-40 overflow-hidden rounded-md border-2 border-lime-400">
				<div className="bg-accent text-accent-foreground border-b-2 border-b-lime-400 p-1.5 text-center text-sm">
					<h1>Variations</h1>
				</div>
				<div onWheel={onWheelVariations} className="h-full">
					{activeComponent && (
						<div>
							{activeComponent.variants.map(variant => (
								<h1
									key={variant.path}
									onClick={() =>
										startTransition(() => navigate(`${activeComponent.path}/${variant.path}`))
									}
									className={cn(
										"cursor-pointer px-2 py-1.5 text-xs",
										activeVariantPath === variant.path
											? "text-background bg-lime-400"
											: "hover:bg-accent",
									)}
								>
									{variant.name}
								</h1>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
