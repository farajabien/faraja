import CalendlyComponent from '@/components/custom/calendly'
import HeroSection from '@/components/sections/HeroSection'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Calendar, Instagram, Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { InlineWidget } from 'react-calendly'
import { RoughNotation } from 'react-rough-notation'

export type ProjectType = {
	title: string
	subtitle: string
	description: string
	link: string
	image: string
}
export default function Home() {
	const projects = [
		{
			title: 'BingBang',
			subtitle: "Africa's Fair & Instant Win Gaming Platform",
			description:
				'BingBang is revolutionizing online gaming in Africa with guaranteed wins every round, instant payouts, and provably fair results.',
			link: 'https://bingbang.vercel.com',
			image: '/images/bingbang.png',
		},
		{
			title: 'ValueUnder10k',
			subtitle: "Nairobi's First Online Auction Marketplace",
			description:
				'Find incredible deals on pre-loved tech and gadgets for under 10,000 Ksh. Join the bidding frenzy and snag your next bargain!',
			link: 'https://valueunder10k.vercel.com',
			image: '/images/vu10k.png',
		},
		{
			title: 'ClassCritique',
			subtitle: 'Rate Your Classes & Professors',
			description:
				'Students helping students succeed! Discover the best courses and professors with anonymous reviews and ratings from your peers.',
			link: 'https://class-critique-3.vercel.app',
			image: '/images/classcritique.png',
		},
	]
	return (
		<div className='font-sans bg-gray-100 text-gray-900'>
			{/* Hero Section */}
			<HeroSection />

			<section className='bg-gray-100 py-20'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-5xl font-bold text-center mb-16'>
						My Proven 5-Step Process
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
						{/* Step 1 */}
						<div className='bg-white rounded-lg shadow-lg p-8'>
							<h3 className='text-3xl font-semibold mb-4'>
								1. Problem Validation
							</h3>
							<p className='mb-2'>
								<strong>Your Input:</strong> Clear problem description, target
								audience details, and any relevant research.
							</p>
							<p>
								<strong>My Deliverables:</strong> Refined problem statement,
								clarifying questions, and a detailed project proposal (single
								document).
							</p>
						</div>
						{/* Step 2 */}
						<div className='bg-white rounded-lg shadow-lg p-8'>
							<h3 className='text-3xl font-semibold mb-4'>
								2. Core User Flows
							</h3>
							<p className='mb-2'>
								<strong>Your Input:</strong> Feedback on the problem statement
								and your desired user scenarios.
							</p>
							<p>
								<strong>My Deliverable:</strong> A visual diagram of core user
								flows (Excalidraw diagram).
							</p>
						</div>
						{/* Step 3 */}
						<div className='bg-white rounded-lg shadow-lg p-8'>
							<h3 className='text-3xl font-semibold mb-4'>
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
							<h3 className='text-3xl font-semibold mb-4'>
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
							<h3 className='text-3xl font-semibold mb-4'>5. Handoff</h3>
							<p className='mb-2'>
								<strong>Your Input:</strong> Continued involvement in further
								development decisions (optional).
							</p>
							<p>
								<strong>My Deliverable:</strong> A functional prototype ready
								for collecting signups or building a waitlist, along with
								detailed documentation and code.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Highlights */}
			<section className='py-20 bg-gray-200'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-4xl font-bold text-center'>Featured Projects</h2>
					<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projects.map((project, index) => (
							<div
								key={index}
								className='flex flex-col bg-white text-center p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105'>
								<CardTitle>
									<Image
										src={project.image}
										width={300}
										height={200}
										alt={project.title}
										className='rounded-lg border-2 border-black'
									/>
									<h2 className='m-2'>{project.title}</h2>
								</CardTitle>
								<p className='text-gray-500'>{project.subtitle}</p>
								<p className='flex-grow'>{project.description}</p>{' '}
								{/* This makes the description take up all available space, pushing the button to the bottom */}
								<Link href={project.link}>
									<Button className='mt-4 self-end'>View Project</Button>{' '}
									{/* self-end aligns the button to the end of the flex container */}
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose My One-Man Approach? */}
			<section className='py-20 bg-gray-100'>
				<div className='max-w-prose mx-auto'>
					<h2 className='text-4xl font-bold text-center'>
						Why Choose My One-Man Approach?
					</h2>
					{/* Reasons */}
					<div className='space-y-10 mt-10'>
						{/* Rapid Results */}
						<div>
							<h3 className='text-2xl font-semibold'>Rapid Results</h3>
							<p>
								Get a working prototype in weeks, not months, enabling you to
								validate your idea and move forward quickly.
							</p>
						</div>
						{/* Proven Startup Experience */}
						<div>
							<h3 className='text-2xl font-semibold'>
								Proven Startup Experience
							</h3>
							<p>
								Proven experience with bootstrapped startups, understanding the
								unique challenges and opportunities you face.
							</p>
						</div>
						{/* Cost-Effective */}
						<div>
							<h3 className='text-2xl font-semibold'>Cost-Effective</h3>
							<p>
								My rates are a fraction of any other alternative, making it
								easier for you to test your ideas.
							</p>
						</div>
						{/* Single Point of Contact */}
						<div>
							<h3 className='text-2xl font-semibold'>
								Single Point of Contact
							</h3>
							<p>
								Streamlined communication ensures faster decision-making and a
								smoother process.
							</p>
						</div>
						{/* Design-Oriented Development */}
						<div>
							<h3 className='text-2xl font-semibold'>
								Design-Oriented Development
							</h3>
							<p>
								My design-focused approach results in a visually appealing and
								user-friendly prototype that showcases your vision.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className='py-20 bg-gray-200'>
				<div className='mx-auto text-center'>
					<h2 className='m-2 px-16 py-6 bg-black text-white text-2xl  border-black'>
						Book Free Consultation{' '}
					</h2>
					<CalendlyComponent />

					{/* Social Media Links */}
					<div className='mt-8 mx-auto'>
						<div className='flex justify-center gap-5'>
							<Link
								href='https://x.com/farajabien?s=21'
								target='_blank'
								rel='noopener noreferrer'>
								<X className='hover:filter-none filter grayscale' />
							</Link>
							<Link
								href='https://www.linkedin.com/in/bienvenufaraja/'
								target='_blank'
								rel='noopener noreferrer'>
								<Linkedin className='hover:filter-none filter grayscale' />
							</Link>
							<Link
								href='https://vm.tiktok.com/ZMrMhYEhW/'
								target='_blank'
								rel='noopener noreferrer'>
								TikTok
							</Link>
							<Link
								href='https://www.instagram.com/faraja_bien?igsh=MTZnM2pxOTlmdW13bA%3D%3D&utm_source=qr'
								target='_blank'
								rel='noopener noreferrer'>
								<Instagram className='hover:filter-none filter grayscale' />
							</Link>
						</div>
					</div>
				</div>
				<footer className='mt-8 text-center text-gray-500'>
					<p>
						&copy; {new Date().getFullYear()} Faraja Bien. All rights reserved.
					</p>
				</footer>
			</section>
		</div>
	)
}
