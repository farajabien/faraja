import { CheckCircle, ArrowRight, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'

type Service = {
	title: string
	description: string
	price?: string
	features?: {
		name: string
		price: string
		isPopular?: boolean
		includes: string[]
	}[]
	featureStrings?: string[]
}

const services: Service[] = [
	{
		title: 'Prototype Strategy Consulting',
		description:
			'Get expert guidance on turning your idea into a viable product',
		features: [
			{
				name: 'Basic Package',
				price: '15,000 KSH ($150)',
				includes: [
					'Problem analysis & validation',
					'Technical architecture planning',
					'Database structure planning',
					'User flow diagrams',
					'Tool stack recommendations',
					'24-hour turnaround time',
				],
			},
			{
				name: 'Full Package',
				price: '20,000 KSH ($200)',
				isPopular: true,
				includes: [
					'Everything in Basic Package',
					'Implementation support',
					'Cost optimization strategies',
					'Technical team briefings',
					'Two revision rounds',
					'30-minute follow-up consultation',
					'48-hour turnaround time',
					'Satisfaction guarantee',
				],
			},
		],
	},
	{
		title: 'Prototype Development',
		description:
			'Hands-on assistance in building your prototype using modern tech stacks',
		featureStrings: [
			'Custom development using Next.js',
			'Scalable architecture implementation',
			'Database design and setup',
			'API integration',
			'Performance optimization',
			'Custom pricing based on project scope',
		],
	},
	{
		title: 'VC Introduction Service',
		price: '10,000 KSH ($100)',
		description: 'For vetted startups ready for venture capital funding',
		featureStrings: [
			'Startup pitch review',
			'Investor deck optimization',
			'Curated introductions to relevant investors',
			'Pre-pitch preparation guidance',
			'Follow-up strategy planning',
		],
	},
]

const processSteps = [
	{
		title: 'Initial Consultation',
		description:
			'We discuss your idea, goals, and current challenges to determine the best approach.',
	},
	{
		title: 'Strategy Development',
		description:
			'I create a detailed plan tailored to your specific needs and market requirements.',
	},
	{
		title: 'Implementation',
		description:
			"Whether it's prototype planning or development, we execute the strategy efficiently.",
	},
	{
		title: 'Review & Refinement',
		description:
			'We review the deliverables and make necessary adjustments to ensure satisfaction.',
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Projects', href: '/services' },
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
						expertise you need to succeed
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

			{/* Process Section */}
			<section className='py-16'>
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
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Book a consultation and let&apos;s discuss how I can help your
							startup succeed
						</p>
						<BookCalendly />
					</div>
				</div>
			</section>
		</div>
	)
}

function ServiceCard({ service }: { service: Service }) {
	return (
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
			<p className='text-xl text-muted-foreground mb-8'>
				{service.description}
			</p>

			{service.features && Array.isArray(service.features) ? (
				<div className='grid md:grid-cols-2 gap-8'>
					{service.featureStrings?.map((pkg) => {
						// Determine if the feature is a string or an object
						if (typeof pkg === 'string') {
							// For string features (like in Prototype Development)
							return (
								<Card key={pkg} className='p-6 relative'>
									<h3 className='text-2xl font-bold mb-2'>{pkg}</h3>
								</Card>
							)
						}
					})}

					{service.features.map((pkg) => (
						<Card
							key={pkg.name}
							className={`p-6 relative ${
								pkg.isPopular ? 'border-primary' : ''
							}`}>
							{pkg.isPopular && (
								<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
									Popular
								</div>
							)}
							<h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
							<p className='text-xl font-semibold mb-6'>{pkg.price}</p>
							<ul className='space-y-2'>
								{/* Check if `pkg.includes` is an array before mapping */}
								{Array.isArray(pkg.includes) ? (
									pkg.includes.map((feature, idx) => (
										<li key={idx} className='flex items-start gap-3'>
											<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
											<span>{feature}</span>
										</li>
									))
								) : (
									<p>No features available for this package.</p>
								)}
							</ul>
						</Card>
					))}
				</div>
			) : (
				<p>No features found for this service.</p>
			)}
		</div>
	)
}
