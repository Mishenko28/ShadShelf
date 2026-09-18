import { Link } from "react-router"

export default function App() {
	return (
		<div className="flex h-svh items-center justify-center py-4">
			<div className="mx-auto flex h-full w-6xl flex-col items-center justify-center border-2 border-lime-400">
				<h1>SHADCN COMPONENTS</h1>
				<Link to="/components" className="underline">
					Components
				</Link>
			</div>
		</div>
	)
}
