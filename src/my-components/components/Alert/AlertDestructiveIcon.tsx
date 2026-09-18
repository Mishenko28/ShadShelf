// ---
import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// ---

export default function AlertDestructiveIcon() {
	return (
		// ---
		<Alert variant="destructive">
			<AlertCircleIcon />
			<AlertTitle>Lorem ipsum dolor sit amet.</AlertTitle>
			<AlertDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur.
			</AlertDescription>
		</Alert>
		// ---
	)
}
