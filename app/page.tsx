import React from 'react'
import {
	ArrowRight,
	Code,
	Zap,
	Wallet,
	Globe,
	MessageCircle,
	CheckCircle,
	Building,
	Trophy,
	Target,
	Terminal,
	Boxes,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const achievements = [
	{
		title: 'RentFlow Development',
		stats: '95% Collection Rate',
		description:
			'Efficient property management SaaS with automation across 20+ properties',
		icon: Building,
	},
]

const services = [
	{
		title: 'SaaS Development',
		description:
			'End-to-end development of subscription-based platforms with Paystack integration.',
		features: [
			'Custom subscription models',
			'User & team management',
			'Payment integrations',
			'API development',
		],
		icon: Code,
	},
	{
		title: 'Startup Technical Partner',
		description:
			'Technical expertise and development support for your startup journey.',
		features: [
			'Technical architecture',
			'MVP development',
			'Feature implementation',
			'Scalability planning',
		],
		icon: Boxes,
	},
	{
		title: 'SaaS Template',
		description: 'Quick-start your project with my production-ready template.',
		features: [
			'Paystack Integration',
			'Multi-currency support',
			'Team management',
			'Usage-based billing',
		],
		icon: Zap,
	},
]

const techStack = [
	{
		category: 'Frontend & Backend',
		items: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL'],
	},
	{
		category: 'Integration & Tools',
		items: ['Paystack', 'Resend', 'Vercel', 'shadcn/ui'],
	},
]

export default function Component() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24'>
				<div className='max-w-4xl mx-auto text-center space-y-6'>
					<Badge className='bg-primary/10 text-primary'>SaaS Developer</Badge>

					<h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						Building SaaS Solutions for African Markets
					</h1>

					<p className='text-lg text-primary font-medium'>
						Expert in Next.js, Supabase, and Paystack Integration
					</p>

					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						I help startups and businesses build scalable SaaS platforms with
						seamless payment integrations and modern tech stack
					</p>

					{/* Profile Section */}
					<div className='flex items-center justify-center gap-6 pt-8'>
						<Image
							src='https://media.licdn.com/dms/image/v2/D4D03AQH5CrhmVs4yug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731142252113?e=1736985600&v=beta&t=wFdHIVa5FgUl_n7hxP2iDZ7gAzpglF3AY7yYXkaY22g'
							alt='Bienvenu Faraja'
							width={80}
							height={80}
							className='rounded-full shadow-lg'
						/>
						<div className='flex flex-col items-start gap-2'>
							<h2 className='text-lg font-semibold'>Bienvenu Faraja</h2>
							<p className='text-sm text-muted-foreground'>
								Full-Stack Developer specializing in SaaS
							</p>
						</div>
					</div>

					{/* Primary CTAs */}
					<div className='flex flex-wrap gap-4 justify-center pt-8'>
						<Button size='lg' className='flex items-center gap-2' asChild>
							<Link href='#services'>
								View Services
								<ArrowRight className='h-4 w-4' />
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='https://wa.me/254793643308'>
								<MessageCircle className='h-5 w-5 mr-2' />
								Let&apos;s Talk
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Success Stories */}
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

			{/* Services */}
			<section id='services' className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>Services</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						From custom development to ready-to-use templates
					</p>

					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{services.map((service) => (
							<Card key={service.title}>
								<CardContent className='p-6'>
									<service.icon className='h-12 w-12 text-primary mb-4' />
									<h3 className='text-xl font-semibold mb-2'>
										{service.title}
									</h3>
									<p className='text-muted-foreground mb-4'>
										{service.description}
									</p>
									<ul className='space-y-2'>
										{service.features.map((feature) => (
											<li key={feature} className='flex items-start gap-2'>
												<CheckCircle className='h-4 w-4 text-primary mt-1' />
												<span className='text-sm'>{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>Tech Stack</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Modern technologies for scalable solutions
					</p>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						{techStack.map((stack) => (
							<Card key={stack.category}>
								<CardContent className='p-6'>
									<h3 className='text-xl font-semibold mb-4'>
										{stack.category}
									</h3>
									<ul className='space-y-2'>
										{stack.items.map((item) => (
											<li key={item} className='flex items-center gap-2'>
												<CheckCircle className='h-5 w-5 text-primary' />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>Need a SaaS Developer?</h2>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Let&apos;s discuss your project and find the best approach for your
						needs
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button size='lg' asChild>
							<Link
								href='/resources/saas-template'
								className='flex items-center gap-2'>
								<Code className='h-5 w-5' />
								View Services
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link
								href='https://wa.me/254793643308'
								className='flex items-center gap-2'>
								<MessageCircle className='h-5 w-5' />
								Start a Conversation
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
