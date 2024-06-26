import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export type ProjectType = {
	title: string
	subtitle: string
	description: string
	link: string
	image: string
}
export default function PortfolioSection() {
	const projects = [
		{
			title: 'BingBang',
			subtitle: "Africa's Fair & Instant Win Gaming Platform",
			description:
				'BingBang is revolutionizing online gaming in Africa with guaranteed wins every round, instant payouts, and provably fair results.',
			link: 'https://bingbang.vercel.app',
			image: '/images/bingbang.png',
		},
		{
			title: 'ValueUnder10k',
			subtitle: "Nairobi's First Online Auction Marketplace",
			description:
				'Find incredible deals on pre-loved tech and gadgets for under 10,000 Ksh. Join the bidding frenzy and snag your next bargain!',
			link: 'https://valueunder10k.vercel.app',
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
		<section className='py-20 bg-gray-200 hover:shadow-inner transition-all duration-500 container'>
			<div className='max-w-6xl mx-auto '>
				<h2
					className='text-4xl font-bold text-center
        hover:text-orange-500 transition-all duration-500
        '>
					Featured Projects
				</h2>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project: ProjectType, index: number) => (
						<Card
							key={index}
							className='flex  grayscale hover:grayscale-0 flex-col bg-white text-center p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl'>
							<CardTitle>
								<Image
									src={project.image}
									width={300}
									height={200}
									alt={project.title}
									className='rounded-lg border-2 border-black mx-auto'
								/>
								<h2 className='m-2'>{project.title}</h2>
							</CardTitle>
							<p className='text-orange-500'>{project.subtitle}</p>
							<p className='flex-grow'>{project.description}</p>{' '}
							<Link href={project.link}>
								<Button
									className='mt-4 transition-all duration-500 text-white   bg-gradient-to-r from-orange-500  to-orange-700 hover:from-orange-700 hover:to-orange-900
                  
                  '>
									View Project
								</Button>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
