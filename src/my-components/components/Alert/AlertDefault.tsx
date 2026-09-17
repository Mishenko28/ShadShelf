// IMPORT START
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// IMPORT END

export default function AlertDefault() {
	return (
		// COMPONENT START
		<Alert>
			<AlertTitle>Account updated successfully</AlertTitle>
			<AlertDescription>
				Your profile information has been saved. Changes will be reflected immediately.
			</AlertDescription>
		</Alert>
		// COMPONENT END
	)
}
