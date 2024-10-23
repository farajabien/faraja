import Link from 'next/link'
import { CheckCircle, Award, Code, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import ValidationSection from '@/components/ValidateIdeaSection'

const services = [
	{
		title: 'Technical Validation',
		description:
			'Expert technical analysis to validate your startup idea and plan your architecture.',
		icon: Award,
	},
	{
		title: 'Landing Page Development',
		description:
			'Quickly establish an online presence with a professional landing page.',
		icon: Code,
	},
	{
		title: 'Frontend Development',
		description:
			'Build your MVP using a modern tech stack with a focus on scalability.',
		icon: Briefcase,
	},
]

const benefits = [
	'Validate your startup idea before committing to full development.',
	'Launch faster with a clear technical strategy and professional landing page.',
	'Utilize a modern tech stack (Next.js, Supabase) for scalable solutions.',
	'Receive expert guidance throughout your technical journey.',
]

const featuredPackages = [
	{
		name: 'Rapid Validation Package',
		price: '15,000 KSH ($150)',
		turnaround: '24-48 hours',
		isPopular: false,
		includes: [
			'Technical Feasibility Analysis',
			'Architecture Blueprint for Scalability',
			'Tech Stack Recommendations',
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
			'All features in the Rapid Validation Package',
			'Professional Landing Page Development',
			'Service/Product Overview Section',
			'Features & Benefits Showcase',
			'Call-to-Action with Signup Form',
			'Mobile-Responsive Design',
			'Prototype Development Strategy',
		],
	},
]

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24 text-center'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
					Launch Your Startup Fast with Expert Technical Guidance
				</h1>
				<p className='text-xl md:text-2xl text-muted-foreground mb-8'>
					From validation to MVP, gain the technical expertise you need to
					succeed.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<BookCalendly text='Book Free Consultation' />
					<Link href='/services'>
						<Button variant='outline' size='lg'>
							View All Services
						</Button>
					</Link>
				</div>
			</section>

			{/* Services Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						How I Can Help
					</h2>
					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{services.map((service) => (
							<Card
								key={service.title}
								className='p-6 hover:shadow-xl transition-all'>
								<service.icon className='h-12 w-12 text-primary mb-4' />
								<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
								<p className='text-muted-foreground'>{service.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-16 container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Why Work With Me
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						{benefits.map((benefit, index) => (
							<div key={index} className='flex items-center gap-3'>
								<CheckCircle className='text-primary h-5 w-5 flex-shrink-0' />
								<span className='text-lg'>{benefit}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Validation Section */}
			<ValidationSection />

			{/* Featured Packages Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>
						Popular Packages
					</h2>
					<p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
						Choose a package that fits your needs, from quick validation to
						comprehensive frontend development.
					</p>
					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						{featuredPackages.map((packageItem) => (
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
					<div className='text-center mt-8'>
						<Link href='/services'>
							<Button variant='outline' size='lg'>
								View All Packages
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 container mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-4'>
					Ready to Build Your Startup?
				</h2>
				<p className='text-xl text-muted-foreground mb-8'>
					Book a free consultation to discuss your technical needs and find the
					right solution for your startup.
				</p>
				<BookCalendly />
			</section>
		</div>
	)
}
