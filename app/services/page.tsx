import React from 'react'
import {
	ArrowRight,
	Code,
	Zap,
	Wallet,
	Globe,
	MessageCircle,
	CheckCircle,
	Shield,
	GitBranch,
	Mail,
	Database,
	CreditCard,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const services = [
	{
		title: 'SaaS Starter Template',
		description:
			'Launch your SaaS product quickly with a free or enhanced template tailored for subscription-based businesses.',
		icon: GitBranch,
		options: [
			{
				name: 'Free Basic Template',
				price: 'Free',
				features: [
					'Next.js (latest) with App Router',
					'Supabase for authentication & database',
					'Stripe Integration for subscriptions',
					'Resend for email delivery',
					'Responsive Design with Tailwind CSS',
					'Documentation & Setup Guide',
				],
				cta: 'Clone Repository',
				ctaLink: 'https://github.com/farajabien/next-saas-starter',
			},
			{
				name: 'Enhanced Template (With Paystack)',
				price: 'Starting at $100 USD',
				features: [
					'Paystack integration for local and international payments',
					'Multi-currency and mobile payment options',
					'All features of the Basic Template',
					'Full source code',
					'Documentation',
					'Setup walkthrough and customization guide',
				],
				cta: 'Get Enhanced Template',
				ctaLink: '/contact',
			},
		],
	},
	{
		title: 'Custom SaaS Development',
		description:
			'Tailored solutions for your unique SaaS idea, from subscription management to complex integrations.',
		icon: Code,
		features: [
			'Custom Payment Solutions',
			'Feature Development',
			'Third-Party Integrations',
			'Transactional Emails and Notifications',
			'Optimization & Scalability',
		],
		price: 'Starting at 150,000 KSH',
		cta: 'Start Your Project',
		ctaLink: '/contact',
	},
	{
		title: 'Ongoing Support & Maintenance',
		description:
			'Keep your SaaS platform secure, updated, and evolving with our support packages.',
		icon: Shield,
		options: [
			{
				name: 'Basic Support Plan',
				price: 'Starting at 25,000 KSH/month',
				features: ['Security updates', 'Bug fixes', 'General support'],
			},
			{
				name: 'Priority Support Plan',
				price: 'Starting at 45,000 KSH/month',
				features: [
					'Direct access to developer support',
					'Priority issue resolution',
					'Monthly audits',
				],
			},
		],
		cta: 'Choose Support Plan',
		ctaLink: '/contact',
	},
]

const technologies = [
	{
		name: 'Next.js',
		description: 'React Framework for fast, scalable apps',
		icon: Zap,
	},
	{
		name: 'Supabase',
		description: 'Database, authentication, and storage',
		icon: Database,
	},
	{
		name: 'Paystack',
		description: 'For local currency and mobile payments',
		icon: CreditCard,
	},
	{
		name: 'Resend',
		description: 'Reliable email delivery service',
		icon: Mail,
	},
	{
		name: 'Tailwind CSS',
		description: 'Responsive design with utility-first CSS',
		icon: Globe,
	},
	{
		name: 'Prisma ORM',
		description: 'For efficient database management',
		icon: Wallet,
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-16'>
				<HeroSection />
				<ServicesSection />
				<WhyChooseSection />
				<TechnologiesSection />
				<CTASection />
			</div>
		</div>
	)
}

function HeroSection() {
	return (
		<section className='text-center py-16 space-y-6'>
			<Badge className='bg-primary/10 text-primary mb-4'>
				SaaS Development Services
			</Badge>
			<h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
				Bringing Your SaaS Vision to Life
			</h1>
			<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
				As a SaaS developer specializing in Next.js, Supabase, Paystack, and
				Resend, I deliver fast, scalable, and secure solutions to help you bring
				your SaaS product to market swiftly.
			</p>
		</section>
	)
}

function ServicesSection() {
	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold text-center mb-12'>Our Services</h2>
			<div className='grid md:grid-cols-3 gap-8'>
				{services.map((service) => (
					<Card key={service.title} className='flex flex-col'>
						<CardHeader>
							<service.icon className='h-12 w-12 text-primary mb-4' />
							<CardTitle>{service.title}</CardTitle>
							<CardDescription>{service.description}</CardDescription>
						</CardHeader>
						<CardContent className='flex-grow'>
							{service.options ? (
								service.options.map((option) => (
									<div key={option.name} className='mb-4'>
										<h4 className='font-semibold mb-2'>{option.name}</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											{option.price}
										</p>
										<ul className='space-y-1'>
											{option.features.map((feature) => (
												<li
													key={feature}
													className='flex items-start gap-2 text-sm'>
													<CheckCircle className='h-4 w-4 text-primary mt-1' />
													<span>{feature}</span>
												</li>
											))}
										</ul>
										{'cta' in option && (
											<Button asChild className='mt-4'>
												<Link href={option.ctaLink}>
													{option.cta}
													<ArrowRight className='ml-2 h-4 w-4' />
												</Link>
											</Button>
										)}
									</div>
								))
							) : (
								<>
									<ul className='space-y-1 mb-4'>
										{service.features.map((feature) => (
											<li
												key={feature}
												className='flex items-start gap-2 text-sm'>
												<CheckCircle className='h-4 w-4 text-primary mt-1' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<p className='text-sm text-muted-foreground'>
										{service.price}
									</p>
								</>
							)}
						</CardContent>
						<CardFooter>
							{service.cta && (
								<Button asChild className='w-full'>
									<Link href={service.ctaLink}>
										{service.cta}
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	)
}

function WhyChooseSection() {
	const reasons = [
		{
			title: 'Fast Deployment',
			description:
				'Get your SaaS product to market quickly with the free Next.js and Supabase template.',
		},
		{
			title: 'Tailored Solutions',
			description:
				'Advanced feature integration, custom billing logic, and enhanced scalability options.',
		},
		{
			title: 'Built for Growth',
			description:
				'Using Supabase for secure database management and Next.js for top performance.',
		},
		{
			title: 'African Market Expertise',
			description:
				'Specialized in Paystack and MPESA integrations to meet the needs of businesses targeting the African market.',
		},
	]

	return (
		<section className='py-16 bg-secondary/5'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Why Choose Me as Your SaaS Developer?
				</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					{reasons.map((reason) => (
						<Card key={reason.title}>
							<CardHeader>
								<CardTitle>{reason.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{reason.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

function TechnologiesSection() {
	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold text-center mb-12'>
				Technologies I Use
			</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
				{technologies.map((tech) => (
					<div key={tech.name} className='flex items-center gap-4'>
						<tech.icon className='h-8 w-8 text-primary' />
						<div>
							<h3 className='font-semibold'>{tech.name}</h3>
							<p className='text-sm text-muted-foreground'>
								{tech.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

function CTASection() {
	return (
		<section className='py-16 bg-primary/5 rounded-lg'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-4'>
					Ready to bring your SaaS product to life?
				</h2>
				<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
					Let&apos;s work together to turn your ideas into a production-ready
					platform.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button size='lg' asChild>
						<Link href='/contact' className='flex items-center gap-2'>
							<MessageCircle className='h-5 w-5' />
							Contact Me Today
						</Link>
					</Button>
					<Button variant='outline' size='lg' asChild>
						<Link
							href='https://github.com/farajabien/next-saas-starter'
							className='flex items-center gap-2'>
							<GitBranch className='h-5 w-5' />
							Clone Free Template
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
