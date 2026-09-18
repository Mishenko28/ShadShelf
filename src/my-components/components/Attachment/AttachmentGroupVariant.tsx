// ---
import { FileTextIcon, ImageIcon, FileIcon, DownloadIcon } from "lucide-react"
import {
	Attachment,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentContent,
	AttachmentTitle,
	AttachmentDescription,
	AttachmentActions,
	AttachmentAction,
} from "@/components/ui/attachment"
// ---

export default function AttachmentGroupVariant() {
	return (
		// ---
		<AttachmentGroup>
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
			<Attachment>
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
				</AttachmentActions>
			</Attachment>
			<Attachment>
				<AttachmentMedia>
					<FileIcon />
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
		</AttachmentGroup>
		// ---
	)
}
