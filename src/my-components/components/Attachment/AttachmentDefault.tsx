// ---
import { FileTextIcon, DownloadIcon } from "lucide-react"
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

export default function AttachmentDefault() {
	return (
		// ---
		<Attachment>
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
			</AttachmentActions>
		</Attachment>
		// ---
	)
}
