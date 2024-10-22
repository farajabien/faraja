import Link from 'next/link'
import { CheckCircle, Award, Code, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import ValidationSection from '@/components/ValidateIdeaSection'

const services = [
	{
		title: 'Expert Prototype Strategy',
		description:
			'Turn your innovative concept into a market-ready product with strategic insights that drive success.',
		icon: Code,
	},
	{
		title: 'Next.js Expertise',
		description:
			'Build high-performance, scalable web applications leveraging the latest technologies for optimal performance.',
		icon: Award,
	},
	{
		title: 'Tailored Guidance',
		description:
			'Receive personalized insights and mentorship drawn from real startup experiences in Africa, tailored to your needs.',
		icon: Briefcase,
	},
]

const benefits = [
	'Mitigate costly mistakes by implementing proven strategies from a seasoned expert.',
	'Accelerate your business growth with customized strategies that cater to your unique challenges.',
	'Reach your entrepreneurial aspirations with focused support and actionable insights.',
	'Optimize your time and resources through tried-and-tested methodologies for success.',
]

const packages = [
	{
		name: 'Validation Package',
		priceKsh: '15,000 KSH',
		priceUSD: '$150',
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
		priceKsh: '25,000 KSH',
		priceUSD: '$250',
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
]

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24 text-center'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
					Transform your idea into a successful tech business
				</h1>
				<p className='text-xl md:text-2xl text-muted-foreground mb-8'>
					with personalized expert guidance to avoid common pitfalls.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<BookCalendly text='Schedule Consultation' />
					<Link href='/services'>
						<Button variant='outline' size='lg'>
							View Services
						</Button>
					</Link>
					<Link href='/projects'>
						<Button variant='outline' size='lg'>
							View Projects
						</Button>
					</Link>
				</div>
			</section>

			{/* Services Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>My Services</h2>
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
						Let's Work Together
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

			{/* Pricing Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>Packages</h2>
					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						{packages.map((pkg) => (
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
								<div className='mb-4'>
									<span className='text-3xl font-bold'>{pkg.priceKsh}</span>
									<span className='text-muted-foreground'>
										{' '}
										/ {pkg.priceUSD}
									</span>
								</div>
								<div className='space-y-6'>
									<div>
										<h4 className='font-semibold mb-3'>Package Includes:</h4>
										<ul className='space-y-2'>
											{pkg.includes.map((feature, idx) => (
												<li key={idx} className='flex items-start gap-3'>
													<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<BookCalendly text='Get Started' />
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 container mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-4'>
					Ready to Transform Your Startup?
				</h2>
				<p className='text-xl text-muted-foreground mb-8'>
					Let&apos;s work together to turn your vision into reality while
					avoiding costly mistakes.
				</p>
				<BookCalendly />
			</section>
		</div>
	)
}
