import React from 'react'
import { Card } from '../ui/card'

export default function Pricing() {
	return (
		<div
			id='pricing'
			className='py-20 bg-gray-100 hover:shadow-inner transition-all duration-500 px-5 max-w-prose mx-auto'>
			<div className='max-w-prose md:max-w-4xl mx-auto'>
				<RatesSection />
				<BenefitsSection />
			</div>
		</div>
	)
}

function RatesSection() {
	return (
		<section id='rates'>
			<h2 className='text-2xl md:text-5xl font-bold text-center mb-5 hover:text-orange-500 transition-all duration-500'>
				What&apos;s the Investment? (Your Budget, Your Terms)
			</h2>
			<div className='text-center'>
				<p className='text-gray-600 text-lg mt-2'>
					I get it. Startups run lean. That&apos;s why I&apos;m committed to
					working within your budget. We can explore several options to find the
					right fit:
				</p>
			</div>
			<div className='mx-2 mt-5'>
				<ul className='text-gray-600 text-lg grid md:grid-cols-2 gap-4'>
					<li className='bg-gray-900 text-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
						<strong className='  text-orange-500  underline '>
							Fixed Fee:
						</strong>{' '}
						Clear, upfront cost for a 4-week prototype delivery. No surprises.
					</li>
					<li className='bg-gray-900 text-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
						<strong className='  text-orange-500  underline '>
							Flexible Options:
						</strong>{' '}
						Open to equity arrangements or hybrid models for tight budgets.
					</li>
				</ul>
			</div>
			<div className='text-center mt-5'>
				<p className='text-gray-600 text-lg'>
					Your success is my success. Let&apos;s find a way to make this work!
				</p>
			</div>
		</section>
	)
}

function BenefitsSection() {
	return (
		<section>
			<h2 className='text-3xl md:text-5xl mt-5 font-bold text-center hover:text-orange-500 transition-all duration-500'>
				What&apos;s In It for You?
			</h2>
			<div className='text-center'>
				<div className='text-gray-600 text-lg mt-2 grid-cols-1 grid gap-2'>
					<Card className='py-2 rounded-xl'>
						<h2 className='text-xl font-bold '> Validate Your Idea Faster</h2>
						<p className='text-gray-600 text-lg'>
							Get your product in front of users within weeks, not months.
						</p>
					</Card>

					<Card className='py-2 rounded-xl'>
						<h2 className='text-xl font-bold '> Save Valuable Resources</h2>
						<p className='text-gray-600 text-lg'>
							Avoid overspending on unnecessary design and development.
						</p>
					</Card>

					<Card className='py-2 rounded-xl'>
						<h2 className='text-xl font-bold '> Reduce Risk</h2>
						<p className='text-gray-600 text-lg'>
							Test your assumptions and make informed decisions before scaling.
						</p>
					</Card>
				</div>
			</div>
		</section>
	)
}
