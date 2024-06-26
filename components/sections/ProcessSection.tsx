import React from 'react'
import { Card } from '../ui/card'

export type ProcessType = {
	title: string
	client: string
	mine: string
}

export default function ProcessSection() {
	const processSteps = [
		{
			title: 'Problem Validation 🕵🏾',
			client:
				'Clear problem description, target audience details, and any relevant research.',
			mine: 'Refined problem statement, clarifying questions. (single document).',
		},
		{
			title: 'Core User Flows 🔀',
			client:
				'Feedback on the problem statement and your desired user scenarios.',
			mine: 'A visual diagram of core user flows (Excalidraw diagram).',
		},
		{
			title: 'Functional Prototype 🕹️',
			client: 'Feedback on user flows and feature prioritization.',
			mine: 'A working prototype built with Next.js, Supabase, and ShadcnUI.',
		},
		{
			title: 'User Testing & Feedback 🧪',
			client:
				'Access to testers (if needed) and active participation in feedback sessions.',
			mine: 'A concise report summarizing feedback and recommendations.',
		},
		{
			title: 'Handoff 🤝',
			client: 'Kudos: Thumbs up',
			mine: 'A functional prototype ready for collecting signups or building a waitlist, along with detailed documentation and code.',
		},
	]
	return (
		<section className='bg-gray-100 py-20'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-5xl font-bold text-center mb-16  hover:text-orange-500 transition-all duration-500'>
					My Proven 5-Step Process
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
					{processSteps.map((process: ProcessType, index: number) => (
						<Card
							key={index}
							className='bg-white rounded-lg shadow-lg p-5 border-black grayscale hover:grayscale-0 transition-all duration-500'>
							<h3 className='text-3xl font-semibold mb-4 text-orange-500 '>
								{index + 1}. {process.title}
							</h3>
							<p className='mb-2'>
								<strong>Your Input:</strong>
								{process.client}
							</p>
							<p>
								<strong>My Deliverables:</strong>
								{process.mine}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
