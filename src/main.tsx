import { lazy, StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import ComponentsLayout from "./my-components/ComponentsLayout.tsx"
import { myComponents } from "./my-components/my-components.ts"
import ComponentLayout from "./my-components/ComponentLayout.tsx"

type RouteType = {
	path: string
	variants: {
		path: string
		component: () => Promise<{
			default: () => React.JSX.Element
		}>
	}[]
}

const routes: RouteType[] = myComponents.map(route => ({
	path: route.path,
	variants: route.variants.map(variant => ({
		path: variant.path,
		component: variant.component,
	})),
}))

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />

					<Route path="components" element={<ComponentsLayout />}>
						{routes.map(route => (
							<Route path={route.path} key={route.path} element={<ComponentLayout />}>
								{route.variants.map(variant => {
									const Component = lazy(variant.component)

									return (
										<Route
											path={variant.path}
											key={variant.path}
											element={
												<Suspense fallback={<div>Loading...</div>}>
													<Component />
												</Suspense>
											}
										/>
									)
								})}
							</Route>
						))}
					</Route>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
)
