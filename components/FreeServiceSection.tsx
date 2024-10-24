'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	CheckCircle,
	Globe,
	Shield,
	Server,
	ArrowRight,
	Info,
} from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from 'sonner'
import BookCalendly from './BookCalendly'

const FreeServicesSection = () => {
	const benefits = [
		{
			icon: Globe,
			title: 'Free Custom Domain',
			description: '<BUSINESS>.fbien.com',
			tooltip: 'Professional domain name included with your package',
		},
		{
			icon: Shield,
			title: 'SSL Certificate',
			description: 'Secure browsing for your visitors',
			tooltip: 'Keep your website secure with HTTPS encryption',
		},
		{
			icon: Server,
			title: 'Cloud Hosting',
			description: 'Fast and reliable hosting included',
			tooltip: 'Premium hosting with 99.9% uptime guarantee',
		},
	]

	return (
		<section className='py-20 bg-gradient-to-b from-secondary/30 to-secondary/10'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center mb-12'>
					<h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						Everything You Need to Get Started
					</h2>
					<p className='text-xl text-muted-foreground'>
						Get a complete online presence package with our Logo + Landing Page
						+ Email Collection bundle
					</p>
				</div>

				<Card className='max-w-2xl mx-auto'>
					<CardContent className='p-8'>
						<div className='grid gap-6'>
							{benefits.map((benefit, index) => (
								<div
									key={index}
									className='flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/40 transition-colors'>
									<div className='rounded-full bg-primary/10 p-2'>
										<benefit.icon className='h-6 w-6 text-primary' />
									</div>

									<div className='flex-grow'>
										<div className='flex items-center gap-2'>
											<h3 className='font-semibold text-lg'>{benefit.title}</h3>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger asChild>
														<Info className='h-4 w-4 text-muted-foreground cursor-help' />
													</TooltipTrigger>
													<TooltipContent>
														<p className='text-sm'>{benefit.tooltip}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</div>
										<p className='text-muted-foreground'>
											{benefit.description}
										</p>
									</div>

									<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
								</div>
							))}
						</div>

						<div className='mt-8 pt-6 border-t'>
							<div className='flex flex-col items-center gap-4'>
								<p className='text-sm text-muted-foreground'>
									All these features are included in our comprehensive package
								</p>
								<BookCalendly text='Get Started Now' />
							</div>
						</div>
					</CardContent>
				</Card>

				<div className='mt-8 text-center text-sm text-muted-foreground'>
					<p>* Free domain and hosting are included for the first year</p>
				</div>
			</div>
		</section>
	)
}

export default FreeServicesSection
