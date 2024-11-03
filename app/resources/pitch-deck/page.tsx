import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { slides, commonMistakes } from './data'
import { Metadata } from 'next'
import { CheckCircle, AlertCircle } from 'lucide-react'
import DownloadDialog from './download-dialog'

export const metadata: Metadata = {
	title: 'Startup Pitch Deck Template | Faraja Bien',
	description:
		'Free pitch deck template based on successful East African startups. Includes complete structure and common mistakes to avoid.',
}

export default function PitchDeckPage() {
	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-16'>
				{/* Header */}
				<div className='max-w-3xl mx-auto text-center mb-16'>
					<Badge className='mb-4'>Free Resource</Badge>
					<h1 className='text-4xl font-bold mb-4'>
						Startup Pitch Deck Template
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						A comprehensive pitch deck template based on successful East African
						startups
					</p>
					<DownloadDialog />
				</div>

				{/* Slide Structure */}
				<section className='mb-16'>
					<h2 className='text-2xl font-bold mb-8 text-center'>
						Perfect Pitch Deck Structure
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{slides.map((slide) => (
							<Card key={slide.number} className='p-6'>
								<div className='flex items-start gap-4'>
									<span className='text-4xl font-bold text-primary/20'>
										{slide.number}
									</span>
									<div>
										<h3 className='text-lg font-semibold mb-2'>
											{slide.title}
										</h3>
										<p className='text-sm text-muted-foreground mb-4'>
											{slide.description}
										</p>
										<ul className='space-y-2'>
											{slide.items.map((item, index) => (
												<li key={index} className='flex items-center gap-2'>
													<CheckCircle className='h-4 w-4 text-primary' />
													<span className='text-sm'>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</Card>
						))}
					</div>
				</section>

				{/* Common Mistakes */}
				<section className='mb-16'>
					<h2 className='text-2xl font-bold mb-8 text-center'>
						Common Mistakes to Avoid
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{commonMistakes.map((mistake, index) => (
							<Card key={index} className='p-6'>
								<div className='flex items-start gap-4'>
									<AlertCircle className='h-6 w-6 text-primary' />
									<div>
										<h3 className='text-lg font-semibold mb-2'>
											{mistake.title}
										</h3>
										<p className='text-sm text-muted-foreground'>
											{mistake.description}
										</p>
									</div>
								</div>
							</Card>
						))}
					</div>
				</section>

				{/* Final CTA */}
				<div className='text-center max-w-2xl mx-auto'>
					<h2 className='text-2xl font-bold mb-4'>
						Ready to Create Your Pitch?
					</h2>
					<p className='text-muted-foreground mb-8'>
						Download our free template and start building your compelling pitch
						deck today
					</p>
					<DownloadDialog />
				</div>
			</div>
		</div>
	)
}
