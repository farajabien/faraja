import React from 'react'
import Link from 'next/link'
import BookCalendly from '@/components/BookCalendly'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Calendar,
	Mail,
	Phone,
	Clock,
	MessageSquare,
	ArrowRight,
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Schedule a Free Consultation',
	description:
		"Book a free consultation to discuss your startup's technical needs. Quick response via WhatsApp or schedule a call. Based in Nairobi, serving East African startups.",
	openGraph: {
		title: 'Contact Farajabien - Technical Co-Founder Services',
		description:
			'Get expert technical guidance for your startup. Book a free consultation today.',
		images: ['/images/og-contact.png'],
	},
}

const Contact = () => {
	const contactMethods = [
		{
			title: 'Schedule a Call',
			description: 'Book a free 30-minute consultation',
			icon: Calendar,
			action: <BookCalendly text='Schedule Now' />,
			primary: true,
		},
		{
			title: 'WhatsApp',
			description: 'Quick questions and updates',
			icon: MessageSquare,
			action: (
				<Button asChild className='w-full bg-green-500 hover:bg-green-600'>
					<Link href='https://wa.me/254793643308'>
						Message on WhatsApp
						<ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</Button>
			),
		},
		{
			title: 'Email',
			description: 'For detailed inquiries',
			icon: Mail,
			action: (
				<Button variant='outline' asChild className='w-full'>
					<Link href='mailto:faraja.bien@gmail.com'>faraja.bien@gmail.com</Link>
				</Button>
			),
		},
		{
			title: 'Response Time',
			description: 'Usually within 24 hours',
			icon: Clock,
			info: 'Mon-Fri: 9am - 6pm EAT',
			secondary: true,
		},
	]

	return (
		<div className='min-h-screen bg-background py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						Let&apos;s Build Something Great
					</h1>
					<p className='text-xl text-muted-foreground mb-12'>
						Schedule a free consultation to discuss your startup&apos;s
						technical needs
					</p>

					<div className='grid md:grid-cols-2 gap-6 mb-12'>
						{contactMethods.map((method, index) => {
							const Icon = method.icon
							return (
								<Card
									key={index}
									className={`p-6 ${method.primary ? 'border-primary' : ''}`}>
									<div className='flex flex-col items-center text-center'>
										<div
											className={`p-3 rounded-full ${
												method.primary
													? 'bg-primary text-primary-foreground'
													: 'bg-secondary'
											} mb-4`}>
											<Icon className='h-6 w-6' />
										</div>
										<h3 className='text-lg font-semibold mb-2'>
											{method.title}
										</h3>
										<p className='text-muted-foreground mb-4'>
											{method.description}
										</p>
										{method.action}
										{method.info && (
											<p className='text-sm text-muted-foreground mt-2'>
												{method.info}
											</p>
										)}
									</div>
								</Card>
							)
						})}
					</div>

					<div className='bg-secondary/20 rounded-lg p-6'>
						<h2 className='text-xl font-semibold mb-4'>What Happens Next?</h2>
						<div className='grid gap-4 text-left'>
							<div className='flex gap-4'>
								<div className='h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0'>
									1
								</div>
								<div>
									<h3 className='font-medium'>Initial Consultation</h3>
									<p className='text-sm text-muted-foreground'>
										We&apos;ll discuss your startup idea and technical
										requirements
									</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<div className='h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0'>
									2
								</div>
								<div>
									<h3 className='font-medium'>Proposal & Timeline</h3>
									<p className='text-sm text-muted-foreground'>
										You&apos;ll receive a detailed proposal within 24 hours
									</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<div className='h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0'>
									3
								</div>
								<div>
									<h3 className='font-medium'>Begin Development</h3>
									<p className='text-sm text-muted-foreground'>
										Start building your MVP within 48 hours of approval
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
