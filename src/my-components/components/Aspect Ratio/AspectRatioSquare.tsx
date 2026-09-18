// ---
import { AspectRatio } from "@/components/ui/aspect-ratio"
// ---

export default function AspectRatioSquare() {
	return (
		<div className="size-100">
			// ---
			<AspectRatio ratio={1}>
				<div className="bg-accent h-full w-full" />
			</AspectRatio>
			// ---
		</div>
	)
}
