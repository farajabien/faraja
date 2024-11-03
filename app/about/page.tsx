import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Twitter, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TikTokEmbed from '@/components/TikTokEmbed'
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts'
import { Metadata } from 'next'

// app/about/page.tsx - About page metadata
export const metadata: Metadata = {
	title: 'About Bienvenu Faraja - Technical Co-Founder',
	description:
		'5+ years experience building successful startups in East Africa. Expertise in Next.js, React, and local payment integrations. Featured projects include RentFlow with 95% collection rates.',
	openGraph: {
		title: 'Bienvenu Faraja - Technical Co-Founder & Full Stack Developer',
		description:
			'Building successful startups in East Africa with modern tech stack and local market expertise.',
		images: ['/images/og-about.png'],
	},
}

const AboutPage = () => {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto'>
					<div className='flex flex-col md:flex-row gap-8 items-center'>
						<div className='md:w-1/3'>
							<Image
								src='https://media.licdn.com/dms/image/v2/D4D03AQH_C3vhrK9h8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686893823252?e=1735776000&v=beta&t=CPpu-ZmTasT7RlY_746RIcw-HGwh3f3tkgjOxzyTPxU'
								alt='Profile picture'
								width={300}
								height={300}
								className='rounded-full shadow-lg'
							/>
						</div>
						<div className='md:w-2/3 text-center md:text-left'>
							<h1 className='text-4xl font-bold mb-4'>
								Technical Co-Founder for East African Startups
							</h1>
							<p className='text-xl text-muted-foreground mb-6'>
								Helping non-technical founders build market-ready products in 4
								weeks or less
							</p>
							<div className='flex gap-4 justify-center md:justify-start'>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://github.com/farajabien'>
										<Github className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://twitter.com/farajabien'>
										<Twitter className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon' asChild>
									<Link href='https://linkedin.com/in/farajabien'>
										<LinkedinIcon className='h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Project Section - Updated */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-4xl font-bold text-center mb-4'>
						From Idea to Success: RentFlow Case Study
					</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						How we built and launched a property management platform that
						achieved 95% collection rates
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						<div>
							<Card className='h-full'>
								<CardContent className='p-6'>
									<h3 className='text-xl font-semibold mb-4'>The Challenge</h3>
									<p className='text-muted-foreground mb-4'>
										Property managers struggled with manual rent collection,
										leading to:
									</p>
									<ul className='space-y-2'>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-primary' />
											<span>70% collection rates</span>
										</li>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-primary' />
											<span>20+ hours spent on manual follow-ups</span>
										</li>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-primary' />
											<span>Difficult payment reconciliation</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>

						<div>
							<Card className='h-full'>
								<CardContent className='p-6'>
									<h3 className='text-xl font-semibold mb-4'>The Solution</h3>
									<p className='text-muted-foreground mb-4'>
										We built an automated platform that delivers:
									</p>
									<ul className='space-y-2'>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-green-500' />
											<span>95% collection rates</span>
										</li>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-green-500' />
											<span>20 hours saved monthly</span>
										</li>
										<li className='flex items-center gap-2'>
											<div className='h-2 w-2 rounded-full bg-green-500' />
											<span>Real-time payment tracking</span>
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Story Section - Updated */}
			<section className='py-16 bg-secondary/10'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-4xl font-bold text-center mb-8 text-primary'>
							Why Work With Me
						</h2>
						<Card className='p-8 shadow-lg'>
							<div className='space-y-6'>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Full-Stack Expertise
									</h3>
									<p className='text-muted-foreground'>
										5+ years building scalable applications with modern tech
										stacks like Next.js, React, and Node.js
									</p>
								</div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Local Market Knowledge
									</h3>
									<p className='text-muted-foreground'>
										Deep understanding of East African market needs and
										integration expertise with local payment systems
									</p>
								</div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Proven Track Record
									</h3>
									<p className='text-muted-foreground'>
										Successfully launched multiple startups from concept to
										market-ready products
									</p>
								</div>
								<Button className='w-full' asChild>
									<Link href='/services'>View Service Packages</Link>
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</section>
			{/* TikTok Content Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						My Journey on TikTok
					</h2>
					<div className='max-w-2xl mx-auto'>
						<TikTokEmbed />
					</div>
				</div>
			</section>

			<FeaturedBlogPosts />
		</div>
	)
}

export default AboutPage
