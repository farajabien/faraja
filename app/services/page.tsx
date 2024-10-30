import React from 'react'
import {
	Calendar,
	CheckCircle,
	Palette,
	Code,
	Package,
	BadgeDollarSign,
	Clock,
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
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Button } from '@/components/ui/button'
import AddOnsSection from '@/components/AddOnSection'
import Link from 'next/link'
import { services, PackageType } from '@/lib/utils'

const ServicesPage = () => {
	return (
		<div className='bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Services', href: '/services' },
				]}
			/>

			<ServicesTabs />
			<AddOnsSection />
			<CallToActionSection />
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
					<TabsList className='grid w-full grid-cols-3 max-w-2xl mx-auto'>
						<TabsTrigger value='technical' className='space-x-2'>
							<Code className='w-4 h-4' />
							<span>Technical</span>
						</TabsTrigger>
						<TabsTrigger value='design' className='space-x-2'>
							<Palette className='w-4 h-4' />
							<span>Design</span>
						</TabsTrigger>
						<TabsTrigger value='combo' className='space-x-2'>
							<Package className='w-4 h-4' />
							<span>Complete</span>
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

const ServiceCard = ({ service }: { service: PackageType }) => {
	const splitIncludedItem = (item: string) => {
		const parts = item.split(':')
		if (parts.length < 2) return { title: item, description: '' }
		return {
			title: parts[0].trim(),
			description: parts[1].trim(),
		}
	}

	return (
		<Card className='flex flex-col hover:shadow-lg transition-shadow'>
			<CardHeader>
				<div className='flex justify-between items-start mb-2'>
					<CardTitle className='text-xl font-semibold'>
						{service.name}
					</CardTitle>
					{service.isPopular && (
						<Badge variant='secondary'>Popular Choice</Badge>
					)}
				</div>
				<CardDescription>{service.description}</CardDescription>
			</CardHeader>

			<CardContent className='flex-grow space-y-4'>
				<div className='flex justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						<span className='text-sm text-muted-foreground'>
							{service.deliveryTime}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<span className='font-bold text-lg'>{service.price}</span>
					</div>
				</div>

				{service.savings && (
					<div className='bg-secondary/20 rounded-lg p-2 text-sm text-center'>
						Save {service.savings} with this package
					</div>
				)}

				{/* Best For Section */}
				{service.bestFor && (
					<div className='space-y-1'>
						<p className='text-sm font-medium'>Best For:</p>
						<div className='flex flex-wrap gap-2'>
							{service.bestFor.map((item, index) => (
								<Badge key={index} variant='outline'>
									{item}
								</Badge>
							))}
						</div>
					</div>
				)}

				{/* Includes Section */}
				<div className='space-y-2'>
					<p className='text-sm font-medium'>Includes:</p>
					<ul className='space-y-2'>
						{service.deliverables?.map((deliverable, index) => (
							<li key={index} className='flex items-start gap-2 text-sm'>
								<CheckCircle className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
								<span>{deliverable.name}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Details Section */}
				{service.details && service.details.length > 0 && (
					<div className='space-y-2'>
						<p className='text-sm font-medium'>Details:</p>
						<ul className='space-y-1'>
							{service.details.slice(0, 3).map((detail, index) => {
								const { title, description } = splitIncludedItem(
									detail.subtitle + ': ' + detail.content
								)
								return (
									<li key={index} className='flex flex-col'>
										<span className='font-bold'>{title}</span>
										<span className='text-sm text-muted-foreground'>
											{description}
										</span>
									</li>
								)
							})}
						</ul>
					</div>
				)}

				{/* Available Add-ons Section */}
				{service.addOns && service.addOns.length > 0 && (
					<div className='space-y-2'>
						<p className='text-sm font-medium'>Available Add-ons:</p>
						<ul className='space-y-1'>
							{service.addOns.map((addon, index) => (
								<li key={index} className='text-sm text-muted-foreground'>
									+ {addon.name} ({addon.price})
								</li>
							))}
						</ul>
					</div>
				)}
			</CardContent>

			<CardFooter className='border-t pt-4 flex justify-between gap-2'>
				<Button asChild variant='outline' className='w-1/2'>
					<Link href={`/services/${encodeURIComponent(service.name)}`}>
						Learn More
					</Link>
				</Button>
				<Button className='w-1/2'>Book Call</Button>
			</CardFooter>
		</Card>
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

export default ServicesPage
