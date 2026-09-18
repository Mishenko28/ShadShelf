// ---
import { ImageIcon } from "lucide-react"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
// ---

export default function AlertDialogAll() {
	return (
		// ---
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Open</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogMedia>
						<ImageIcon />
					</AlertDialogMedia>
					<AlertDialogTitle>Lorem ipsum dolor sit amet.</AlertDialogTitle>
					<AlertDialogDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, necessitatibus.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Action</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
		// ---
	)
}
