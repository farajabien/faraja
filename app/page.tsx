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
	MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import Link from 'next/link'
import { allPackages } from '@/lib/utils'
import ValidationSection from '@/components/ValidateIdeaSection'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import ServiceCardCompact from '@/components/ServiceCard'
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts'
import { Metadata } from 'next'

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

// app/page.tsx - Homepage metadata
export const metadata: Metadata = {
	title: 'Technical Co-Founder Services for Non-Technical Founders',
	description:
		'Get your MVP built in 4 weeks or less. Expert technical co-founder services for East African startups, specializing in validated product development and local payment integrations.',
	openGraph: {
		title: 'Technical Co-Founder Services for Non-Technical Founders',
		description:
			'Launch your startup with expert technical guidance. From idea validation to MVP in 4 weeks.',
		images: ['/images/og-home.png'],
	},
}

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24'>
				<div className='max-w-4xl mx-auto text-center space-y-8'>
					<Badge className='mb-4'>Technical Co-Founder Service</Badge>
					<h1 className='text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						From Idea to Launch in 90 Days
					</h1>
					<p className='text-xl md:text-2xl text-muted-foreground'>
						Transform your startup vision into reality with proven technical
						expertise
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
						<Button size='lg' className='w-full sm:w-auto' asChild>
							<Link
								href='https://wa.me/254793643308'
								className='flex items-center gap-2'>
								<MessageCircle className='h-5 w-5' aria-hidden='true' />
								<span>Contact Me on WhatsApp</span>
							</Link>
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto'
							asChild>
							<Link href='/projects' className='flex items-center gap-2'>
								<span>View My Work</span>
								<ArrowRight className='h-4 w-4' aria-hidden='true' />
							</Link>
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto'
							asChild>
							<Link href='/about'>
								<span>About Me</span>
							</Link>
						</Button>
						<Button
							variant='outline'
							size='lg'
							className='w-full sm:w-auto'
							asChild>
							<Link href='/services'>
								<span>View My Services</span>
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<Image
				src='/images/my_0_dollar_tech_stack.png'
				alt='Visual representation of a zero-dollar tech stack'
				className='mx-auto mt-8 max-w-full h-auto w-full'
				width={1000}
				height={0}
			/>

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

			<ValidationSection />

			{/* Packages Section */}
			<section className='py-8 md:py-16'>
				<div className='md:container mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-8 md:mb-12'>
						Service Packages ({allPackages.length})
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-full mx-auto'>
						{allPackages.map((pkg) => (
							<ServiceCardCompact key={pkg.name} pkg={pkg} />
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
						<Button variant='outline' size='lg' asChild className='w-full'>
							<Link href='/services'>
								View Services
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<FeaturedBlogPosts />
		</div>
	)
}
