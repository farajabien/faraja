import { CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'

type Service = {
	title: string
	description: string
	packages: ServicePackage[]
}

type ServicePackage = {
	name: string
	price: string
	isPopular?: boolean
	includes: string[]
	turnaround: string
}

export const metadata: Metadata = {
	title: 'Farajabien - Technical Co-Founder Services',
	description:
		'Expert technical strategy and implementation guidance for startups. From validation to execution, get the technical expertise you need to succeed.',
}

const services: Service[] = [
	{
		title: 'Technical Co-Founder Services',
		description:
			'Get the technical expertise your startup needs with proven strategies across 9 successful projects.',
		packages: [
			{
				name: 'Validation Package',
				price: '15,000 KSH ($150)',
				turnaround: '24-48 hours',
				includes: [
					'Technical Feasibility Analysis',
					'Architecture Blueprint',
					'Stack Recommendations',
					'MVP Feature Scope',
					'Development Timeline & Budget',
					'Security Considerations',
					'30-min Strategy Call',
				],
			},
			{
				name: 'Implementation Package',
				price: '25,000 KSH ($250)',
				isPopular: true,
				turnaround: '3-5 business days',
				includes: [
					'Everything in Validation Package',
					'Detailed Technical Specifications',
					'Development Roadmap',
					'Infrastructure Planning',
					'Scalability Strategy',
					'Team Structure Guidance',
					'2 Review Sessions',
					'30-min Implementation Call',
					'14-day Email Support',
				],
			},
		],
	},
]

const deliveryFormats = [
	{
		category: 'Technical Documents',
		icon: '📋',
		formats: [
			'Architecture Diagrams',
			'Technical Specs',
			'Implementation Guide',
		],
	},
	{
		category: 'Strategy Assets',
		icon: '🎯',
		formats: ['Development Roadmap', 'Resource Planning', 'Stack Analysis'],
	},
	{
		category: 'Support Sessions',
		icon: '💡',
		formats: ['Strategy Calls', 'Review Meetings', 'Team Briefings'],
	},
	{
		category: 'Custom Code',
		icon: '⚡',
		formats: ['Proof of Concepts', 'Code Examples', 'Setup Scripts'],
	},
]

const processSteps = [
	{
		title: 'Technical Discovery',
		description: 'Understanding your vision and technical requirements.',
	},
	{
		title: 'Solution Design',
		description: 'Creating your technical architecture and roadmap.',
	},
	{
		title: 'Implementation Planning',
		description: 'Detailed execution strategy and resource planning.',
	},
	{
		title: 'Ongoing Support',
		description: 'Guidance and reviews during development.',
	},
]

function ServiceCard({ service }: { service: Service }) {
	return (
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
			<p className='text-xl text-muted-foreground mb-8'>
				{service.description}
			</p>

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
						<p className='text-xl font-semibold text-primary mb-4'>
							{packageItem.price}
						</p>
						<p className='text-sm text-muted-foreground mb-6'>
							Turnaround: {packageItem.turnaround}
						</p>
						<div className='space-y-6'>
							<div>
								<h4 className='font-semibold mb-3'>Package Includes:</h4>
								<ul className='space-y-2'>
									{packageItem.includes.map((feature, idx) => (
										<li key={idx} className='flex items-start gap-3'>
											<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Card>
				))}
			</div>
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
						Technical Co-Founder Services
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						Get the technical expertise your startup needs with proven
						strategies and modern tech stack implementation.
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
						Service Deliverables
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
						Our Working Process
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
						<h2 className='text-3xl font-bold mb-4'>
							Ready to Build Something Great?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Book a consultation to discuss how we can bring your technical
							vision to life.
						</p>
						<BookCalendly />
					</div>
				</div>
			</section>
		</div>
	)
}
