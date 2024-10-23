import {
	ArrowRight,
	CheckCircle,
	Code,
	Briefcase,
	Terminal,
	Database,
	Cloud,
	Award,
	Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import Link from 'next/link'

const specializations = [
	{ name: 'Marketplace Platforms', icon: Briefcase },
	{ name: 'Property Management', icon: Database },
	{ name: 'E-commerce Solutions', icon: Cloud },
	{ name: 'Service Booking Systems', icon: Terminal },
	{ name: 'SaaS Applications', icon: Code },
	{ name: 'Business Process Automation', icon: Terminal },
	{ name: 'Data Analytics Platforms', icon: Database },
	{ name: 'Consumer Applications', icon: Sparkles },
	{ name: 'Social Platforms', icon: Cloud },
	{ name: 'Gaming Applications', icon: Terminal },
	{ name: 'Educational Technology', icon: Award },
]

const techStack = {
	Frontend: ['Next.js', 'React', 'TypeScript'],
	Backend: ['Node.js', 'Prisma'],
	Database: ['PostgreSQL', 'MongoDB'],
	Cloud: ['AWS', 'Vercel'],
	Additional: ['Supabase', 'Firebase'],
}

const packages = [
	{
		name: 'Rapid Validation Package',
		price: '15,000 KSH ($150)',
		timeline: '24-48 hours',
		deliverables: [
			'Technical feasibility assessment',
			'Custom architecture plan',
			'Tech stack recommendations',
			'MVP feature definition',
			'Timeline and budget estimation',
		],
	},
	{
		name: 'Landing Page + Prototype Strategy',
		price: '30,000 KSH ($300)',
		timeline: '3-5 business days',
		isPopular: true,
		deliverables: [
			'Full Rapid Validation Package',
			'Functional landing page',
			'Product/service overview section',
			'Key features showcase',
			'Call-to-action with signup form',
			'Mobile-friendly design',
			'Prototype development strategy',
		],
	},
	{
		name: 'Prototype Frontend Development',
		price: 'Custom Pricing',
		timeline: 'Custom Timeline',
		deliverables: [
			'Complete frontend development',
			'Landing page implementation',
			'Core functionality building',
			'Supabase backend integration',
			'Progress updates and documentation',
			'Full codebase handoff',
		],
	},
]

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						Turn Your Startup Vision into Reality
					</h1>
					<p className='text-xl md:text-2xl text-muted-foreground mb-8'>
						Technical Co-Founder Experience for Non-Technical Founders
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<BookCalendly text='Book Free Discovery Call' />
						<Link href='/projects'>
							<Button variant='outline' size='lg'>
								View Portfolio
								<ArrowRight className='ml-2 h-4 w-4' />
							</Button>
						</Link>
						<Link href='/services'>
							<Button variant='outline' size='lg'>
								View Packages
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Why Work With Me Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Why Work With Me
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						<Card className='p-6'>
							<Award className='h-8 w-8 text-primary mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								Proven Track Record
							</h3>
							<p className='text-muted-foreground'>
								Successfully launched projects across PropTech, Gaming, and
								E-commerce
							</p>
						</Card>
						<Card className='p-6'>
							<Code className='h-8 w-8 text-primary mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								Full-Stack Expertise
							</h3>
							<p className='text-muted-foreground'>
								Specialized in Next.js, React, and modern cloud architecture
							</p>
						</Card>
						<Card className='p-6'>
							<Sparkles className='h-8 w-8 text-primary mb-4' />
							<h3 className='text-xl font-semibold mb-2'>Startup-Focused</h3>
							<p className='text-muted-foreground'>
								Deep understanding of MVP development and scaling challenges
							</p>
						</Card>
						<Card className='p-6'>
							<Briefcase className='h-8 w-8 text-primary mb-4' />
							<h3 className='text-xl font-semibold mb-2'>Business-Aligned</h3>
							<p className='text-muted-foreground'>
								Technical decisions driven by business goals and market needs
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Packages Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Service Packages
					</h2>
					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{packages.map((pkg) => (
							<Card
								key={pkg.name}
								className={`p-6 relative ${
									pkg.isPopular ? 'border-primary' : ''
								}`}>
								{pkg.isPopular && (
									<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
										Most Popular
									</div>
								)}
								<h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
								<p className='text-xl font-semibold text-primary mb-2'>
									{pkg.price}
								</p>
								<p className='text-sm text-muted-foreground mb-6'>
									Timeline: {pkg.timeline}
								</p>
								<div className='space-y-4'>
									<h4 className='font-semibold'>Deliverables:</h4>
									<ul className='space-y-2'>
										{pkg.deliverables.map((item, idx) => (
											<li key={idx} className='flex items-start gap-2'>
												<CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
								<Button className='w-full mt-6'>Get Started</Button>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Specializations Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Project Types I Specialize In
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
						{specializations.map((spec) => (
							<div key={spec.name} className='flex items-center gap-3'>
								<spec.icon className='h-5 w-5 text-primary flex-shrink-0' />
								<span>{spec.name}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Technology Stack
					</h2>
					<div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto'>
						{Object.entries(techStack).map(([category, technologies]) => (
							<Card key={category} className='p-6'>
								<h3 className='font-semibold mb-4'>{category}</h3>
								<ul className='space-y-2'>
									{technologies.map((tech) => (
										<li key={tech} className='flex items-center gap-2'>
											<CheckCircle className='h-4 w-4 text-primary' />
											<span>{tech}</span>
										</li>
									))}
								</ul>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Ready to Build Something Great?
					</h2>
					<p className='text-xl text-muted-foreground mb-8'>
						Schedule a free discovery call to discuss your startup vision and
						technical needs
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<BookCalendly text='Schedule Discovery Call' />
						<Button variant='outline' size='lg'>
							View Services
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
