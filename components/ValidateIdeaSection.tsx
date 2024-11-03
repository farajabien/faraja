import React from 'react'
import { ArrowRight, CheckCircle, Lightbulb, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import BookCalendly from './BookCalendly'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'

export default function ValidationSection() {
	return (
		<div className='py-16 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<Badge className='mb-4 bg-primary/10 text-primary'>
						Validation Framework
					</Badge>
					<h2 className='text-3xl font-bold mb-4'>Validate Before You Build</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						A business can be broken down into 2 major components: the Problem
						and the Solution. Let&apos;s validate both before investing time,
						effort, and money.
					</p>
					<div className='mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
						<Target className='h-4 w-4' />
						<span>Step-by-step process</span>
						<span className='mx-2'>•</span>
						<CheckCircle className='h-4 w-4' />
						<span>Proven methodology</span>
						<span className='mx-2'>•</span>
						<ArrowRight className='h-4 w-4' />
						<span>Clear success criteria</span>
					</div>
				</div>

				{/* Process Steps */}
				<div className='grid md:grid-cols-2 gap-8 mb-12'>
					{/* Problem Validation */}
					<Card className='p-6'>
						<div className='mb-6'>
							<Target className='h-8 w-8 text-primary mb-2' />
							<h3 className='text-xl font-semibold mb-2'>
								✅ Problem Validation
							</h3>
							<p className='text-muted-foreground mb-6'>
								Validate your problem before spending resources on solutions
							</p>
						</div>

						<div className='space-y-6'>
							<div>
								<h4 className='font-medium mb-3'>Step 1: Define The Problem</h4>
								<div className='bg-secondary/10 p-4 rounded-lg mb-4'>
									<div className='grid grid-cols-2 gap-4'>
										<div>
											<h5 className='text-sm font-medium mb-2'>The Audience</h5>
											<p className='text-sm text-muted-foreground'>
												Who are you solving for?
											</p>
										</div>
										<div>
											<h5 className='text-sm font-medium mb-2'>
												The Pain Point
											</h5>
											<p className='text-sm text-muted-foreground'>
												What problem did you identify?
											</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h4 className='font-medium mb-3'>Step 2: Test Assumptions</h4>
								<ul className='space-y-2'>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>Identify hidden assumptions</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>Define testing strategy</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>Set validation criteria</span>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-medium mb-3'>Step 3: Pivot If Needed</h4>
								<p className='text-sm text-muted-foreground'>
									If assumptions are invalid, adjust your audience or pain point
									and test again
								</p>
							</div>
						</div>
					</Card>

					{/* Solution Validation */}
					<Card className='p-6'>
						<div className='mb-6'>
							<Lightbulb className='h-8 w-8 text-primary mb-2' />
							<h3 className='text-xl font-semibold mb-2'>
								✅ Solution Validation
							</h3>
							<p className='text-muted-foreground mb-6'>
								Only proceed to solution after validating the problem
							</p>
						</div>

						<div className='space-y-6'>
							<div>
								<h4 className='font-medium mb-3'>
									Step 4: Define The Solution
								</h4>
								<div className='bg-secondary/10 p-4 rounded-lg mb-4'>
									<div className='grid grid-cols-3 gap-4'>
										<div>
											<h5 className='text-sm font-medium mb-2'>Audience</h5>
											<p className='text-sm text-muted-foreground'>Validated</p>
										</div>
										<div>
											<h5 className='text-sm font-medium mb-2'>Pain Point</h5>
											<p className='text-sm text-muted-foreground'>Validated</p>
										</div>
										<div>
											<h5 className='text-sm font-medium mb-2'>Solution</h5>
											<p className='text-sm text-muted-foreground'>MVP Scope</p>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h4 className='font-medium mb-3'>
									Step 5: Test Solution Assumptions
								</h4>
								<ul className='space-y-2'>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>Technical feasibility</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>Resource requirements</span>
									</li>
									<li className='flex items-start gap-2'>
										<CheckCircle className='h-4 w-4 text-green-500 mt-1' />
										<span className='text-sm'>MVP development & testing</span>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-medium mb-3'>Step 6: Iterate or Pivot</h4>
								<p className='text-sm text-muted-foreground'>
									Adjust solution based on feedback while maintaining validated
									problem-fit
								</p>
							</div>
						</div>
					</Card>
				</div>

				{/* CTA Section */}
				<div className='bg-secondary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto'>
					<h3 className='text-2xl font-bold mb-4'>
						Start Your Validation Journey
					</h3>
					<p className='text-muted-foreground mb-6'>
						Use our free template to validate your startup idea systematically.
						No email required.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button size='lg' className='group' asChild>
							<Link
								href='https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5'
								target='_blank'
								rel='noopener noreferrer'>
								Get Free Template
								<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
							</Link>
						</Button>
						<BookCalendly text='Get Expert Guidance' />
					</div>
				</div>
			</div>
		</div>
	)
}
