import { lazy } from "react"

export const myComponents = [
	{
		name: "Accordion",
		path: "accordion",
		variants: [
			{
				name: "Single",
				path: "single",
				component: lazy(() =>
					import("./components/Accordion/AccordionSingle").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Multiple",
				path: "multiple",
				component: lazy(() =>
					import("./components/Accordion/AccordionMultiple").then(module => ({ default: module.default })),
				),
			},
		],
	},
	{
		name: "Alert",
		path: "alert",
		variants: [
			{
				name: "Default",
				path: "default",
				component: lazy(() =>
					import("./components/Alert/AlertDefault").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive",
				path: "destructive",
				component: lazy(() =>
					import("./components/Alert/AlertDestructive").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Default Icon",
				path: "default-icon",
				component: lazy(() =>
					import("./components/Alert/AlertDefaultIcon").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive Icon",
				path: "destructive-icon",
				component: lazy(() =>
					import("./components/Alert/AlertDestructiveIcon").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Default Action",
				path: "default-action",
				component: lazy(() =>
					import("./components/Alert/AlertDefaultAction").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive Action",
				path: "destructive-action",
				component: lazy(() =>
					import("./components/Alert/AlertDestructiveAction").then(module => ({ default: module.default })),
				),
			},
		],
	},
]

export function getNameByPath(path: string) {
	const component = myComponents.find(component => component.path === path)
	if (!component) return path
	return component.name
}

export function getVariantNameByPath(variantPath: string) {
	const variant = myComponents.flatMap(component => component.variants).find(variant => variant.path === variantPath)
	if (!variant) return variantPath
	return variant.name
}
