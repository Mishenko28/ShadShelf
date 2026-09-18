// ---
import { AspectRatio } from "@/components/ui/aspect-ratio"
// ---

export default function AspectRatioVideo() {
	return (
		<div className="size-100">
			// ---
			<AspectRatio ratio={16 / 9}>
				<div className="bg-accent h-full w-full" />
			</AspectRatio>
			// ---
		</div>
	)
}
