// ---
import { ImageIcon } from "lucide-react"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
// ---

export default function AlertDefaultAction() {
	return (
		// ---
		<Alert>
			<ImageIcon />
			<AlertTitle>Lorem ipsum dolor sit amet.</AlertTitle>
			<AlertDescription>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, earum!
			</AlertDescription>
			<AlertAction>
				<Button>Enable</Button>
			</AlertAction>
		</Alert>
		// ---
	)
}
