import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	ExternalLink,
	Github,
	Newspaper,
	Twitter,
	LinkedinIcon,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import TikTokEmbed from '@/components/TikTokEmbed'
import ProjectShowcase from '@/components/ProjectShowcase'

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
								className='rounded-full'
							/>
						</div>
						<div className='md:w-2/3 text-center md:text-left'>
							<h1 className='text-4xl font-bold mb-4'>
								Hi, I&apos;m Bienvenu Mwenzagu Faraja
							</h1>
							<p className='text-xl text-muted-foreground mb-6'>
								Technical Co-Founder | Full-Stack Developer | Startup Specialist
							</p>
							<div className='flex gap-4 justify-center md:justify-start'>
								<Button variant='outline' size='icon'>
									<Link href='https://github.com/farajabien'>
										<Github className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon'>
									<Link href='https://twitter.com/farajabien'>
										<Twitter className='h-5 w-5' />
									</Link>
								</Button>
								<Button variant='outline' size='icon'>
									<Link href='https://linkedin.com/in/farajabien'>
										<LinkedinIcon className='h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Project Video Section */}
			<section className='py-16 bg-secondary/30'>
				<ProjectShowcase />
			</section>

			<section className='py-16 bg-secondary/10'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-4xl font-bold text-center mb-8 text-primary'>
							My Story
						</h2>
						<Card className='p-8 shadow-lg'>
							<div className='space-y-4 text-lg'>
								<p className='text-muted-foreground'>
									<b>Starting out in 2018</b>, I joined a web agency, turning
									client visions into reality and building a foundation in
									development.
								</p>
								<p className='text-muted-foreground'>
									<b>My journey evolved</b> through roles in early-stage
									startups, like Sarami Score as a frontend developer and King
									Rafiki, an e-commerce startup. I then had the opportunity to
									contribute to projects for the World Food Programme, focusing
									on tools that make an impact.
								</p>
								<blockquote className='text-primary italic'>
									&quot;I&apos;m passionate about creating tech solutions that
									empower non-technical founders.&quot;
								</blockquote>
								<p className='text-muted-foreground'>
									Today, I help founders bring software to life with scalable
									architecture, intuitive UX, and a relentless focus on user
									needs.
								</p>
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

			{/* Blog Posts Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						Featured Blog Posts
					</h2>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
						{/* Blog Post: Infrastructure and Tokenization */}
						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle className='text-xl'>
									DePIN: When Did Infrastructure Need a Token?
								</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<p className='text-muted-foreground mb-4'>
									Exploring the dynamics of decentralized infrastructure and the
									role of tokens...
								</p>
								<Button variant='outline' className='w-full' asChild>
									<Link href='https://medium.com/@faraja.bien/depin-when-did-infrastructure-need-a-token-6d7231f5630d'>
										Read More
										<ExternalLink className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</CardContent>
						</Card>

						{/* Blog Post: Accelerator Program Lessons */}
						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle className='text-xl'>
									7 Mistakes I Learned to Avoid for My Next Accelerator Program
								</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<p className='text-muted-foreground mb-4'>
									My journey of learning, failure, and growth in the accelerator
									world...
								</p>
								<Button variant='outline' className='w-full' asChild>
									<Link href='https://medium.com/@faraja.bien/7-mistakes-i-learned-to-avoid-for-my-next-accelerator-program-2024-c4f2ff22a8f8'>
										Read More
										<ExternalLink className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</CardContent>
						</Card>

						{/* Placeholder for Upcoming Blog */}
						<Card className='flex flex-col'>
							<CardHeader>
								<CardTitle className='text-xl'>
									Why Investors are Betting on SaaS in Africa: Building Startups
									That Scale
								</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<p className='text-muted-foreground mb-4'>
									Exploring the rise of SaaS investments in Africa and what it
									means for scalable startup growth...
								</p>
								<Button variant='outline' className='w-full' disabled>
									Coming Soon
								</Button>
							</CardContent>
						</Card>
					</div>

					<div className='text-center mt-8'>
						<Button variant='outline' size='lg' asChild>
							<Link href='/blog'>
								View All Posts
								<Newspaper className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutPage
