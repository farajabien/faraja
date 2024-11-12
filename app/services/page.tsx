import React from 'react'
import {
	ArrowRight,
	Code,
	Zap,
	MessageCircle,
	CheckCircle,
	Shield,
	GitBranch,
	Mail,
	Database,
	CreditCard,
	Target,
	Rocket,
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
		title: 'Startup Validation Sprint',
		description:
			'Transform your idea into a validated market concept in 2 weeks',
		icon: Target,
		price: '45,000 KSH',
		duration: '2 Weeks',
		deliverables: [
			'Market Validation Report',
			'Tech Stack Recommendations',
			'Custom Landing Page',
			'Analytics Setup',
			'Lead Capture Setup',
			'A/B Testing Framework',
		],
		process: [
			{
				week: 'Week 1',
				activities: [
					'Market research',
					'Competitor analysis',
					'Tech stack recommendations',
					'Feature prioritization',
				],
			},
			{
				week: 'Week 2',
				activities: [
					'Landing page development',
					'Analytics integration',
					'Lead capture setup',
					'A/B testing implementation',
				],
			},
		],
		cta: 'Start Validation',
		ctaLink: '/contact',
	},
	{
		title: 'MVP Development Sprint',
		description: 'Launch your first working product in 4 weeks',
		icon: Rocket,
		options: [
			{
				name: 'Basic MVP',
				price: '250,000 KSH',
				features: [
					'Core feature development',
					'User authentication',
					'Basic admin dashboard',
					'Database setup',
					'Deployment configuration',
					'Technical documentation',
				],
			},
			{
				name: 'Standard MVP',
				price: '350,000 KSH',
				features: [
					'Everything in Basic MVP',
					'Advanced user flows',
					'Payment integration',
					'Email notifications',
					'Analytics integration',
					'Custom admin features',
				],
			},
			{
				name: 'Premium MVP',
				price: '450,000 KSH',
				features: [
					'Everything in Standard MVP',
					'Enhanced performance',
					'Advanced analytics',
					'API documentation',
					'Team training',
					'Priority support',
				],
			},
		],
		process: [
			{
				week: 'Week 1',
				activities: [
					'Technical architecture',
					'System design',
					'Database schema',
					'API planning',
				],
			},
			{
				week: 'Week 2-4',
				activities: [
					'Core development',
					'Weekly updates',
					'Testing',
					'Deployment prep',
				],
			},
		],
		cta: 'Build MVP',
		ctaLink: '/contact',
	},
	{
		title: 'SaaS Development',
		description:
			'Production-ready SaaS solutions with local payment integrations',
		icon: Code,
		options: [
			{
				name: 'Free Basic Template',
				price: 'Free',
				features: [
					'Next.js with App Router',
					'Supabase authentication & database',
					'Stripe Integration',
					'Resend email delivery',
					'Responsive Tailwind design',
					'Basic documentation',
				],
				cta: 'View Demo',
				ctaLink: 'https://saas-template.fbien.com',
			},
			{
				name: 'Enhanced Template (With Paystack)',
				price: '$100 USD',
				features: [
					'Everything in Basic Template',
					'Paystack integration',
					'Multi-currency support',
					'MPESA integration',
					'Advanced documentation',
					'Setup assistance',
				],
				cta: 'Get Enhanced Template',
				ctaLink: '/contact',
			},
			{
				name: 'Custom Implementation',
				price: '150,000 KSH',
				features: [
					'Template customization',
					'Deployment setup',
					'Custom features',
					'Team training',
					'Email configuration',
					'1 month support',
				],
				cta: 'Start Implementation',
				ctaLink: '/contact',
			},
		],
		cta: 'View Template',
		ctaLink: '/template',
	},
]

const supportPlans = [
	{
		name: 'Basic Support Plan',
		price: '25,000 KSH/month',
		features: [
			'Security updates',
			'Bug fixes',
			'Technical support',
			'Performance monitoring',
			'Monthly backups',
			'Documentation updates',
		],
	},
	{
		name: 'Priority Support Plan',
		price: '45,000 KSH/month',
		features: [
			'Everything in Basic Plan',
			'Priority response',
			'Direct developer access',
			'Monthly audits',
			'Optimization recommendations',
			'Emergency support',
		],
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-16'>
				<HeroSection />
				<ServicesSection />
				<SupportSection />
				<ProcessSection />
				<CTASection />
			</div>
		</div>
	)
}

function HeroSection() {
	return (
		<section className='text-center py-16 space-y-6'>
			<Badge className='bg-primary/10 text-primary mb-4'>
				Product Development Services
			</Badge>
			<h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
				From Idea to Launch
			</h1>
			<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
				Whether you&apos;re validating an idea, building an MVP, or launching a
				SaaS product, I provide end-to-end development services to bring your
				vision to life.
			</p>
		</section>
	)
}

function ServicesSection() {
	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold text-center mb-12'>
				Development Services
			</h2>
			<div className='grid gap-8'>
				{services.map((service) => (
					<Card key={service.title} className='flex flex-col'>
						<CardHeader>
							<div className='flex items-center gap-4'>
								<service.icon className='h-12 w-12 text-primary' />
								<div>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription>{service.description}</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className='flex-grow'>
							{service.options ? (
								<div className='grid md:grid-cols-3 gap-6'>
									{service.options.map((option) => (
										<div key={option.name} className='space-y-4'>
											<div>
												<h4 className='font-semibold'>{option.name}</h4>
												<p className='text-sm font-medium text-primary'>
													{option.price}
												</p>
											</div>
											<ul className='space-y-2'>
												{option.features.map((feature) => (
													<li
														key={feature}
														className='flex items-start gap-2 text-sm'>
														<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
														<span>{feature}</span>
													</li>
												))}
											</ul>
											{'cta' in option && (
												<Button asChild className='w-full'>
													<Link href={option.ctaLink}>
														{option.cta}
														<ArrowRight className='ml-2 h-4 w-4' />
													</Link>
												</Button>
											)}
										</div>
									))}
								</div>
							) : (
								<div className='space-y-6'>
									<div>
										<p className='text-lg font-medium text-primary mb-2'>
											{service.price}
										</p>
										<p className='text-sm text-muted-foreground'>
											Duration: {service.duration}
										</p>
									</div>
									<div className='grid md:grid-cols-2 gap-8'>
										<div>
											<h4 className='font-semibold mb-4'>Deliverables</h4>
											<ul className='space-y-2'>
												{service.deliverables.map((deliverable) => (
													<li
														key={deliverable}
														className='flex items-start gap-2 text-sm'>
														<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
														<span>{deliverable}</span>
													</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className='font-semibold mb-4'>Process</h4>
											{service.process.map((phase) => (
												<div key={phase.week} className='mb-4'>
													<h5 className='font-medium text-sm mb-2'>
														{phase.week}
													</h5>
													<ul className='space-y-2'>
														{phase.activities.map((activity) => (
															<li
																key={activity}
																className='flex items-start gap-2 text-sm'>
																<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
																<span>{activity}</span>
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</div>
								</div>
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

function SupportSection() {
	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold text-center mb-4'>Ongoing Support</h2>
			<p className='text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto'>
				Keep your platform secure, updated, and evolving with our flexible
				support packages
			</p>
			<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
				{supportPlans.map((plan) => (
					<Card key={plan.name}>
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<CardDescription>
								<span className='text-lg font-medium text-primary'>
									{plan.price}
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className='space-y-2'>
								{plan.features.map((feature) => (
									<li key={feature} className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button asChild className='w-full'>
								<Link href='/contact'>
									Choose Plan
									<ArrowRight className='ml-2 h-4 w-4' />
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	)
}

function ProcessSection() {
	const process = [
		{
			title: 'Discovery',
			description: 'Understanding your needs, goals, and target market',
		},
		{
			title: 'Planning',
			description:
				'Technical architecture, feature prioritization, and timeline',
		},
		{
			title: 'Development',
			description: 'Agile development with weekly updates and demonstrations',
		},
		{
			title: 'Launch',
			description: 'Deployment, testing, and post-launch support',
		},
	]

	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold text-center mb-4'>
				Development Process
			</h2>
			<p className='text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto'>
				A structured approach to bring your product to market
			</p>
			<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
				{process.map((step, index) => (
					<div key={step.title} className='text-center'>
						<div className='w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-lg font-bold'>
							{index + 1}
						</div>
						<h3 className='font-semibold mb-2'>{step.title}</h3>
						<p className='text-sm text-muted-foreground'>{step.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

function CTASection() {
	return (
		<section className='py-16 bg-primary/5 rounded-lg mt-16'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className='text-3xl font-bold mb-4'>Ready to Start Building?</h2>
				<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
					Let&apos;s discuss your project and find the best way to bring it to
					life
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button size='lg' asChild>
						<Link href='/contact' className='flex items-center gap-2'>
							<MessageCircle className='h-5 w-5' />
							Schedule a Call
						</Link>
					</Button>
					<Button variant='outline' size='lg' asChild>
						<Link
							href='https://wa.me/254793643308'
							className='flex items-center gap-2'>
							<Mail className='h-5 w-5' />
							Chat on WhatsApp
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
