// ---
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// ---

const items = [
	{
		id: "6ff08f35-7cf8-4a31-bff0-6eebcb50da6b",
		trigger: "Lorem ipsum dolor sit amet consectetur.",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto facilis qui quisquam velit dolorum nulla animi quidem eum molestiae!",
	},
	{
		id: "de43fb5f-d51e-4c3a-965c-569dee9eaa47",
		trigger: "Lorem ipsum dolor sit amet consectetur.",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto facilis qui quisquam velit dolorum nulla animi quidem eum molestiae!",
	},
	{
		id: "eaf3188e-5001-44bd-b2a8-2d524c403ab6",
		trigger: "Lorem ipsum dolor sit amet consectetur.",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto facilis qui quisquam velit dolorum nulla animi quidem eum molestiae!",
	},
]

export default function AccordionSingle() {
	return (
		// ---
		<Accordion type="single" collapsible>
			{items.map(item => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
		// ---
	)
}
