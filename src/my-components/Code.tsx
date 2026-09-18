import { getComponentByPath, getVariantByPath, getWholeCode } from "./my-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Code({ componentPath, variantPath }: { componentPath: string; variantPath: string }) {
	const component = getComponentByPath(componentPath)
	const variant = getVariantByPath(variantPath)

	const code = getWholeCode(component?.name || "", variant?.fileName || "")

	return (
		<div className="h-full overflow-hidden">
			<SyntaxHighlighter
				customStyle={{ height: "100%", scrollbarWidth: "none" }}
				language="tsx"
				style={vscDarkPlus}
				showLineNumbers
			>
				{code}
			</SyntaxHighlighter>
		</div>
	)
}
