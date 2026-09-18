import { Outlet } from "react-router"
import Sidebar from "./Sidebar"

export default function ComponentsLayout() {
	return (
		<div className="flex h-svh items-center justify-center py-4">
			<div className="mx-auto flex h-full w-7xl gap-1.5">
				<Sidebar />
				<main className="flex-1 overflow-hidden">
					<Outlet />
				</main>
			</div>
		</div>
	)
}
