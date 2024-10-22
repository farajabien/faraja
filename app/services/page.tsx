import { CheckCircle, Code } from 'lucide-react'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'

type ServicePackage = {
	name: string
	price: string
	isPopular?: boolean
	includes: string[]
	turnaround?: string
	successBased?: boolean
	terms?: string[]
}

type DeliverableFormat = {
	category: string
	formats: string[]
	icon?: React.ReactNode
}

type Service = {
	title: string
	description: string
	packages?: ServicePackage[]
	deliverables?: {
		items: string[]
		formats?: DeliverableFormat[]
	}
}

const services: Service[] = [
	{
		title: 'Prototype Strategy Consulting',
		description:
			'Expert guidance to transform your idea into a product with a solid foundation.',
		packages: [
			{
				name: 'Basic Package',
				price: '15,000 KSH ($150)',
				turnaround: '24 hours',
				includes: [
					'Problem Analysis & Validation Report',
					'Technical Architecture Plan',
					'Database Structure Plan',
					'User Flow Diagrams',
					'Tool Stack Recommendations',
				],
			},
			{
				name: 'Full Package',
				price: '20,000 KSH ($200)',
				isPopular: true,
				turnaround: '48 hours',
				includes: [
					'All Basic Package deliverables',
					'Implementation Support Plan',
					'Cost Optimization Strategies',
					'Team Briefings',
					'Two Revision Rounds',
					'Follow-up Consultation (30 minutes)',
				],
			},
		],
	},
	{
		title: 'Prototype Development',
		description:
			'Hands-on assistance in building your prototype using modern technology stacks.',
		deliverables: {
			items: [
				'Custom Code Repository Access',
				'Architecture Overview Documentation',
				'Database Design & Setup',
				'API Integrations with Documentation',
				'Performance Optimization Insights',
			],
			formats: [
				{
					category: 'Code & Access',
					formats: [
						'GitHub Repository Access',
						'Development Environment Setup Guide',
					],
					icon: <Code />,
				},
				{
					category: 'Documentation',
					formats: [
						'PDF Technical Documentation',
						'API Documentation',
						'Database Schema Diagrams',
					],
					icon: <CheckCircle />,
				},
			],
		},
	},
	{
		title: 'VC Introduction Service',
		description:
			'Tailored for vetted startups seeking venture capital funding. We provide expert guidance and strategic investor introductions to help you secure funding.',
		packages: [
			{
				name: 'Full Service Package',
				price: '10,000 KSH ($100) + Success Fee',
				includes: [
					'Comprehensive Pitch Deck Review',
					'Professional Deck Optimization',
					'Strategic Investor Introductions',
					'Pre-Pitch Preparation Guide',
					'Follow-up Strategy Planning',
					'Ongoing Support Until Funding',
				],
				terms: [
					'Upfront Fee: 10,000 KSH ($100)',
					'Success Fee: 1% of secured investment',
					'Only pay the success fee if investment is obtained',
					'No hidden costs or extra fees',
				],
			},
		],
	},
]
const deliveryFormats = [
	{
		category: 'Documents & Reports',
		icon: '📄',
		formats: ['PDF', 'Google Docs', 'Microsoft Word'],
	},
	{
		category: 'Diagrams & Plans',
		icon: '📊',
		formats: ['PNG', 'PDF', 'Interactive Diagrams'],
	},
	{
		category: 'Meetings & Sessions',
		icon: '🎯',
		formats: ['Zoom', 'Google Meet', 'Calendar Invites'],
	},
	{
		category: 'Presentations',
		icon: '📊',
		formats: ['PowerPoint', 'Google Slides', 'PDF Export'],
	},
]

const processSteps = [
	{
		title: 'Initial Consultation',
		description:
			'We discuss your goals and challenges to determine the best approach for your idea.',
	},
	{
		title: 'Strategy Development',
		description:
			'A detailed, customized plan is created to meet your specific needs and market demands.',
	},
	{
		title: 'Implementation',
		description:
			'From prototype planning to development, we efficiently execute the strategy.',
	},
	{
		title: 'Review & Refinement',
		description:
			'Deliverables are reviewed, and necessary adjustments are made to ensure satisfaction.',
	},
]
function ServiceCard({ service }: { service: Service }) {
	return (
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
			<p className='text-xl text-muted-foreground mb-8'>
				{service.description}
			</p>

			{service.packages ? (
				<div className='grid md:grid-cols-2 gap-8'>
					{service.packages.map((packageItem) => (
						<Card
							key={packageItem.name}
							className={`p-6 relative ${
								packageItem.isPopular ? 'border-primary' : ''
							}`}>
							{packageItem.isPopular && (
								<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
									Popular
								</div>
							)}
							<h3 className='text-2xl font-bold mb-2'>{packageItem.name}</h3>
							<p
								className={`text-xl font-semibold mb-2 ${
									packageItem.successBased ? 'text-primary' : ''
								}`}>
								{packageItem.price}
							</p>
							{packageItem.successBased && (
								<p className='text-sm text-primary mb-6'>
									No upfront payment required
								</p>
							)}
							{packageItem.turnaround && (
								<p className='text-sm text-muted-foreground mb-6'>
									Turnaround: {packageItem.turnaround}
								</p>
							)}
							<div className='space-y-6'>
								<div>
									<h4 className='font-semibold mb-3'>Included Services:</h4>
									<ul className='space-y-2'>
										{packageItem.includes.map((feature, idx) => (
											<li key={idx} className='flex items-start gap-3'>
												<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								{packageItem.terms && (
									<div>
										<h4 className='font-semibold mb-3'>Terms:</h4>
										<ul className='space-y-2'>
											{packageItem.terms.map((term, idx) => (
												<li key={idx} className='flex items-start gap-3'>
													<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
													<span>{term}</span>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</Card>
					))}
				</div>
			) : service.deliverables ? (
				<div className='space-y-8'>
					<Card className='p-6'>
						<h3 className='text-xl font-bold mb-4'>Key Deliverables</h3>
						<ul className='grid md:grid-cols-2 gap-4'>
							{service.deliverables.items.map((item, idx) => (
								<li key={idx} className='flex items-start gap-3'>
									<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</Card>

					{service.deliverables.formats && (
						<Card className='p-6'>
							<h3 className='text-xl font-bold mb-4'>Delivery Formats</h3>
							<div className='grid md:grid-cols-2 gap-6'>
								{service.deliverables.formats.map((format) => (
									<div key={format.category}>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											{format.icon} {format.category}
										</h4>
										<ul className='space-y-1'>
											{format.formats.map((item) => (
												<li key={item} className='text-muted-foreground'>
													{item}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</Card>
					)}
				</div>
			) : null}
		</div>
	)
}

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Services', href: '/services' },
				]}
			/>

			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Strategic Services for Tech Startups
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						From concept validation to prototype development, I provide the
						expertise your startup needs to succeed.
					</p>
				</div>
			</section>

			{/* Services Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<div className='space-y-16'>
						{services.map((service) => (
							<ServiceCard key={service.title} service={service} />
						))}
					</div>
				</div>
			</section>

			{/* Delivery Formats Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Standard Delivery Formats
					</h2>
					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{deliveryFormats.map((format) => (
							<Card key={format.category} className='p-6'>
								<h3 className='font-semibold mb-3 flex items-center gap-2'>
									<span className='text-xl'>{format.icon}</span>
									{format.category}
								</h3>
								<ul className='space-y-2 text-sm text-muted-foreground'>
									{format.formats.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						How We Work Together
					</h2>
					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{processSteps.map((step, index) => (
							<div key={step.title} className='relative'>
								<div className='text-4xl font-bold text-primary mb-4'>
									{index + 1}
								</div>
								<h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
								<p className='text-muted-foreground'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Book a consultation today and let's discuss how I can help your
							startup succeed.
						</p>
						<BookCalendly />
					</div>
				</div>
			</section>
		</div>
	)
}
