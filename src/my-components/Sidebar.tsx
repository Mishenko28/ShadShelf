import { DotIcon } from "lucide-react"
import { myComponents } from "./my-components"
import { Link, useResolvedPath } from "react-router"
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
	const pathname = useResolvedPath({}).pathname

	const activeVariant = pathname.split("/")[3]

	return (
		<div className="w-50 border-2 border-lime-400">
			<div className="bg-accent text-accent-foreground border-b-2 border-b-lime-400 p-1.5 text-center">
				<h1>Components</h1>
			</div>
			<div>
				{navigations.map(nav => (
					<div key={nav.path} className="border-b-2 border-b-lime-400">
						<div className="px-2 py-1.25">
							<h1 className="text-sm">{nav.name}</h1>
						</div>
						{nav.variants.length > 1 && (
							<div>
								{nav.variants.map(variant => (
									<Link to={`${nav.path}/${variant.path}`} key={variant.path}>
										<div
											className={cn(
												"text-muted-foreground cursor-pointer px-2 py-0.5",
												activeVariant === variant.path
													? "text-background bg-lime-400"
													: "hover:bg-accent",
											)}
										>
											<span className="flex items-center gap-0.5 text-xs">
												<DotIcon />
												<h1>{variant.name}</h1>
											</span>
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
