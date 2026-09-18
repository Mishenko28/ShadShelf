import { Outlet } from "react-router"
import Sidebar from "./Sidebar"

export default function ComponentsLayout() {
	return (
		<>
			<div className="flex h-svh flex-col items-center justify-center px-8 text-center text-sm lg:hidden">
				<span>This page is not available on small screens.</span>
				<span>Please use screen larger that 1024px.</span>
			</div>
			<div className="hidden h-svh items-center justify-center p-4 lg:flex">
				<div className="mx-auto flex h-full w-7xl gap-1.5">
					<Sidebar />
					<main className="flex-1 overflow-hidden">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	)
}
