import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Image, Clock, DollarSign } from 'lucide-react'
import BookCalendly from './BookCalendly'

// Main AddOnsSection Component
const AddOnsSection = () => {
	const addOns = [
		{
			category: 'Unlock Your Startup Potential',
			items: [
				{
					title: 'Logo Design',
					description:
						'Professional logo design to create a unique identity for your brand.',
					icon: Image, // You can replace this with an appropriate icon
					price: {
						ksh: '10,000',
						usd: '100',
					},
					deliveryTime: '24 hours',
				},
				{
					title: 'Landing Page',
					description:
						'Custom landing page design to effectively capture leads and promote your business.',
					icon: Image,
					price: {
						ksh: '15,000',
						usd: '150',
					},
					deliveryTime: '48 hours',
				},
				{
					title: 'Landing Page + Idea Validation',
					description:
						'Comprehensive package including landing page design and technical feasibility check for your startup idea.',
					icon: Image,
					price: {
						ksh: '25,000',
						usd: '250',
					},
					deliveryTime: '2-3 days',
				},
			],
		},
	]

	return (
		<section className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-4'>Additional Services</h2>
					<p className='text-lg text-muted-foreground'>
						Expert technical strategy and development services to help your
						business thrive.
					</p>
				</div>

				{addOns.map((category, idx) => (
					<div key={idx} className='mb-12 last:mb-0'>
						<h3 className='text-2xl font-semibold mb-6 text-primary'>
							{category.category}
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{category.items.map((addon, index) => (
								<Card
									key={index}
									className='flex flex-col hover:shadow-lg transition-shadow'>
									<CardHeader>
										<div className='flex items-center gap-3 mb-2'>
											<div className='p-2 rounded-lg bg-primary/10'>
												<addon.icon className='w-5 h-5 text-primary' />
											</div>
											<h3 className='text-xl font-semibold'>{addon.title}</h3>
										</div>
									</CardHeader>

									<CardContent className='flex-grow'>
										<p className='text-muted-foreground mb-4'>
											{addon.description}
										</p>

										<div className='space-y-3'>
											<div className='flex items-center gap-2'>
												<div>
													<span className='font-bold text-lg'>
														Ksh.{addon.price.ksh}
													</span>
													<span className='text-muted-foreground ml-2'>
														(${addon.price.usd})
													</span>
												</div>
											</div>

											<div className='flex items-center gap-2'>
												<Clock className='w-4 h-4 text-primary' />
												<span className='text-sm text-muted-foreground'>
													Delivery: {addon.deliveryTime}
												</span>
											</div>
										</div>
									</CardContent>

									<CardFooter className='border-t pt-4'>
										<BookCalendly text='Book Call' />
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default AddOnsSection
