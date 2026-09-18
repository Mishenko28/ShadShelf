// ---
import { FileTextIcon, DownloadIcon, TrashIcon } from "lucide-react"
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

export default function AttachmentVerticalXs() {
	return (
		// ---
		<Attachment orientation="vertical" size="xs">
			<AttachmentMedia>
				<FileTextIcon />
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
