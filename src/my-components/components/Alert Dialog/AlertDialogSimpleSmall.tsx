// ---
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
// ---

export default function AlertDialogSimpleSmall() {
	return (
		// ---
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Open</Button>
			</AlertDialogTrigger>
			<AlertDialogContent size="sm">
				<AlertDialogHeader>
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
