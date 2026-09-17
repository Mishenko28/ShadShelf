import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const items = [
	{
		id: "6ff08f35-7cf8-4a31-bff0-6eebcb50da6b",
		trigger: "How do I reset my password?",
		content:
			"Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
	},
	{
		id: "de43fb5f-d51e-4c3a-965c-569dee9eaa47",
		trigger: "Can I change my subscription plan?",
		content:
			"Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
	},
	{
		id: "eaf3188e-5001-44bd-b2a8-2d524c403ab6",
		trigger: "What payment methods do you accept?",
		content:
			"We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
	},
]

export default function AccordionMultiple() {
	return (
		<Accordion type="multiple">
			{items.map(item => (
				<AccordionItem key={item.id} value={item.id}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
