import React from 'react'
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
	Building,
	Trophy,
	Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import Link from 'next/link'
import { allPackages } from '@/lib/utils'
import ValidationSection from '@/components/ValidateIdeaSection'
import { Badge } from '@/components/ui/badge'
import ServiceCardCompact from '@/components/ServiceCard'
import Image from 'next/image'

const achievements = [
	{
		title: 'RentFlow Success',
		stats: '95% collection rate',
		description: 'Automated property management for 20+ properties',
		icon: Building,
	},
	{
		title: 'BingBang.bet',
		stats: '1000+ daily transactions',
		description: 'Scalable gaming platform with real-time processing',
		icon: Trophy,
	},
	{
		title: 'Investment Success',
		stats: '$20K offer received',
		description: 'Selected for SeedAFounder pitch (Top 3)',
		icon: Target,
	},
]

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

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section - Sets up the story */}
			<section className='container mx-auto px-4 py-16 md:py-24'>
				<div className='max-w-4xl mx-auto text-center space-y-6'>
					<Badge className='bg-primary/10 text-primary'>
						Technical Co-Founder
					</Badge>

					<h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						From Idea to Launch in 90 Days
					</h1>

					<p className='text-lg text-primary font-medium'>
						East Africa&apos;s Startup Technical Partner
					</p>

					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Transform your startup vision into reality with proven technical
						expertise in local markets
					</p>

					{/* Profile Section */}
					<div className='flex items-center justify-center gap-6 pt-8'>
						<Image
							src='https://media.licdn.com/dms/image/v2/D4D03AQH_C3vhrK9h8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686893823252?e=1736380800&v=beta&t=1Pl3cgGnmE_30VyWJ02C879heOEa7pL2pp1OtX4Gt-E'
							alt='Bienvenu Faraja'
							width={80}
							height={80}
							className='rounded-full shadow-lg'
						/>
						<div className='flex flex-col items-start gap-2'>
							<h2 className='text-lg font-semibold'>Bienvenu Faraja</h2>
							<div className='flex gap-3'>{/* Social buttons */}</div>
						</div>
					</div>

					{/* Primary CTAs */}
					<div className='flex flex-wrap gap-4 justify-center pt-8'>
						<Button size='lg' className='flex items-center gap-2' asChild>
							<Link href='#validation-process'>
								See How It Works
								<ArrowRight className='h-4 w-4' />
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='https://wa.me/254793643308'>
								<MessageCircle className='h-5 w-5 mr-2' />
								Start Your Project
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>
						Success Stories
					</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Real results from recent projects
					</p>
					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{achievements.map((achievement) => (
							<Card
								key={achievement.title}
								className='relative overflow-hidden'>
								<CardContent className='p-6'>
									<div className='mb-4 flex items-center gap-2'>
										<achievement.icon className='h-6 w-6 text-primary' />
										<h3 className='text-lg font-semibold'>
											{achievement.title}
										</h3>
									</div>
									<p className='text-2xl font-bold text-primary mb-2'>
										{achievement.stats}
									</p>
									<p className='text-muted-foreground'>
										{achievement.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Validation Process - Now acts as a bridge */}
			<section id='validation-process' className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold mb-4'>
							A Proven Path to Success
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							I use the same systematic validation process for my services that
							I&apos;ll use for your startup
						</p>
					</div>

					<ValidationSection />
				</div>
			</section>

			{/* Service Packages - Natural next step */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>
						Ready-to-Start Packages
					</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Choose your path from validation to launch
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{allPackages.map((pkg) => (
							<ServiceCardCompact key={pkg.name} pkg={pkg} />
						))}
					</div>
				</div>
			</section>

			{/* Rest of the sections remain the same */}

			{/* Final CTA - More compelling */}
			<section className='py-16 bg-primary/5'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Ready to Start Your Journey?
					</h2>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Book a free discovery call to discuss your vision and see how we can
						bring it to life in 90 days
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<BookCalendly className='w-fit' text='Book Free Discovery Call' />
						<Button variant='outline' size='lg' asChild>
							<Link href='/services'>
								Explore Services
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
