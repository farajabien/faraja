import React from 'react'
import { Card } from '../ui/card'

export type whyMePointsType = {
	title: string
	description: string
}
export default function WhyMeSection() {
	const whyMePoints: whyMePointsType[] = [
		{
			title: 'Rapid Results ⏱',
			description:
				'Get a working prototype in weeks, not months, enabling you to validate your idea and move forward quickly.',
		},
		{
			title: 'Proven Startup Experience 🌟',
			description:
				'Proven experience with bootstrapped startups, understanding the unique challenges and opportunities you face.',
		},
		{
			title: 'Cost-Effective 💰',
			description:
				'My rates are a fraction of any other alternative, making it easier for you to test your ideas.',
		},
		{
			title: 'Single Point of Contact 📞',
			description:
				'Streamlined communication ensures faster decision-making and a smoother process.',
		},
		{
			title: 'Design-Oriented Development 🎨',
			description:
				'My design-focused approach results in a visually appealing and user-friendly prototype that showcases your vision.',
		},
	]
	return (
		<section
			id='whyme'
			className='py-20 bg-gray-100 hover:shadow-inner transition-all duration-500 px-5'>
			<div className='max-w-prose md:max-w-4xl mx-auto'>
				<h2 className='text-4xl font-bold text-center  hover:text-orange-500 transition-all duration-500'>
					Why Choose My One-Man Approach? 👨🏾
				</h2>
				{/* Reasons */}
				<div className='mx-2 mt-10 grid grid-cols-2 md:grid-cols-3 gap-2'>
					{/* Rapid Results */}
					{whyMePoints.map((point: whyMePointsType, index: number) => (
						<Card
							key={index}
							className='bg-white rounded-lg shadow-lg p-5 border-black grayscale hover:grayscale-0 transition-all duration-500'>
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
