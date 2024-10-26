import {
	Calendar,
	CheckCircle,
	Code,
	Database,
	FileCode,
	Info,
	Layout,
	RefreshCw,
} from 'lucide-react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Package, services, ServiceType } from '@/lib/utils'
import AddOnsSection from '@/components/AddOnSection'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import FreeServicesSection from '@/components/FreeServiceSection'

export const metadata: Metadata = {
	title: 'Farajabien - Technical Strategy & Development Services',
	description:
		'Validate and launch your startup idea with expert technical guidance. From rapid validation to MVP development, get the expertise you need to succeed.',
}

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
				<ServiceSection key={index} service={service} />
			))}

			<AddOnsSection />
			<MauticInfoSection />

			<FreeServicesSection />
			<PrototypeFrontendDevelopment />

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

function ServiceSection({ service }: { service: ServiceType }) {
	return (
		<section className='py-16 bg-secondary/10'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>{service.title}</h2>
				<p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
					{service.description}
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{service.packages.map((pkg, pkgIndex) => (
						<ServiceCard key={pkgIndex} pkg={pkg} />
					))}
				</div>
			</div>
		</section>
	)
}
//ServiceCardProps
type ServiceCardProps = {
	pkg: Package
	variant?: string
}

const ServiceCard = ({ pkg, variant = 'default' }: ServiceCardProps) => {
	const isFeatured = variant === 'featured' || pkg.isPopular

	return (
		<Card
			className={`
		flex flex-col transform transition-all duration-300 hover:scale-[1.02]
		${isFeatured ? 'border-primary shadow-lg relative' : 'hover:shadow-md'}
	  `}>
			{isFeatured && (
				<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
					<Badge className='bg-primary text-primary-foreground px-4 py-1 text-sm'>
						Most Popular
					</Badge>
				</div>
			)}

			<CardHeader
				className={`
		  ${isFeatured ? 'bg-primary/5 border-b border-primary/20' : ''}
		  pb-6
		`}>
			<CardDescription>
				<div className='flex items-center justify-center h-12 w-12 rounded-full bg-secondary'>
					{pkg.overview}

				</div>
			</CardDescription>

				<div className='space-y-2'>
					<div className='flex justify-between items-start'>
						<div>
							<CardTitle className='text-2xl font-bold'>{pkg.name}</CardTitle>
						</div>
					</div>
					<div className='flex items-baseline'>
						<span className='text-3xl font-bold'>{pkg.price}</span>
						{pkg.savings && (
							<Badge variant='secondary' className='ml-2 bg-green-100'>
								{pkg.savings}
							</Badge>
						)}
					</div>
				</div>
			</CardHeader>

			<CardContent className='flex-grow space-y-6'>
				<div className='flex items-center text-muted-foreground'>
					<Calendar className='w-4 h-4 mr-2' />
					<span className='text-sm'>Delivery in {pkg.turnaround}</span>
				</div>

				{pkg.bestFor && (
					<div className='bg-secondary/30 p-3 rounded-lg'>
						<p className='text-sm font-medium mb-2'>Best For:</p>
						<ul className='space-y-1'>
							{pkg.bestFor.map((item: string, index: number) => (
								<li key={index} className='text-sm text-muted-foreground'>
									• {item}
								</li>
							))}
						</ul>
					</div>
				)}

				<div>
					<div className='flex items-center mb-3'>
						<span className='text-sm font-medium'>What&apos;s Included:</span>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Info className='w-4 h-4 ml-2 text-muted-foreground cursor-help' />
								</TooltipTrigger>
								<TooltipContent>
									<p className='text-sm'>
										All features included in this package
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<ul className='space-y-3'>
						{pkg.includes.map((item: string, index: number) => (
							<li key={index} className='flex items-start'>
								<CheckCircle className='w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0' />
								<span className='text-sm leading-tight'>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</CardContent>

			<CardFooter className='pt-6'>
				<BookCalendly text={`Book Call for ${pkg.name} `} />
			</CardFooter>
		</Card>
	)
}

function MauticInfoSection() {
	return (
		<Card className='w-full max-w-3xl mx-auto my-16'>
			<CardHeader>
				<CardTitle>What is Mautic?</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<p>
					Mautic is the world&apos;s largest{' '}
					<strong>open-source marketing automation platform</strong> that helps
					businesses of all sizes create, automate, and personalize customer
					journeys. With Mautic, you can:
				</p>
				<ul className='list-disc list-inside space-y-1'>
					<li>Automate email marketing campaigns</li>
					<li>Track website visitors and capture leads</li>
					<li>Build and manage segmented contact lists</li>
					<li>Send personalized content based on customer behavior</li>
					<li>Easily integrate with your existing tools and services</li>
				</ul>
				<p>
					By using Mautic, you can streamline your marketing efforts, increase
					engagement, and grow your community—without the limitations of
					expensive, proprietary platforms.
				</p>
			</CardContent>
			<CardFooter>
				<Button asChild>
					<Link
						href='https://www.mautic.org/'
						target='_blank'
						rel='noopener noreferrer'>
						Learn more about Mautic
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

function PrototypeFrontendDevelopment() {
	return (
		<Card className='w-full max-w-3xl mx-auto overflow-hidden my-16'>
			<CardHeader className='bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground p-6'>
				<CardTitle className='text-2xl md:text-3xl font-bold'>
					Prototype Full Stack Development
				</CardTitle>
				<div className='flex items-center mt-2'>
					<span className='text-xl font-semibold mr-2'>Custom Pricing</span>
					<Badge variant='secondary'>Tailored Solution</Badge>
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
						Ready to bring your prototype to life? Let&aposs discuss your
						project requirements and create a tailored solution for your
						business.
					</p>
					<Button className='w-full'>Schedule a Free Discovery Call</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
