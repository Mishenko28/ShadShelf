// IMPORT START
import { CheckCircle2Icon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// IMPORT END

export default function AlertDefaultIcon() {
	return (
		// COMPONENT START
		<Alert>
			<CheckCircle2Icon />
			<AlertTitle>Account updated successfully</AlertTitle>
			<AlertDescription>
				Your profile information has been saved. Changes will be reflected immediately.
			</AlertDescription>
		</Alert>
		// COMPONENT END
	)
}
