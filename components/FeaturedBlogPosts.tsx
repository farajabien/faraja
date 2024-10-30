import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { ExternalLink, Newspaper } from 'lucide-react'

// Array of blog posts
const blogPosts = [
	{
		title: 'DePIN: When Did Infrastructure Need a Token?',
		description:
			'Exploring the dynamics of decentralized infrastructure and the role of tokens...',
		link: 'https://medium.com/@faraja.bien/depin-when-did-infrastructure-need-a-token-6d7231f5630d',
	},
	{
		title: '7 Mistakes I Learned to Avoid for My Next Accelerator Program',
		description:
			'My journey of learning, failure, and growth in the accelerator world...',
		link: 'https://medium.com/@faraja.bien/7-mistakes-i-learned-to-avoid-for-my-next-accelerator-program-2024-c4f2ff22a8f8',
	},
	{
		title: 'How SaaS Can Help You Build Scalable Startups in Africa',
		description:
			'Discover how SaaS can transform startup scalability in Africa...',
		link: 'https://medium.com/@faraja.bien/how-saas-can-help-you-build-scalable-startups-in-africa-346532fbdd3c',
	},
	{
		title:
			'Why Investors are Betting on SaaS in Africa: Building Startups That Scale',
		description:
			'Exploring the rise of SaaS investments in Africa and what it means for scalable startup growth...',
		link: '#', // Placeholder link
		comingSoon: true, // Indicate if the post is coming soon
	},
]

export default function FeaturedBlogPosts() {
	return (
		<section className='py-16 bg-secondary/30'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Featured Blog Posts
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
					{blogPosts.map((post, index) => (
						<Card key={index} className='flex flex-col'>
							<CardHeader>
								<CardTitle className='text-xl'>{post.title}</CardTitle>
							</CardHeader>
							<CardContent className='flex-grow'>
								<p className='text-muted-foreground mb-4'>{post.description}</p>
								<Button
									variant='outline'
									className='w-full'
									asChild
									disabled={post.comingSoon}>
									<Link href={post.comingSoon ? '#' : post.link}>
										{post.comingSoon ? 'Coming Soon' : 'Read More'}
										{!post.comingSoon && (
											<ExternalLink className='ml-2 h-4 w-4' />
										)}
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className='text-center mt-8'>
					<Button variant='outline' size='lg' asChild>
						<Link href='https://medium.com/@faraja.bien' target='_blank'>
							View All Posts
							<Newspaper className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
