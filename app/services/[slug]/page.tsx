import React from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, CheckCircle, Plus, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import BookCalendly from '@/components/BookCalendly'
import { services } from '@/lib/utils'

export async function generateStaticParams() {
	return services.flatMap((service) =>
		service.packages.map((pkg) => ({
			slug: pkg.slug,
		}))
	)
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }) {
	const { slug } = await params
	const pkg = services
		.flatMap((service) => service.packages)
		.find((p) => p.slug === slug)

	if (!pkg) return {}

	return {
		title: `${pkg.name} - Product Development Services`,
		description: pkg.overview,
	}
}

export default async function ServicePage({ params }: { params: Params }) {
	const { slug } = await params
	const pkg = services
		.flatMap((service) => service.packages)
		.find((p) => p.slug === slug)

	if (!pkg) {
		notFound()
	}

	return (
		<div className='min-h-screen bg-background py-16'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<Link href='/services'>
						<Button variant='ghost' className='mb-8'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Back to Services
						</Button>
					</Link>

					{/* Header Section */}
					<div className='mb-12'>
						{pkg.isPopular && (
							<Badge className='mb-4 bg-primary/10 text-primary'>
								Most Popular
							</Badge>
						)}
						{pkg.savings && (
							<Badge variant='secondary' className='ml-2 mb-4'>
								Save {pkg.savings}
							</Badge>
						)}
						<h1 className='text-4xl font-bold mb-4'>{pkg.name}</h1>
						<p className='text-xl text-muted-foreground mb-6'>{pkg.overview}</p>
						<div className='flex flex-wrap items-center gap-4'>
							<div className='text-3xl font-bold'>{pkg.price}</div>
							<div className='flex items-center text-muted-foreground'>
								<Clock className='mr-2 h-4 w-4' />
								{pkg.deliveryTime}
							</div>
						</div>

						{/* Best For Section */}
						{pkg.bestFor && (
							<div className='mt-4'>
								<h3 className='text-sm font-medium text-muted-foreground mb-2'>
									Best For:
								</h3>
								<ul className='flex flex-wrap gap-2'>
									{pkg.bestFor.map((item, index) => (
										<li key={index}>
											<Badge variant='secondary' className='text-xs'>
												{item}
											</Badge>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* Main Content Grid */}
					<div className='grid md:grid-cols-2 gap-8 mb-12'>
						{/* Deliverables Card */}
						<Card>
							<CardContent className='pt-6'>
								<h2 className='text-xl font-semibold mb-4'>
									What&apos;s Included
								</h2>
								<ul className='space-y-3'>
									{pkg.deliverables.map((deliverable, index) => (
										<li key={index} className='flex items-start gap-2'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 shrink-0' />
											<div>
												<div className='font-medium'>{deliverable.name}</div>
												{deliverable.details && (
													<p className='text-sm text-muted-foreground'>
														{deliverable.details}
													</p>
												)}
											</div>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						{/* Process Card */}
						<Card>
							<CardContent className='pt-6'>
								<h2 className='text-xl font-semibold mb-4'>
									Development Process
								</h2>
								<div className='space-y-4'>
									{pkg.details.map((detail, index) => (
										<div key={index}>
											<h3 className='font-medium mb-2'>{detail.subtitle}</h3>
											<p className='text-sm text-muted-foreground whitespace-pre-line'>
												{detail.content}
											</p>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Tech Stack Section */}
					{pkg.techStack && (
						<Card className='mb-12'>
							<CardContent className='pt-6'>
								<h2 className='text-xl font-semibold mb-4'>Tech Stack</h2>
								<div className='flex flex-wrap gap-3'>
									{pkg.techStack.map((tech, index) => (
										<Badge
											key={index}
											variant='secondary'
											className='flex items-center gap-2 px-3 py-1'>
											<Zap className='h-3 w-3' />
											<span>{tech}</span>
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					)}

					{/* Add-ons Section */}
					{pkg.addOns && pkg.addOns.length > 0 && (
						<Card className='mb-12'>
							<CardContent className='pt-6'>
								<h2 className='text-xl font-semibold mb-4'>
									Available Add-ons
								</h2>
								<div className='space-y-4'>
									{pkg.addOns.map((addon, index) => (
										<div
											key={index}
											className='flex items-start gap-2 p-4 bg-secondary/10 rounded-lg'>
											<Plus className='h-5 w-5 text-primary mt-0.5' />
											<div className='flex-grow'>
												<div className='flex items-center justify-between'>
													<div className='font-medium'>{addon.name}</div>
													{addon.availability && (
														<Badge variant='outline' className='text-xs'>
															{addon.availability}
														</Badge>
													)}
												</div>
												<p className='text-sm text-muted-foreground'>
													{addon.description}
												</p>
												<div className='text-sm font-medium text-primary mt-1'>
													{addon.price}
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					)}

					{/* CTA Section */}
					<div className='text-center space-y-4'>
						<BookCalendly text='Schedule Consultation' />
						<p className='text-sm text-muted-foreground'>
							Free 30-minute consultation to discuss your project needs
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
