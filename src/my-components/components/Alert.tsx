import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertDefault() {
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

export function AlertDestructive() {
	return (
		<Alert variant="destructive">
			<AlertCircleIcon />
			<AlertTitle>Payment failed</AlertTitle>
			<AlertDescription>
				Your payment could not be processed. Please check your payment method and try again.
			</AlertDescription>
		</Alert>
	)
}

export function AlertDefaultAction() {
	return (
		<Alert>
			<CheckCircle2Icon />
			<AlertTitle>Dark mode is now available</AlertTitle>
			<AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
			<AlertAction>
				<Button>Enable</Button>
			</AlertAction>
		</Alert>
	)
}

export function AlertDestructiveAction() {
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
