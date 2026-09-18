// ---
import { ImageIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// ---

export default function AlertDefaultIcon() {
	return (
		// ---
		<Alert>
			<ImageIcon />
			<AlertTitle>Lorem ipsum dolor sit amet.</AlertTitle>
			<AlertDescription>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, excepturi?
			</AlertDescription>
		</Alert>
		// ---
	)
}
