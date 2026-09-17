// IMPORT START
import { CheckCircle2Icon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
// IMPORT END

export default function AlertDefaultAction() {
	return (
		// COMPONENT START
		<Alert>
			<CheckCircle2Icon />
			<AlertTitle>Dark mode is now available</AlertTitle>
			<AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
			<AlertAction>
				<Button>Enable</Button>
			</AlertAction>
		</Alert>
		// COMPONENT END
	)
}
