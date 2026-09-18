import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import ComponentsLayout from "./my-components/ComponentsLayout.tsx"
import { myComponents } from "./my-components/my-components.ts"
import Code from "./my-components/Code.tsx"
import { ThemeProvider } from "next-themes"

type RouteType = {
	path: string
	variants: {
		path: string
		component: React.LazyExoticComponent<() => React.JSX.Element>
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
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					<Route path="components" element={<ComponentsLayout />}>
						{routes.map(route => (
							<Route path={route.path} key={route.path}>
								<Route path="preview">
									{route.variants.map(({ component: Component, path }) => (
										<Route path={path} key={path} element={<Component />} />
									))}
								</Route>
								<Route path="code">
									{route.variants.map(({ path }) => (
										<Route
											path={path}
											key={path}
											element={<Code componentPath={route.path} variantPath={path} />}
										/>
									))}
								</Route>
							</Route>
						))}
					</Route>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
)
