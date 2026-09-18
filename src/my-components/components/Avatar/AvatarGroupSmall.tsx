// ---
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
// ---

export default function AvatarGroupSmall() {
	return (
		// ---
		<AvatarGroup>
			<Avatar size="sm">
				<AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar size="sm">
				<AvatarImage src="https://github.com/leerob.png" alt="Avatar" />
				<AvatarFallback>LR</AvatarFallback>
			</Avatar>
			<Avatar size="sm">
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
			<AvatarGroupCount>+3</AvatarGroupCount>
		</AvatarGroup>
		// ---
	)
}
