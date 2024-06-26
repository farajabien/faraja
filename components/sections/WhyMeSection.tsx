import React from 'react'

export default function WhyMeSection() {
	return (
		<section className='py-20 bg-gray-100 hover:shadow-inner transition-all duration-500'>
			<div className='max-w-prose mx-auto'>
				<h2 className='text-4xl font-bold text-center  hover:text-orange-500 transition-all duration-500'>
					Why Choose My One-Man Approach? 👨🏾
				</h2>
				{/* Reasons */}
				<div className='space-y-10 mt-10'>
					{/* Rapid Results */}
					<div>
						<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
							Rapid Results ⏱
						</h3>
						<p>
							Get a working prototype in weeks, not months, enabling you to
							validate your idea and move forward quickly.
						</p>
					</div>
					{/* Proven Startup Experience */}
					<div>
						<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
							Proven Startup Experience 🌟
						</h3>
						<p>
							Proven experience with bootstrapped startups, understanding the
							unique challenges and opportunities you face.
						</p>
					</div>
					{/* Cost-Effective */}
					<div>
						<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
							Cost-Effective 💰
						</h3>
						<p>
							My rates are a fraction of any other alternative, making it easier
							for you to test your ideas.
						</p>
					</div>
					{/* Single Point of Contact */}
					<div>
						<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
							Single Point of Contact 📞
						</h3>
						<p>
							Streamlined communication ensures faster decision-making and a
							smoother process.
						</p>
					</div>
					{/* Design-Oriented Development */}
					<div>
						<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
							Design-Oriented Development 🎨
						</h3>
						<p>
							My design-focused approach results in a visually appealing and
							user-friendly prototype that showcases your vision.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
