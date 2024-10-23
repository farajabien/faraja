import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: 'Farajabien - Technical Strategy & Development Services',
	description:
		'Validate and launch your startup idea with expert technical guidance. From rapid validation to MVP development, get the expertise you need to succeed.',
}

const services = [
	{
		title: 'Startup Technical Services',
		description:
			'I provide tailored technical solutions that help you turn your startup vision into reality—from idea validation to full implementation. Let me handle the tech while you focus on your business.',
		packages: [
			{
				name: 'Rapid Validation Package',
				price: '15,000 KSH ($150)',
				turnaround: '24-48 hours',
				isPopular: false,
				includes: [
					"Comprehensive assessment of your startup idea's technical feasibility.",
					'Custom architecture plan to support scalability as your business grows.',
					'Expert recommendations for the most suitable tech stack for your project.',
					'Clear definition of essential features for your Minimum Viable Product (MVP).',
					'Accurate timeline and budget estimation to help you plan your project effectively.',
				],
			},
			{
				name: 'Landing Page + Prototype Strategy',
				price: '30,000 KSH ($300)',
				turnaround: '3-5 business days',
				isPopular: true,
				includes: [
					'Everything included in the Rapid Validation Package.',
					'A fully functional, simple landing page to showcase your product or service and capture leads.',
					'A dedicated section for a clear overview of your service or product, highlighting what it offers.',
					'Showcase your key features and benefits to attract potential users.',
					'A strong call-to-action section with a signup form to build a waitlist or capture inquiries.',
					'Mobile-friendly design to ensure your page looks great on all devices.',
					'A strategic plan for developing the next stages of your product or prototype.',
				],
			},
			{
				name: 'Prototype Frontend Development',
				price: 'Custom Pricing',
				turnaround: 'Custom Timeline',
				isPopular: false,
				includes: [
					'Complete frontend development tailored to your requirements.',
					'Landing page implementation to establish your online presence.',
					'Building core functionality as per your defined specifications.',
					'Supabase backend integration for a robust data management solution.',
					'Regular progress updates and thorough documentation throughout the development process.',
					'Full codebase handoff for your continued development and management.',
				],
			},
		],
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Services', href: '/services' },
					{ label: 'Startup Technical Services', href: '/services/startup' },
					{
						label: 'Startup Technical Services Packages',
						href: '/services/startup/packages',
					},
				]}
			/>

			<section className='container mx-auto px-4 py-12 md:py-20'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						Unlock Your Startup Potential
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						Expert technical strategy and development services to help your
						business thrive.
					</p>
					<BookCalendly text='Book Free Discovery Call' />
				</div>
			</section>

			<section className='py-16 bg-secondary/10'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
					<p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Explore our tailored packages designed for startups at various
						stages.
					</p>
					<div className='grid md:grid-cols-3 gap-8'>
						{services[0].packages.map((pkg, index) => (
							<Card
								key={index}
								className={`relative ${pkg.isPopular ? 'border-primary' : ''}`}>
								{pkg.isPopular && (
									<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
										Most Popular
									</div>
								)}
								<CardHeader>
									<CardTitle className='text-xl mb-2'>{pkg.name}</CardTitle>
									<p className='text-lg font-semibold text-primary'>
										{pkg.price}
									</p>
									<p className='text-sm text-muted-foreground'>
										Turnaround: {pkg.turnaround}
									</p>
								</CardHeader>
								<CardContent>
									<h5 className='font-semibold mb-4'>Includes:</h5>
									<ul className='space-y-2'>
										{pkg.includes.map((item, idx) => (
											<li key={idx} className='flex items-start gap-2'>
												<CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
												<span className='text-sm'>{item}</span>
											</li>
										))}
									</ul>
									<Button className='w-full mt-6'>Get Started</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
					<p className='text-xl text-muted-foreground mb-8'>
						Schedule a free discovery call to discuss your technical needs.
					</p>
					<BookCalendly text='Schedule Discovery Call' />
				</div>
			</section>
		</div>
	)
}
