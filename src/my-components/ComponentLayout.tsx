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
			<header className="corner-bevel rounded-md border-2 border-lime-400 p-2">
				<span className="flex items-center gap-1">
					<ComponentIcon size={16} />
					<h1>{componentName}</h1>
					<ChevronRightIcon size={16} />
					<h1>{variantName}</h1>
				</span>
			</header>
			<div className="flex-1 rounded-md corner-bevel border-2 border-lime-400 p-4">
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	)
}
