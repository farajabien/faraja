import React from 'react'
import {
	Calendar,
	CheckCircle,
	ClipboardCheck,
	Code,
	Database,
	FileCode,
	Layout,
	RefreshCw,
} from 'lucide-react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import AddOnsSection from '@/components/AddOnSection'
import Link from 'next/link'
import { services, PackageType } from '@/lib/utils' // Adjusted import for correct type

// Metadata for the page
export const metadata: Metadata = {
	title: 'Farajabien - Technical Strategy & Development Services',
	description:
		'Validate and launch your startup idea with expert technical guidance. From rapid validation to MVP development, get the expertise you need to succeed.',
}

// Main Services Page component
const ServicesPage = () => {
	return (
		<div className='bg-background'>
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

			<TechServices />
			<AddOnsSection />
			<CallToActionSection />
		</div>
	)
}

// Section for Technical Services
const TechServices = () => {
	const coreServices = services[0].packages // Assuming this retrieves the correct packages

	return (
		<section className='py-8 md:py-12 bg-secondary/10'>
			<div className='container mx-auto px-4'>
				<SectionHeader
					title='Technical Services'
					subtitle='Get the technical expertise you need to validate, build, and launch your startup idea.'
				/>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
					{coreServices.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	)
}

// Call to Action section
const CallToActionSection = () => {
	return (
		<section className='py-8 md:py-12 bg-secondary/30'>
			<div className='container mx-auto px-4 text-center'>
				<SectionHeader
					title='Ready to Get Started?'
					subtitle='Schedule a free discovery call to discuss your technical needs.'
				/>
				<BookCalendly text='Schedule Discovery Call' />
			</div>
		</section>
	)
}

// Reusable section header component
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

const ServiceCard = ({ service }: { service: PackageType }) => {
	return (
		<Card className='flex flex-col hover:shadow-lg transition-shadow'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold'>{service.name}</CardTitle>
			</CardHeader>

			<CardContent className='flex-grow space-y-4'>
				<p className='text-sm text-muted-foreground'>{service.description}</p>

				<div className='flex justify-between items-center'>
					<div className='flex items-center gap-2'>
						<Calendar className='w-5 h-5 text-primary' />
						<span className='text-sm'>{service.deliveryTime}</span>
					</div>
					<div className='text-right'>
						<span className='font-bold text-lg'>{service.price}</span>
					</div>
				</div>

				<ul className='space-y-2'>
					{service.details?.slice(0, 3).map((detail, index) => (
						<li key={index} className='flex items-center text-sm'>
							<CheckCircle className='w-4 h-4 text-primary mr-2 flex-shrink-0' />
							<span>{detail.subtitle}</span>
						</li>
					))}
				</ul>
			</CardContent>

			<CardFooter className='border-t pt-4 flex justify-between gap-2'>
				<Button asChild variant='outline' className='w-1/2'>
					<Link href={`/services/${encodeURIComponent(service.name)}`}>
						Learn More
					</Link>
				</Button>
				<BookCalendly text='Book Call' className='w-1/2' />
			</CardFooter>
		</Card>
	)
}

export default ServicesPage
