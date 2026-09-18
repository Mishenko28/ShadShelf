// ---
import { DownloadIcon, TrashIcon } from "lucide-react"
import {
	Attachment,
	AttachmentMedia,
	AttachmentContent,
	AttachmentTitle,
	AttachmentDescription,
	AttachmentActions,
	AttachmentAction,
} from "@/components/ui/attachment"
// ---

export default function AttachmentImageVerticalSmall() {
	return (
		// ---
		<Attachment orientation="vertical" size="sm">
			<AttachmentMedia variant="image">
				<div className="bg-accent h-full w-full" />
			</AttachmentMedia>
			<AttachmentContent>
				<AttachmentTitle>Lorem ipsum dolor sit amet.</AttachmentTitle>
				<AttachmentDescription>Lorem ipsum dolor sit amet consectetur.</AttachmentDescription>
			</AttachmentContent>
			<AttachmentActions>
				<AttachmentAction>
					<DownloadIcon />
				</AttachmentAction>
				<AttachmentAction variant="destructive">
					<TrashIcon />
				</AttachmentAction>
			</AttachmentActions>
		</Attachment>
		// ---
	)
}
