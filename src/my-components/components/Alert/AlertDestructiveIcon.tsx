// IMPORT START
import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// IMPORT END

export default function AlertDestructiveIcon() {
	return (
		// COMPONENT START
		<Alert variant="destructive">
			<AlertCircleIcon />
			<AlertTitle>Payment failed</AlertTitle>
			<AlertDescription>
				Your payment could not be processed. Please check your payment method and try again.
			</AlertDescription>
		</Alert>
		// COMPONENT END
	)
}
