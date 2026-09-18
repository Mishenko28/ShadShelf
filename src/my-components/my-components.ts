import { lazy } from "react"
import componentCopyJson from "./componentCopy.json"
import type { ComponentCopy } from "@/scripts/generate"

const componentCopy: ComponentCopy = componentCopyJson

export const myComponents = [
	{
		name: "Accordion",
		path: "accordion",
		variants: [
			{
				name: "Single",
				path: "single",
				fileName: "AccordionSingle",
				component: lazy(() =>
					import("./components/Accordion/AccordionSingle").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Multiple",
				path: "multiple",
				fileName: "AccordionMultiple",
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
				fileName: "AlertDefault",
				component: lazy(() =>
					import("./components/Alert/AlertDefault").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive",
				path: "destructive",
				fileName: "AlertDestructive",
				component: lazy(() =>
					import("./components/Alert/AlertDestructive").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Default Icon",
				path: "default-icon",
				fileName: "AlertDefaultIcon",
				component: lazy(() =>
					import("./components/Alert/AlertDefaultIcon").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive Icon",
				path: "destructive-icon",
				fileName: "AlertDestructiveIcon",
				component: lazy(() =>
					import("./components/Alert/AlertDestructiveIcon").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Default Action",
				path: "default-action",
				fileName: "AlertDefaultAction",
				component: lazy(() =>
					import("./components/Alert/AlertDefaultAction").then(module => ({ default: module.default })),
				),
			},
			{
				name: "Destructive Action",
				path: "destructive-action",
				fileName: "AlertDestructiveAction",
				component: lazy(() =>
					import("./components/Alert/AlertDestructiveAction").then(module => ({ default: module.default })),
				),
			},
		],
	},
	{
		name: "Alert Dialog",
		path: "alert-dialog",
		variants: [
			{
				name: "All",
				path: "all",
				fileName: "AlertDialogAll",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogAll").then(module => ({ default: module.default })),
				),
			},
			{
				name: "All Small",
				path: "all-small",
				fileName: "AlertDialogAllSmall",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogAllSmall").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "All Destructive",
				path: "all-destructive",
				fileName: "AlertDialogAllDestructive",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogAllDestructive").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "All Small Destructive",
				path: "all-small-destructive",
				fileName: "AlertDialogAllSmallDestructive",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogAllSmallDestructive").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "Simple",
				path: "simple",
				fileName: "AlertDialogSimple",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogSimple").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "Simple Destructive",
				path: "simple-destructive",
				fileName: "AlertDialogSimpleDestructive",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogSimpleDestructive").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "Simple Small",
				path: "simple-small",
				fileName: "AlertDialogSimpleSmall",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogSimpleSmall").then(module => ({
						default: module.default,
					})),
				),
			},
			{
				name: "Simple Small Destructive",
				path: "simple-small-destructive",
				fileName: "AlertDialogSimpleSmallDestructive",
				component: lazy(() =>
					import("./components/Alert Dialog/AlertDialogSimpleSmallDestructive").then(module => ({
						default: module.default,
					})),
				),
			},
		],
	},
]

export function getComponentByPath(path: string) {
	return myComponents.find(component => component.path === path)
}

export function getVariantByPath(variantPath: string) {
	return myComponents.flatMap(component => component.variants).find(variant => variant.path === variantPath)
}

export function getImportTexts(componentName: string, variantFileName: string) {
	return componentCopy[componentName]?.[variantFileName]?.importText || ""
}

export function getComponentText(componentName: string, variantFileName: string) {
	return componentCopy[componentName]?.[variantFileName]?.componentText || ""
}

export function getWholeCode(componentName: string, variantFileName: string) {
	return componentCopy[componentName]?.[variantFileName]?.wholeCode || ""
}
