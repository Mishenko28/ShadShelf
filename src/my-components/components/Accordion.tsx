import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const items = [
	{
		id: 1,
		value: "item-1",
		trigger: "How do I reset my password?",
		content:
			"Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
	},
	{
		id: 2,
		value: "item-2",
		trigger: "Can I change my subscription plan?",
		content:
			"Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
	},
	{
		id: 3,
		value: "item-3",
		trigger: "What payment methods do you accept?",
		content:
			"We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
	},
]

export function AccordionSingle() {
	return (
		<Accordion type="single" collapsible>
			{items.map(item => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export function AccordionMultiple() {
	return (
		<Accordion type="multiple">
			{items.map(item => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
