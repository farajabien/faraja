import React from 'react'
import { Card } from '../ui/card'

export type whyMePointsType = {
	title: string
	description: string
}
export default function WhyMeSection() {
	const whyMePoints: whyMePointsType[] = [
		{
			title: 'Save Time & Money',
			description: 'No more endless development cycles.',
		},
		{
			title: 'Reduce Risk',
			description: 'Test your idea before investing heavily.',
		},
		{
			title: 'Build Momentum',
			description: 'Get early users and validate demand.',
		},
		{
			title: 'Stay Agile',
			description: 'Quickly adapt to feedback and market changes.',
		},
	]
	return (
		<section
			id='whyme'
			className='py-20 bg-gray-100 hover:shadow-inner transition-all duration-500 px-5'>
			<div className='max-w-prose md:max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-5xl font-bold text-center  hover:text-orange-500 transition-all duration-500'>
					Why Fail Fast Works
				</h2>
				{/* Reasons */}
				<div className='mx-2 mt-10 grid grid-cols-2 md:grid-cols-4 gap-2'>
					{/* Rapid Results */}
					{whyMePoints.map((point: whyMePointsType, index: number) => (
						<Card
							key={index}
							className='bg-white rounded-2xl shadow-lg text-center p-5 border-black grayscale hover:grayscale-0 transition-all duration-500'>
							<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
								{point.title}
							</h3>
							<p>{point.description}</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
