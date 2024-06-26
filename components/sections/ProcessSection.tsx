import React from 'react'

export default function ProcessSection() {
	return (
		<section className='bg-gray-100 py-20'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-5xl font-bold text-center mb-16  hover:text-orange-500 transition-all duration-500'>
					My Proven 5-Step Process
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
					{/* Step 1 */}
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h3 className='text-3xl font-semibold mb-4  hover:text-orange-500 transition-all duration-500'>
							1. Problem Validation 🕵🏾
						</h3>
						<p className='mb-2'>
							<strong>Your Input:</strong> Clear problem description, target
							audience details, and any relevant research.
						</p>
						<p>
							<strong>My Deliverables:</strong> Refined problem statement,
							clarifying questions. (single document).
						</p>
					</div>
					{/* Step 2 */}
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h3 className='text-3xl font-semibold mb-4  hover:text-orange-500 transition-all duration-500'>
							2. Core User Flows
						</h3>
						<p className='mb-2'>
							<strong>Your Input:</strong> Feedback on the problem statement and
							your desired user scenarios.
						</p>
						<p>
							<strong>My Deliverable:</strong> A visual diagram of core user
							flows (Excalidraw diagram).
						</p>
					</div>
					{/* Step 3 */}
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h3 className='text-3xl font-semibold mb-4  hover:text-orange-500 transition-all duration-500'>
							3. Functional Prototype
						</h3>
						<p className='mb-2'>
							<strong>Your Input:</strong> Feedback on user flows and feature
							prioritization.
						</p>
						<p>
							<strong>My Deliverable:</strong> A working prototype built with
							Next.js, Supabase, and ShadcnUI.
						</p>
					</div>
					{/* Step 4 */}
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h3 className='text-3xl font-semibold mb-4  hover:text-orange-500 transition-all duration-500'>
							4. User Testing & Feedback
						</h3>
						<p className='mb-2'>
							<strong>Your Input:</strong> Access to testers (if needed) and
							active participation in feedback sessions.
						</p>
						<p>
							<strong>My Deliverable:</strong> A concise report summarizing
							feedback and recommendations.
						</p>
					</div>
					{/* Step 5 */}
					<div className='bg-white rounded-lg shadow-lg p-8'>
						<h3 className='text-3xl font-semibold mb-4  hover:text-orange-500 transition-all duration-500'>
							5. Handoff
						</h3>
						<p className='mb-2'>
							<strong>Kudos:</strong> Thumbs up
						</p>
						<p>
							<strong>My Deliverable:</strong> A functional prototype ready for
							collecting signups or building a waitlist, along with detailed
							documentation and code.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
