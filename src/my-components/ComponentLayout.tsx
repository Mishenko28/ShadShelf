import { ChevronRightIcon, ComponentIcon } from "lucide-react"
import { Outlet, useResolvedPath } from "react-router"
import { getNameByPath, getVariantNameByPath } from "./my-components"

export default function ComponentLayout() {
	const pathname = useResolvedPath({}).pathname

	const componentName = getNameByPath(pathname.split("/")[2])
	const variantName = getVariantNameByPath(pathname.split("/")[3])

	return (
		<div className="h-full border-2 border-lime-400">
			<header className="border-b-2 border-lime-400 p-2">
				<span className="flex items-center gap-1">
					<ComponentIcon size={16} />
					<h1>{componentName}</h1>
					<ChevronRightIcon size={16} />
					<h1>{variantName}</h1>
				</span>
			</header>
			<div className="p-4">
				<Outlet />
			</div>
		</div>
	)
}
