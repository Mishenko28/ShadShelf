import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDefault() {
	return (
		<Alert>
			<AlertTitle>Account updated successfully</AlertTitle>
			<AlertDescription>
				Your profile information has been saved. Changes will be reflected immediately.
			</AlertDescription>
		</Alert>
	)
}
