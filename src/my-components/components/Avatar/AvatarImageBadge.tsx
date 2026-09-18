// ---
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar"
// ---

export default function AvatarImageBadge() {
	return (
		// ---
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
			<AvatarFallback>JD</AvatarFallback>
			<AvatarBadge />
		</Avatar>
		// ---
	)
}
