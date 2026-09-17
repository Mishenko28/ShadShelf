import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertDestructiveAction() {
	return (
		<Alert variant="destructive">
			<AlertCircleIcon />
			<AlertTitle>Payment failed</AlertTitle>
			<AlertDescription>
				Your payment could not be processed. Please check your payment method and try again.
			</AlertDescription>
			<AlertAction>
				<Button>Enable</Button>
			</AlertAction>
		</Alert>
	)
}
