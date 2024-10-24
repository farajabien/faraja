import {
	Calendar,
	CheckCircle,
	Code,
	Database,
	FileCode,
	Layout,
	RefreshCw,
} from 'lucide-react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'

import ServiceCard from '@/components/ServiceCard'
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
				name: '1-Hour Consultation',
				price: '5,000 KSH ($50)',
				turnaround: '1 hour',
				isPopular: false,
				includes: [
					'One-on-one consultation to discuss your startup idea or technical challenge.',
					'Expert feedback on your business strategy or technology stack.',
					'Actionable advice for moving forward with your project.',
				],
			},
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
				name: 'Stripped-down Landing Page Package',
				price: '20,000 KSH ($200)',
				turnaround: '3-5 business days',
				isPopular: true,
				includes: [
					'Basic landing page design to capture leads and showcase your service.',
					'Email collection setup (without prototype strategy).',
					'Free domain: <BUSINESS>.fbien.com.',
					'Free SSL and hosting for one year.',
					'Mobile-friendly design for accessibility on all devices.',
				],
			},
			{
				name: 'Logo + Landing Page + Email Collection Package',
				price: '25,000 KSH ($250)',
				turnaround: '48 hours',
				isPopular: true,
				includes: [
					'Custom logo design to establish your brand identity.',
					'A fully functional landing page to capture leads and showcase your service.',
					'Email collection setup to grow your subscriber list.',
					'Free domain: <BUSINESS>.fbien.com.',
					'Free SSL and hosting for one year.',
					'Mobile-friendly design to ensure accessibility on all devices.',
					'A strategic overview of your service offerings.',
				],
			},
			{
				name: 'Prototype Frontend Development Package',
				price: 'Starting at 50,000 KSH ($500)',
				turnaround: 'Custom Timeline',
				isPopular: false,
				includes: [
					'Complete frontend development tailored to your requirements.',
					'Core functionality build-out based on your specifications.',
					'Supabase backend integration for scalable data management.',
					'Progress updates and full documentation throughout the process.',
					'Full codebase handoff for your continued development and management.',
				],
			},
		],
	},
	{
		title: 'Branding & Marketing Design Services',
		type: 'branding',
		description:
			'I offer professional design services to help you create a cohesive and memorable brand presence, from logos to marketing materials that make a lasting impression.',
		packages: [
			{
				name: 'Brand Identity Package',
				price: '25,000 KSH ($250)',
				turnaround: '5-7 business days',
				isPopular: true,
				includes: [
					'Custom logo design to establish your brand identity.',
					'Business card design (print-ready).',
					'Company profile design to showcase your business professionally.',
					'Free consultation on brand positioning and identity strategy.',
				],
			},
			{
				name: 'Marketing Essentials Package',
				price: '15,000 KSH ($150)',
				turnaround: '3-5 business days',
				isPopular: false,
				includes: [
					'Design of 2-3 posters or flyers for marketing campaigns.',
					'Email signature design (to match brand identity).',
					'Social media graphics for your upcoming promotions or campaigns.',
					'Limited revisions to keep the project within scope.',
				],
			},
			{
				name: 'Landing Page Design',
				price: '25,000 KSH ($250)',
				turnaround: '5-7 business days',
				isPopular: false,
				includes: [
					'A professionally designed landing page to capture leads and showcase your business.',
					'Custom email collection setup (with tools like Mailchimp).',
					'Mobile-friendly and SEO-optimized design.',
					'Free domain and SSL setup for one year.',
				],
			},
		],
	},
]

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''

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

			{services.map((service, index) => (
				<section key={index} className='py-16 bg-secondary/10'>
					<div className='container mx-auto px-4'>
						<h2 className='text-3xl font-bold text-center mb-8'>
							{service.title}
						</h2>
						<p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
							{service.description}
						</p>
						<div className='grid md:grid-cols-3 gap-8 mb-8'>
							{service.packages.map((pkg, pkgIndex) => (
								<ServiceCard
									key={pkgIndex}
									pkg={pkg}
									isBrandingMarketing={service.type === 'branding'}
								/>
							))}
						</div>
					</div>
				</section>
			))}

			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Free Domain, SSL, and Hosting
					</h2>
					<p className='text-xl text-muted-foreground mb-8'>
						Get a free domain, SSL certificate, and hosting with our Logo +
						Landing Page + Email Collection package!
					</p>
					<ul className='text-left max-w-md mx-auto mb-8'>
						<li className='flex items-center gap-2 mb-2'>
							<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
							<span>Free domain: {'<BUSINESS>'}.fbien.com</span>
						</li>
						<li className='flex items-center gap-2 mb-2'>
							<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
							<span>Free SSL certificate for secure browsing</span>
						</li>
						<li className='flex items-center gap-2'>
							<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
							<span>Free hosting for your landing page</span>
						</li>
					</ul>
					<BookCalendly text='Get Started Now' />
				</div>
			</section>

			<Card className='w-full max-w-3xl mx-auto overflow-hidden my-16'>
				<CardHeader className='bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground p-6'>
					<CardTitle className='text-2xl md:text-3xl font-bold'>
						Prototype Frontend Development
					</CardTitle>
					<div className='flex items-center mt-2'>
						<span className='text-xl font-semibold mr-2'>Custom Pricing</span>
						<span className='text-sm bg-primary-foreground/20 px-2 py-1 rounded'>
							Tailored Solution
						</span>
					</div>
				</CardHeader>
				<CardContent className='p-6'>
					<div className='flex items-center text-muted-foreground mb-4'>
						<Calendar className='w-5 h-5 mr-2' />
						<span>Turnaround: Custom Timeline</span>
					</div>
					<h3 className='text-lg font-semibold mb-4'>Package Includes:</h3>
					<ul className='space-y-3'>
						{[
							{
								icon: Code,
								text: 'Complete frontend development tailored to your requirements.',
							},
							{
								icon: Layout,
								text: 'Landing page implementation to establish your online presence.',
							},
							{
								icon: CheckCircle,
								text: 'Building core functionality as per your defined specifications.',
							},
							{
								icon: Database,
								text: 'Supabase backend integration for a robust data management solution.',
							},
							{
								icon: RefreshCw,
								text: 'Regular progress updates and thorough documentation throughout the development process.',
							},
							{
								icon: FileCode,
								text: 'Full codebase handoff for your continued development and management.',
							},
						].map((item, index) => (
							<li key={index} className='flex items-start'>
								<item.icon className='w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0' />
								<span>{item.text}</span>
							</li>
						))}
					</ul>
				</CardContent>
				<CardFooter className='bg-muted p-6'>
					<div className='w-full'>
						<p className='text-sm text-muted-foreground mb-4'>
							Ready to bring your prototype to life? Let&apos;s discuss your
							project requirements and create a tailored solution for your
							business.
						</p>
						<Button className='w-full'>Schedule a Free Discovery Call</Button>
					</div>
				</CardFooter>
			</Card>

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
