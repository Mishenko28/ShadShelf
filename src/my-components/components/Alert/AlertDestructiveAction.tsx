// ---
import { ImageIcon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
// ---

export default function AlertDestructiveAction() {
	return (
		// ---
		<Alert variant="destructive">
			<ImageIcon />
			<AlertTitle>Lorem ipsum dolor sit amet.</AlertTitle>
			<AlertDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse?</AlertDescription>
			<AlertAction>
				<Button>Action</Button>
			</AlertAction>
		</Alert>
		// ---
	)
}
