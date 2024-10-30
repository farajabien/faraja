import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart2, Clock, Users, Building } from 'lucide-react'
import Link from 'next/link'
import TikTokEmbed from './TikTokEmbed'
import Image from 'next/image'

const MetricCard = ({
	icon: Icon,
	value,
	label,
}: {
	icon: any
	value: string
	label: string
}) => (
	<div className='flex flex-col items-center p-4 bg-secondary/20 rounded-lg'>
		<Icon className='h-6 w-6 text-primary mb-2' />
		<div className='text-2xl font-bold'>{value}</div>
		<div className='text-sm text-muted-foreground text-center'>{label}</div>
	</div>
)

const ProjectShowcase = () => {
	return (
		<div className='container mx-auto px-4'>
			<h2 className='text-4xl font-bold text-center mb-4'>
				Featured Project: RentFlow
			</h2>
			<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
				Transforming rent collection for property managers in Nairobi through
				automation and smart technology
			</p>

			<div className='max-w-4xl mx-auto'>
				<Card className='overflow-hidden mb-8'>
					<Image
						src='/images/rentflow_dashboard.png'
						alt='RentFlow Dashboard'
						width={800}
						height={400}
					/>
				</Card>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
					<MetricCard icon={BarChart2} value='95%' label='Collection Rate' />
					<MetricCard icon={Clock} value='20hrs' label='Time Saved Monthly' />
					<MetricCard icon={Building} value='3-20' label='Properties Served' />
					<MetricCard icon={Users} value='8-25K' label='Rent Range (KES)' />
				</div>

				<Card className='mb-8'>
					<CardContent className='p-6'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-xl font-semibold mb-4'>Key Features</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-2'>
										<div className='h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1'>
											<span className='text-primary text-sm'>1</span>
										</div>
										<div>
											<span className='font-medium'>Smart Reminders</span>
											<p className='text-sm text-muted-foreground'>
												Automated WhatsApp & SMS notifications with escalation
											</p>
										</div>
									</li>
									<li className='flex items-start gap-2'>
										<div className='h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1'>
											<span className='text-primary text-sm'>2</span>
										</div>
										<div>
											<span className='font-medium'>One-Click Payments</span>
											<p className='text-sm text-muted-foreground'>
												Unique payment links supporting M-PESA, cards, and USSD
											</p>
										</div>
									</li>
									<li className='flex items-start gap-2'>
										<div className='h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1'>
											<span className='text-primary text-sm'>3</span>
										</div>
										<div>
											<span className='font-medium'>Auto Reconciliation</span>
											<p className='text-sm text-muted-foreground'>
												Real-time payment matching and balance tracking
											</p>
										</div>
									</li>
								</ul>
							</div>

							<div>
								<h3 className='text-xl font-semibold mb-4'>Impact</h3>
								<div className='bg-secondary/20 p-4 rounded-lg mb-4'>
									<blockquote className='text-sm italic'>
										&quot;Since using RentFlow, our rent collection rate
										improved from 70% to 95%. The automated reminders and easy
										payment links make a huge difference.&quot;
									</blockquote>
									<p className='text-sm font-medium mt-2'>
										- John Kamau, Property Manager
									</p>
									<p className='text-sm text-muted-foreground'>
										Zimmerman (12 Units)
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button className='w-full' asChild>
						<Link href='https://rentflow.fbien.com'>
							Visit Project
							<ArrowRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
					<Button variant='outline' className='w-full' disabled>
						View Case Study
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProjectShowcase
