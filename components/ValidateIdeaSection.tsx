import React from 'react'
import { ArrowRight, CheckCircle, Lightbulb, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from './BookCalendly'

export default function ValidationSection() {
	return (
		<div className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold mb-4'>
						Validate Your Startup Idea
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Start with our free validation framework to ensure your idea has
						real market potential before investing time and resources
					</p>
				</div>

				{/* Process Cards */}
				<div className='grid md:grid-cols-3 gap-6 mb-12'>
					<Card className='p-6'>
						<div className='mb-4'>
							<Target className='h-8 w-8 text-primary mb-2' />
							<h3 className='text-xl font-semibold mb-2'>
								1. Problem Validation
							</h3>
							<p className='text-muted-foreground'>
								Identify your target audience and validate their pain points
								through systematic testing
							</p>
						</div>
						<ul className='space-y-2'>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Define audience segments</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Document pain points</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Test assumptions</span>
							</li>
						</ul>
					</Card>

					<Card className='p-6'>
						<div className='mb-4'>
							<Lightbulb className='h-8 w-8 text-primary mb-2' />
							<h3 className='text-xl font-semibold mb-2'>
								2. Solution Validation
							</h3>
							<p className='text-muted-foreground'>
								Design and validate your solution through MVP testing and user
								feedback
							</p>
						</div>
						<ul className='space-y-2'>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Solution ideation</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>MVP development</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>User testing</span>
							</li>
						</ul>
					</Card>

					<Card className='p-6'>
						<div className='mb-4'>
							<Users className='h-8 w-8 text-primary mb-2' />
							<h3 className='text-xl font-semibold mb-2'>3. Market Entry</h3>
							<p className='text-muted-foreground'>
								Prepare for successful market entry with validated insights and
								strategy
							</p>
						</div>
						<ul className='space-y-2'>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Go-to-market strategy</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Resource planning</span>
							</li>
							<li className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-500' />
								<span>Launch preparation</span>
							</li>
						</ul>
					</Card>
				</div>

				{/* CTA Section */}
				<div className='bg-secondary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto'>
					<h3 className='text-2xl font-bold mb-4'>
						Start Validating Your Idea Now
					</h3>
					<p className='text-muted-foreground mb-6'>
						Access our free validation template and start testing your business
						idea systematically. No email required.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button size='lg' className='group' asChild>
							<a
								href='https://www.notion.so/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5'
								target='_blank'
								rel='noopener noreferrer'>
								Use Free Template
								<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
							</a>
						</Button>
						<BookCalendly text=' Get Expert Help' />
					</div>
				</div>
			</div>
		</div>
	)
}
