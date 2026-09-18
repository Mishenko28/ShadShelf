// ---
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
// ---

export default function AvatarImageVariant() {
	return (
		// ---
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
		// ---
	)
}
