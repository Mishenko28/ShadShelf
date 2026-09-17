export const myComponents = [
	{
		name: "Accordion",
		path: "accordion",
		variants: [
			{
				name: "Single",
				path: "accordion-single",
				component: () => import("./components/Accordion").then(module => ({ default: module.AccordionSingle })),
			},
			{
				name: "Multiple",
				path: "accordion-multiple",
				component: () =>
					import("./components/Accordion").then(module => ({ default: module.AccordionMultiple })),
			},
		],
	},
	{
		name: "Alert",
		path: "alert",
		variants: [
			{
				name: "Default",
				path: "alert-default",
				component: () => import("./components/Alert").then(module => ({ default: module.AlertDefault })),
			},
			{
				name: "Destructive",
				path: "alert-destructive",
				component: () => import("./components/Alert").then(module => ({ default: module.AlertDestructive })),
			},
			{
				name: "Default Action",
				path: "alert-default-action",
				component: () => import("./components/Alert").then(module => ({ default: module.AlertDefaultAction })),
			},
			{
				name: "Destructive Action",
				path: "alert-destructive-action",
				component: () =>
					import("./components/Alert").then(module => ({ default: module.AlertDestructiveAction })),
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
