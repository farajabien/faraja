import { CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Farajabien - Technical Strategy & Development Services',
	description:
		'Validate and launch your startup idea with expert technical guidance. From rapid validation to MVP development, get the expertise you need to succeed.',
}

const services = [
	{
		title: 'Startup Technical Services',
		description:
			'From validation to implementation, get the technical expertise your startup needs to succeed.',
		packages: [
			{
				name: 'Rapid Validation Package',
				price: '15,000 KSH ($150)',
				turnaround: '24-48 hours',
				isPopular: false,
				includes: [
					'Technical Feasibility Analysis',
					'Architecture Blueprint for Scalability',
					'Tech Stack Recommendations (Next.js, Supabase)',
					'MVP Feature Scope Definition',
					'Development Timeline & Budget Estimation',
				],
			},
			{
				name: 'Landing Page + Prototype Strategy',
				price: '30,000 KSH ($300)',
				turnaround: '3-5 business days',
				isPopular: true,
				includes: [
					'Everything in Rapid Validation Package',
					'Functional Landing Page Development',
					'Service/Product Overview Section',
					'Features & Benefits Showcase',
					'Call-to-Action with Signup Form',
					'Mobile-Responsive Design',
					'Prototype Development Strategy',
				],
			},
			{
				name: 'Prototype Frontend Development',
				price: 'Custom Pricing',
				turnaround: 'Custom Timeline',
				isPopular: false,
				includes: [
					'Complete Frontend Development (React/Next.js)',
					'Landing Page Implementation',
					'Web Application Development',
					'Supabase Database Setup & Integration',
					'Progress Updates & Documentation',
					'Full Development Handoff',
				],
			},
		],
	},
]

const deliveryFormats = [
	{
		category: 'Documentation',
		icon: '📄',
		formats: [
			'Technical Architecture Diagrams',
			'Feature Scope Documents',
			'Development Roadmaps',
			'API Documentation',
		],
	},
	{
		category: 'Code & Development',
		icon: '💻',
		formats: [
			'Frontend Codebase',
			'Database Schema',
			'API Integration',
			'Deployment Setup',
		],
	},
	{
		category: 'Strategy',
		icon: '🎯',
		formats: [
			'Tech Stack Analysis',
			'Scalability Planning',
			'Resource Requirements',
			'Cost Optimization',
		],
	},
	{
		category: 'Support',
		icon: '🤝',
		formats: [
			'Technical Consultation',
			'Implementation Guidance',
			'Code Reviews',
			'Handoff Support',
		],
	},
]

const processSteps = [
	{
		title: 'Discovery',
		description:
			"Understanding your startup's vision, requirements, and technical needs through in-depth consultation.",
	},
	{
		title: 'Strategy',
		description:
			'Developing a comprehensive technical strategy and selecting the optimal tech stack for your needs.',
	},
	{
		title: 'Implementation',
		description:
			'Rapid development of your solution, from landing pages to complete frontend applications.',
	},
	{
		title: 'Handoff & Support',
		description:
			'Thorough documentation and guidance to ensure seamless continuation of your project.',
	},
]

function ServiceCard({ service }: { service: (typeof services)[0] }) {
	return (
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
			<p className='text-xl text-muted-foreground mb-8'>
				{service.description}
			</p>

			<div className='grid md:grid-cols-3 gap-8'>
				{service.packages.map((packageItem) => (
					<Card
						key={packageItem.name}
						className={`p-6 relative ${
							packageItem.isPopular ? 'border-primary' : ''
						}`}>
						{packageItem.isPopular && (
							<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
								Most Popular
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
						Technical Strategy & Development Services
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						Validate your startup idea and launch faster with expert technical
						guidance and modern development solutions.
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
							Ready to Launch Your Startup?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Book a consultation to discuss your technical needs and find the
							right package for your startup.
						</p>
						<BookCalendly />
					</div>
				</div>
			</section>
		</div>
	)
}
