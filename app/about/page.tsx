import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Github,
	Twitter,
	LinkedinIcon,
	Target,
	Rocket,
	Code,
	CheckCircle2,
	ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TikTokEmbed from '@/components/TikTokEmbed'
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About Bienvenu Faraja - Product Development Expert',
	description:
		'Helping founders validate ideas, build MVPs, and launch SaaS products for African markets. Expertise in Next.js, Supabase, and local payment integrations.',
	openGraph: {
		title: 'Bienvenu Faraja - Product Development Expert',
		description:
			'From validation to launch: Building successful products for African markets',
		images: ['/images/og-about.png'],
	},
}

const AboutPage = () => {
	const services = [
		{
			icon: Target,
			title: 'Startup Validation',
			description:
				'Transform your idea into a validated market concept in 2 weeks',
			price: '45,000 KSH',
			link: '/services/startup-validation',
		},
		{
			icon: Rocket,
			title: 'MVP Development',
			description: 'Launch your first working product in 4 weeks or less',
			price: '250,000 KSH',
			link: '/services/mvp-development',
		},
		{
			icon: Code,
			title: 'SaaS Template',
			description:
				'Production-ready foundation with local payment integrations',
			price: '150,000 KSH',
			link: '/services/saas-template',
		},
	]

	const achievements = [
		{
			stat: '95%',
			label: 'Collection Rate',
			context: 'Achieved for RentFlow platform',
		},
		{
			stat: '4',
			label: 'Weeks',
			context: 'Average MVP development time',
		},
		{
			stat: '5+',
			label: 'Years',
			context: 'Building products for African markets',
		},
	]

	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<div className='flex flex-col md:flex-row gap-8 items-center'>
						<div className='md:w-1/3'>
							<Image
								src='https://media.licdn.com/dms/image/v2/D4D03AQH_C3vhrK9h8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686893823252?e=1735776000&v=beta&t=CPpu-ZmTasT7RlY_746RIcw-HGwh3f3tkgjOxzyTPxU'
								alt='Profile picture'
								width={300}
								height={300}
								className='rounded-full shadow-lg'
							/>
						</div>
						<div className='md:w-2/3 text-center md:text-left'>
							<h1 className='text-4xl font-bold mb-4'>
								From Idea to Launch: Building Products for African Markets
							</h1>
							<p className='text-xl text-muted-foreground mb-6'>
								I help founders validate ideas, build MVPs, and launch
								successful products with modern tech stack and local payment
								integrations
							</p>
							<div className='flex gap-4 justify-center md:justify-start'>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://github.com/farajabien'>
										<Github className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://twitter.com/farajabien'>
										<Twitter className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://linkedin.com/in/farajabien'>
										<LinkedinIcon className='h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Services Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						How I Can Help
					</h2>
					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{services.map((service) => (
							<Card
								key={service.title}
								className='relative group hover:shadow-lg transition-shadow'>
								<CardContent className='pt-6'>
									<service.icon className='h-12 w-12 text-primary mb-4' />
									<h3 className='text-xl font-semibold mb-2'>
										{service.title}
									</h3>
									<p className='text-muted-foreground mb-4'>
										{service.description}
									</p>
									<p className='font-medium text-primary mb-4'>
										{service.price}
									</p>
									<Button className='w-full group' asChild>
										<Link
											href={service.link}
											className='flex items-center justify-center gap-2'>
											Learn More
											<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			{/* Achievements Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<div className='grid md:grid-cols-3 gap-8'>
							{achievements.map((achievement) => (
								<Card key={achievement.stat}>
									<CardContent className='text-center p-6'>
										<div className='text-4xl font-bold text-primary mb-2'>
											{achievement.stat}
										</div>
										<div className='font-medium mb-1'>{achievement.label}</div>
										<div className='text-sm text-muted-foreground'>
											{achievement.context}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Featured Project Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>
						Featured Case Study: RentFlow
					</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						How we built and launched a property management platform that
						achieved 95% collection rates
					</p>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						<Card className='h-full'>
							<CardHeader>
								<CardTitle>The Challenge</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4'>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
										<span>
											Property managers struggling with 70% collection rates
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
										<span>
											20+ hours spent monthly on manual payment follow-ups
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
										<span>No real-time visibility into payment status</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className='h-full'>
							<CardHeader>
								<CardTitle>The Solution</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-4'>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-green-500 mt-0.5' />
										<span>
											Automated platform achieving 95% collection rates
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-green-500 mt-0.5' />
										<span>Automated reminders saving 20+ hours monthly</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle2 className='h-5 w-5 text-green-500 mt-0.5' />
										<span>Real-time payment tracking and reconciliation</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			{/* Tech Stack Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-12'>Tech Stack</h2>
						<div className='flex flex-wrap justify-center gap-4'>
							{[
								'Next.js',
								'Supabase',
								'Paystack',
								'Resend',
								'Tailwind CSS',
								'Prisma ORM',
							].map((tech) => (
								<div
									key={tech}
									className='bg-secondary/10 px-4 py-2 rounded-full'>
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* TikTok Content Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						Follow My Journey
					</h2>
					<div className='max-w-2xl mx-auto'>
						<TikTokEmbed username='saasbuilder' videoId='7435981420960435511' />
					</div>
				</div>
			</section>

			<FeaturedBlogPosts />
		</div>
	)
}

export default AboutPage
