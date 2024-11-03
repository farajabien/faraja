import React, { JSX } from 'react'
import {
	Calendar,
	CheckCircle,
	Palette,
	Code,
	Package,
	BadgeDollarSign,
	Clock,
	Star,
	Zap,
	Shield,
	TrendingUp,
	Users,
} from 'lucide-react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { PackageType, services } from '@/lib/utils'
import BookCalendly from '@/components/BookCalendly'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Startup Development Services & Packages',
	description:
		'Structured service packages for startup development. From 25K KSH idea validation sprints to full MVP development. Clear deliverables and proven process.',
	openGraph: {
		title: 'Technical Services for Startups | Idea to MVP',
		description:
			'Transform your startup idea into reality with our structured development packages.',
		images: ['/images/og-services.png'],
	},
}

const ServicesPage = () => {
	return (
		<div className='bg-background min-h-screen'>
			<div className='container mx-auto px-4 py-8'>
				<HeroSection />
				<ServicesTabs />
				<SuccessMetrics />
				<ProcessTimeline />
				<CallToActionSection />
			</div>
		</div>
	)
}

const HeroSection = () => {
	return (
		<div className='text-center py-12 space-y-4'>
			<h1 className='text-4xl font-bold text-primary'>
				Technical Co-Founder Services
			</h1>
			<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
				From idea validation to market-ready products, we help non-technical
				founders build successful startups
			</p>
			<div className='flex justify-center gap-4 pt-4'>
				<ServiceMetric
					icon={<Zap />}
					value='4 Weeks'
					label='Average MVP Launch'
				/>
				<ServiceMetric icon={<Star />} value='5+' label='Successful Launches' />
				<ServiceMetric icon={<Shield />} value='100%' label='Completion Rate' />
			</div>
		</div>
	)
}

const ServiceMetric = ({
	icon,
	value,
	label,
}: {
	icon: JSX.Element
	value: string
	label: string
}) => {
	return (
		<div className='flex flex-col items-center p-4 bg-secondary/10 rounded-lg'>
			<div className='text-primary mb-2'>{icon}</div>
			<div className='text-2xl font-bold'>{value}</div>
			<div className='text-sm text-muted-foreground'>{label}</div>
		</div>
	)
}

const ServiceCard = ({ service }: { service: PackageType }) => {
	return (
		<Card className='flex flex-col hover:shadow-lg transition-shadow relative overflow-hidden'>
			{service.isPopular && (
				<div className='absolute top-4 right-4'>
					<Badge
						variant='default'
						className='bg-primary text-primary-foreground'>
						Most Popular
					</Badge>
				</div>
			)}

			<Link href={`/services/${service.slug}`} className='flex-grow'>
				<CardHeader>
					<CardTitle className='text-xl font-semibold flex items-center gap-2'>
						{service.name}
						{service.savings && (
							<Badge variant='secondary' className='ml-2'>
								Save {service.savings}
							</Badge>
						)}
					</CardTitle>
					<CardDescription>{service.description}</CardDescription>
				</CardHeader>

				<CardContent className='flex-grow space-y-6'>
					<div className='flex justify-between items-center'>
						<div className='text-2xl font-bold text-primary'>
							{service.price}
						</div>
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<Clock className='w-4 h-4' />
							{service.deliveryTime}
						</div>
					</div>

					<div className='space-y-4'>
						{service.deliverables && (
							<div className='space-y-2'>
								<h4 className='font-medium'>What&apos;s Included:</h4>
								<ul className='space-y-2'>
									{service.deliverables.map((item) => (
										<li key={item.name} className='flex items-start gap-2'>
											<CheckCircle className='w-4 h-4 text-primary mt-1' />
											<span className='text-sm'>{item.name}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{service.details && (
							<div className='space-y-2'>
								<h4 className='font-medium'>Process:</h4>
								{service.details.map((detail, index) => (
									<div key={index} className='bg-secondary/10 p-3 rounded-lg'>
										<h5 className='font-medium text-sm'>{detail.subtitle}</h5>
										<p className='text-sm text-muted-foreground whitespace-pre-line'>
											{detail.content}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				</CardContent>
			</Link>

			<CardFooter className='border-t pt-4'>
				<div className='w-full space-y-3'>
					<Button asChild className='w-full'>
						<Link href={`/services/${service.slug}`}>View Details</Link>
					</Button>
					<BookCalendly className='w-full' text='Schedule Discovery Call' />
				</div>
			</CardFooter>
		</Card>
	)
}

const ProcessTimeline = () => {
	return (
		<div className='py-12'>
			<h2 className='text-2xl font-bold text-center mb-8'>
				Our Development Process
			</h2>
			<div className='max-w-3xl mx-auto space-y-4'>
				<TimelineStep
					number={1}
					title='Discovery & Planning'
					description='We analyze your idea and create a detailed development roadmap'
					progress={100}
				/>
				<TimelineStep
					number={2}
					title='Design & Prototyping'
					description='Create interactive prototypes to validate core features'
					progress={100}
				/>
				<TimelineStep
					number={3}
					title='Development & Testing'
					description='Build your product with regular testing and feedback cycles'
					progress={100}
				/>
				<TimelineStep
					number={4}
					title='Launch & Growth'
					description='Deploy your product and implement growth strategies'
					progress={100}
				/>
			</div>
		</div>
	)
}

const TimelineStep = ({
	number,
	title,
	description,
	progress,
}: {
	number: number
	title: string
	description: string
	progress: number
}) => {
	return (
		<div className='relative'>
			<div className='flex items-start gap-4'>
				<div className='w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0'>
					{number}
				</div>
				<div className='flex-grow'>
					<h3 className='font-medium'>{title}</h3>
					<p className='text-sm text-muted-foreground'>{description}</p>
					<Progress value={progress} className='mt-2' />
				</div>
			</div>
		</div>
	)
}
const ServicesTabs = () => {
	return (
		<section className='py-8 md:py-12 bg-secondary/10'>
			<div className='container mx-auto px-4'>
				<SectionHeader
					title='Our Services'
					subtitle="Comprehensive solutions for your startup's technical and design needs"
				/>

				<Tabs defaultValue='technical' className='space-y-8'>
					<TabsList className='grid w-full grid-cols-2 max-w-2xl mx-auto'>
						<TabsTrigger value='technical' className='space-x-2'>
							<Code className='w-4 h-4' />
							<span>Technical</span>
						</TabsTrigger>
						<TabsTrigger value='growth' className='space-x-2'>
							<TrendingUp className='w-4 h-4' />
							<span>Growth</span>
						</TabsTrigger>
					</TabsList>

					{services.map((category) => (
						<TabsContent
							key={category.type}
							value={category.type || 'technical'}>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								{category.packages.map((service, index) => (
									<ServiceCard key={index} service={service} />
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}

const CallToActionSection = () => {
	return (
		<section className='py-8 md:py-12 bg-secondary/30'>
			<div className='container mx-auto px-4 text-center'>
				<SectionHeader
					title='Ready to Transform Your Startup?'
					subtitle='Schedule a free discovery call to discuss your technical and design needs.'
				/>
				<BookCalendly text='Schedule Discovery Call' />
			</div>
		</section>
	)
}

const SectionHeader = ({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) => {
	return (
		<>
			<h2 className='text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4 text-primary'>
				{title}
			</h2>
			<p className='text-base md:text-lg text-muted-foreground text-center mb-6 md:mb-8 max-w-2xl mx-auto'>
				{subtitle}
			</p>
		</>
	)
}

const SuccessMetrics = () => {
	return (
		<section className='py-8 md:py-12 bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<SectionHeader
					title='Success Metrics'
					subtitle="Key performance indicators to measure your startup's growth and success."
				/>
				<div
					className='grid grid-cols-1 md:grid-cols-2 gap-4 md
				:gap-8'></div>
			</div>
		</section>
	)
}

export default ServicesPage
