import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Palette,
	ServerCog,
	Image,
	Wrench,
	Pen,
	Search,
	MailPlus,
	Clock,
	DollarSign,
} from 'lucide-react'

const AddOnsSection = () => {
	const addOns = [
		{
			category: 'Design & Branding',
			items: [
				{
					title: 'Custom Logo Design',
					description:
						'Tailored logo design that effectively represents your brand identity.',
					icon: Palette,
					price: {
						ksh: '10,000',
						usd: '100',
					},
					deliveryTime: '3-5 days',
				},
				{
					title: 'Social Media Graphics Package',
					description:
						'Professional graphics for your social media campaigns to boost engagement.',
					icon: Image,
					price: {
						ksh: '15,000',
						usd: '150',
					},
					deliveryTime: '2-4 days',
				},
			],
		},
		{
			category: 'Marketing & SEO',
			items: [
				{
					title: 'SEO Optimization Package',
					description:
						"Comprehensive SEO services to improve your website's visibility on search engines.",
					icon: Search,
					price: {
						ksh: '25,000',
						usd: '250',
					},
					deliveryTime: '5-10 days',
				},
				{
					title: 'Content Creation Package',
					description:
						'Engaging content creation for your blog or website, tailored to your audience.',
					icon: Pen,
					price: {
						ksh: '20,000',
						usd: '200',
					},
					deliveryTime: '5-7 days',
				},
			],
		},
		{
			category: 'Technical Services',
			items: [
				{
					title: 'Mautic Setup and Email Marketing',
					description:
						'Complete Mautic installation and configuration, including full setup of email marketing campaigns with design and automation.',
					icon: ServerCog,
					price: {
						ksh: '20,000',
						usd: '200',
					},
					deliveryTime: '2-5 days',
				},
				{
					title: 'Website Maintenance Package',
					description:
						'Monthly maintenance and updates to ensure optimal performance for your website.',
					icon: Wrench,
					price: {
						ksh: '15,000',
						usd: '150',
					},
					deliveryTime: 'Monthly',
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
						Enhance your package with these professional services
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
												<DollarSign className='w-4 h-4 text-primary' />
												<div>
													<span className='font-bold text-lg'>
														{addon.price.ksh} KSH
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

									{/* <CardFooter className='border-t pt-4'>
										<Button variant='outline' className='w-full'>
											Add to Package
										</Button>
									</CardFooter> */}
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
