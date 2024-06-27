import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

export type ProcessType = {
	title: string
	description: string
}

export default function ProcessSection() {
	const processSteps = [
		{
			title: 'Problem Validation',
			description:
				'Talk to potential customers. Understand their pain points. Validate your assumptions.',
		},
		{
			title: 'Core User Flows',
			description:
				'Map out the essential actions users need to take. Prioritize functionality over fancy features.',
		},
		{
			title: 'Functional Prototype',
			description:
				"Build a basic version of your app that works, even if it's not pretty.",
		},
		{
			title: 'User Testing',
			description:
				'Get feedback from real users. Be open to criticism and willing to pivot.',
		},
		{
			title: 'Iterate Quickly',
			description:
				'Refine your prototype based on feedback and repeat the process.',
		},
	]
	return (
		<section id='process' className='bg-gray-100 py-20 px-5'>
			<div className='max-w-prose mx-auto'>
				<div className='text-center'>
					<h2 className='text-3xl text-5xl font-bold  hover:text-orange-500 transition-all duration-500'>
						The Traditional SDLC is Failing Startups
					</h2>
					<Image
						src='https://miro.medium.com/v2/resize:fit:1400/1*CEiTy5Stbaee82Ipafwnxw.png'
						alt='Problem Solving'
						width={1000}
						height={0}
						loading='lazy'
						className='rounded-lg grayscale hover:grayscale-0 transition-all duration-500 w-full h-auto'
					/>
					<h2 className='text-2xl md:text-3xl font-bold  mt-5 hover:text-orange-500 transition-all duration-500'>
						Why Traditional SDLC May Not Suit Startups
					</h2>
					<p className='text-gray-600 mb-2 text-lg p-10 pb-0'>
						The traditional Software Development Life Cycle (SDLC) was designed
						for large, established companies with ample resources and
						predictable timelines. But for startups, especially in the
						fast-paced and ever-changing African market, this rigid, linear
						approach often leads to failure.
					</p>
					<p
						className='text-gray-600 mb-2 text-lg p-10 pb-0
					'>
						Here are some common pitfalls of the traditional SDLC:
					</p>
					<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mx-auto max-w-4xl text-gray-700 m-4 rounded-lg shadow-lg bg-white p-6'>
						<li className='transition-all duration-500 hover:bg-gray-50 p-2 rounded-lg'>
							<strong className='text-gray-900'>Slow Time to Market:</strong>{' '}
							Months or even years can be wasted on planning, designing, and
							developing before you even get your product in front of real
							users.
						</li>
						<li className='transition-all duration-500 hover:bg-gray-50 p-2 rounded-lg'>
							<strong className='text-gray-900'>High Costs:</strong> The SDLC
							requires a large investment in design, development, and project
							management, quickly draining a startup&apos;s limited budget.
						</li>
						<li className='transition-all duration-500 hover:bg-gray-50 p-2 rounded-lg'>
							<strong className='text-gray-900'>Inflexibility:</strong> Once
							you&apos;ve committed to a design, its difficult and expensive to
							change course, even if user feedback suggests otherwise.
						</li>
						<li className='transition-all duration-500 hover:bg-gray-50 p-2 rounded-lg'>
							<strong className='text-gray-900'>High Risk:</strong> Without
							early validation, you risk building a product that doesn&apos;t
							solve a real problem or meet the needs of your target audience.
						</li>
					</ul>
				</div>
				<h2 className='text-3xl md:text-5xl font-bold text-center my-16  hover:text-orange-500 transition-all duration-500'>
					The Fail Fast Solution: Your Shortcut to Success
				</h2>
				<p className='text-xl text-center mb-16 text-gray-600 m-2 mx-auto max-w-prose'>
					The Fail Fast approach is a game-changer. It&apos;s a lean,
					user-centered process that gets your product in front of real users
					quickly, so you can learn and adapt.
				</p>

				<div
					className='
					
				'>
					{processSteps.map((process: ProcessType, index: number) => (
						<div
							key={index}
							className=' text-center p-5 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg bg-white rounded-2xl border-gray-900 mb-4 hover:shadow-xl'>
							<h3 className='text-3xl font-semibold mb-4 text-orange-500 '>
								{index + 1}. {process.title}
							</h3>
							<p>{process.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
