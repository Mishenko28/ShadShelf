import { Suspense } from "react"
import { ChevronRightIcon, ComponentIcon } from "lucide-react"
import { Outlet, useResolvedPath } from "react-router"
import { getNameByPath, getVariantNameByPath } from "./my-components"

export default function ComponentLayout() {
	const pathname = useResolvedPath({}).pathname

	const componentName = getNameByPath(pathname.split("/")[2])
	const variantName = getVariantNameByPath(pathname.split("/")[3])

	return (
		<div className="flex h-full flex-col gap-1.5">
			<header className="corner-bevel flex items-center justify-between rounded-md border-2 border-lime-400 p-1.25 pl-3">
				<span className="flex items-center gap-1">
					<ComponentIcon size={16} />
					<h1>{componentName}</h1>
					<ChevronRightIcon size={16} />
					<h1>{variantName}</h1>
				</span>
				<div className="space-x-1">
					<button className="custom-button">Copy Imports</button>
					<button className="custom-button">Copy Component</button>
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
