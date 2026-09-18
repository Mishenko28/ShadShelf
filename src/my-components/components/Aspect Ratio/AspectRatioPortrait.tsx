// ---
import { AspectRatio } from "@/components/ui/aspect-ratio"
// ---

export default function AspectRatioPortrait() {
	return (
		<div className="size-100">
			// ---
			<AspectRatio ratio={3 / 4}>
				<div className="bg-accent h-full w-full" />
			</AspectRatio>
			// ---
		</div>
	)
}
