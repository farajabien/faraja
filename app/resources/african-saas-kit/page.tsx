import React from 'react'
import {
	ArrowRight,
	Code,
	Zap,
	CheckCircle,
	Terminal,
	Database,
	ShieldCheck,
	Users,
	CreditCard,
	Mail,
	Boxes,
	ExternalLink,
	Github,
	MessageCircle,
	Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

const features = [
	{
		title: 'Authentication & Authorization',
		icon: ShieldCheck,
		description:
			'Complete auth system with Supabase, including social logins and team management.',
		items: [
			'Email & Social Auth',
			'Role-based Access Control',
			'Team Management',
			'Protected Routes',
		],
	},
	{
		title: 'Payment Integration',
		icon: CreditCard,
		description:
			'Seamless payment processing with Paystack and subscription management.',
		items: [
			'Paystack Integration',
			'Subscription Plans',
			'Usage-based Billing',
			'Payment History',
		],
	},
	{
		title: 'Email System',
		icon: Mail,
		description:
			'Automated email notifications and transactional emails with Resend.',
		items: [
			'Welcome Emails',
			'Payment Receipts',
			'Team Invites',
			'Custom Templates',
		],
	},
	{
		title: 'Developer Experience',
		icon: Terminal,
		description:
			'Built with the latest technologies for an optimal development experience.',
		items: [
			'TypeScript Support',
			'API Documentation',
			'Environment Setup',
			'Testing Framework',
		],
	},
]

const techStack = [
	{
		name: 'Next.js 14',
		description: 'React framework with App Router',
		icon: Code,
	},
	{
		name: 'Supabase',
		description: 'Auth & Database Management',
		icon: Database,
	},
	{
		name: 'Paystack',
		description: 'Payment Processing',
		icon: CreditCard,
	},
	{
		name: 'Resend',
		description: 'Email Service',
		icon: Mail,
	},
]

const pricing = [
	{
		title: 'Basic Template',
		price: 'FREE',
		description: 'Get started with the core features',
		features: [
			'Next.js 14 Setup',
			'Basic Authentication',
			'Database Schema',
			'Starter Components',
			'Documentation',
		],
		cta: 'Coming Soon',
		ctaLink: '#',
		popular: false,
		disabled: true, // New property to handle disabled state
	},
	{
		title: 'SaaSBuilder Kit',
		price: '$97',
		description: 'Launch your SaaS with everything included',
		features: [
			'All Basic Features',
			'Namecheap Hosting Setup',
			'Vercel Deployment',
			'Email Templates',
			'Payment Integration',
			'Premium Support',
		],
		cta: 'Coming Soon',
		ctaLink: '#',
		popular: true,
		disabled: true, // New property to handle disabled state
	},
]

export default function SaaSTemplatePage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center mb-8'>
						<Badge className='bg-primary/10 text-primary mb-4'>
							Next.js SaaS Template
						</Badge>
						<h1 className='text-4xl md:text-6xl font-bold mb-6'>
							Launch Your SaaS Fast
						</h1>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'>
							A production-ready template built with Next.js 14, Supabase, and
							Paystack. Everything you need to launch your SaaS product in days,
							not months.
						</p>
						<div className='flex flex-wrap gap-4 justify-center mb-8'>
							<Button size='lg' className='gap-2' asChild>
								<Link href='https://saas-template.fbien.com'>
									<ExternalLink className='h-5 w-5' />
									View Demo
								</Link>
							</Button>
							<Button size='lg' variant='outline' className='gap-2' asChild>
								<Link href='https://github.com/farajabien/supabase-saas-starter'>
									<Github className='h-5 w-5' />
									View on GitHub
								</Link>
							</Button>
						</div>
					</div>

					{/* Template Preview */}
					<div className='relative rounded-xl overflow-hidden shadow-2xl border border-gray-200'>
						<Image
							width={1200}
							height={600}
							src='/images/next-saas-template.png'
							alt='SaaS Template Preview'
							className='w-full h-auto'
						/>
						<div className='absolute top-4 right-4 flex gap-2'>
							<Badge className='bg-white/90 text-black'>Next.js 14</Badge>
							<Badge className='bg-white/90 text-black'>TypeScript</Badge>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold mb-4'>Everything You Need</h2>
						<p className='text-xl text-muted-foreground'>
							Built with the best practices and modern technologies
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
						{features.map((feature) => (
							<Card key={feature.title} className='relative overflow-hidden'>
								<CardHeader>
									<div className='flex items-center gap-3 mb-2'>
										<feature.icon className='h-6 w-6 text-primary' />
										<CardTitle>{feature.title}</CardTitle>
									</div>
									<CardDescription>{feature.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className='space-y-2'>
										{feature.items.map((item) => (
											<li key={item} className='flex items-center gap-2'>
												<CheckCircle className='h-4 w-4 text-primary' />
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

			{/* Tech Stack Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold mb-4'>Modern Tech Stack</h2>
						<p className='text-xl text-muted-foreground'>
							Built with the latest technologies for optimal performance
						</p>
					</div>

					<div className='grid md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
						{techStack.map((tech) => (
							<Card key={tech.name} className='text-center'>
								<CardContent className='pt-6'>
									<tech.icon className='h-12 w-12 text-primary mx-auto mb-4' />
									<h3 className='text-lg font-semibold mb-2'>{tech.name}</h3>
									<p className='text-sm text-muted-foreground'>
										{tech.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold mb-4'>Simple Pricing</h2>
						<p className='text-xl text-muted-foreground'>
							Choose the plan that works best for you
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						{pricing.map((plan) => (
							<Card
								key={plan.title}
								className={`relative overflow-hidden ${
									plan.popular ? 'border-primary shadow-lg' : ''
								}`}>
								{plan.popular && (
									<div className='absolute top-0 right-0'>
										<Badge className='rounded-none rounded-bl bg-primary text-primary-foreground'>
											Popular
										</Badge>
									</div>
								)}
								<CardHeader>
									<CardTitle className='flex items-baseline gap-2'>
										<span>{plan.title}</span>
										<Badge variant='secondary' className='text-sm font-normal'>
											{plan.price}
										</Badge>
									</CardTitle>
									<CardDescription>{plan.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className='space-y-2 mb-6'>
										{plan.features.map((feature) => (
											<li key={feature} className='flex items-center gap-2'>
												<CheckCircle className='h-4 w-4 text-primary' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<Button
										className='w-full'
										disabled={plan.disabled}
										asChild={!plan.disabled}>
										{!plan.disabled ? (
											<Link href={plan.ctaLink}>
												{plan.cta}
												<ArrowRight className='h-4 w-4 ml-2' />
											</Link>
										) : (
											<span className='flex items-center justify-center'>
												{plan.cta}
												<Clock className='h-4 w-4 ml-2' />
											</span>
										)}
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Ready to Launch Your SaaS?
					</h2>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Get started with our template today or reach out for custom
						development
					</p>
					<div className='flex flex-wrap gap-4 justify-center'>
						<Button size='lg' className='gap-2' asChild>
							<Link href='https://saas-template.fbien.com'>
								<ExternalLink className='h-5 w-5' />
								View Demo
							</Link>
						</Button>
						<Button size='lg' variant='outline' className='gap-2' asChild>
							<Link href='https://wa.me/254793643308'>
								<MessageCircle className='h-5 w-5' />
								Get Support
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
