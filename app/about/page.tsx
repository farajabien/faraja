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
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts'

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

			<FeaturedBlogPosts />
		</div>
	)
}

export default AboutPage
