import { CheckCircle2Icon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDefaultIcon() {
	return (
		<Alert>
			<CheckCircle2Icon />
			<AlertTitle>Account updated successfully</AlertTitle>
			<AlertDescription>
				Your profile information has been saved. Changes will be reflected immediately.
			</AlertDescription>
		</Alert>
	)
}
