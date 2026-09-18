// ---
import { ImageIcon, DownloadIcon, TrashIcon } from "lucide-react"
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

export default function AttachmentVertical() {
	return (
		// ---
		<Attachment orientation="vertical">
			<AttachmentMedia>
				<ImageIcon />
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
