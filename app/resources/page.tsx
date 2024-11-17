import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	FileDown,
	ArrowRight,
	CheckCircle,
	ExternalLink,
	Laptop,
	Code,
	MessageCircle,
	GitBranch,
	Zap,
	Globe,
	CreditCard,
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Developer Resources | Faraja Bien',
	description:
		'SaaS templates, startup tools, and development frameworks for African developers.',
}

interface Resource {
	id: string
	title: string
	description: string
	price: string
	features: string[]
	tags: string[]
	previewUrl: string
	detailsUrl: string
	downloadUrl?: string
	isPremium: boolean
	icon?: React.ElementType
}

const resources = [
	{
		category: 'SaaS Templates',
		items: [
			{
				id: 'saas-basic-template',
				title: 'Next.js SaaS Starter',
				description:
					'Production-ready SaaS template with authentication, subscriptions, and email delivery.',
				price: 'Free',
				features: [
					'Next.js (latest) with App Router',
					'Supabase for auth & database',
					'Stripe Integration',
					'Resend email delivery',
					'Responsive Tailwind design',
					'Documentation & setup guide',
				],
				tags: ['next.js', 'typescript', 'supabase', 'stripe'],
				previewUrl: 'https://saas-template.fbien.com',
				downloadUrl: 'https://github.com/farajabien/supabase-saas-starter',
				isPremium: false,
				detailsUrl: '/resources/supabase-saas-starter',
				icon: Code,
			},
		],
	},
	{
		category: 'Startup Resources',
		items: [
			{
				id: 'pitch-deck-template',
				title: 'Startup Pitch Deck',
				description:
					"Professional pitch deck template based on 54 Collective's proven framework for East African startups.",
				price: 'Free',
				features: [
					'12 essential slides',
					'Market sizing guide',
					'Financial projections',
					'Investment ask structure',
				],
				tags: ['pitch deck', 'startup', 'fundraising'],
				previewUrl: '#',
				downloadUrl: '/resources/pitch-deck',
				isPremium: false,
				detailsUrl: '/resources/pitch-deck-template',
				icon: Zap,
			},
		],
	},
	{
		category: 'Validation Tools',
		items: [
			{
				id: 'validation-framework',
				title: 'Startup Validation Framework',
				description:
					'Systematic approach to validate your startup idea before investing time and money.',
				price: 'Free',
				features: [
					'Problem validation guide',
					'Solution testing framework',
					'Market sizing templates',
					'Assumption testing tools',
				],
				tags: ['validation', 'startup', 'framework'],
				previewUrl: '#',
				downloadUrl:
					'https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5',
				isPremium: false,
				detailsUrl: '/resources/validation-framework',
				icon: GitBranch,
			},
		],
	},
	{
		category: 'Payment Integration',
		items: [
			{
				id: 'paystack-guide',
				title: 'Paystack Integration Guide',
				description:
					'Complete guide to implementing Paystack payments in Next.js applications with TypeScript.',
				price: 'Free',
				features: [
					'Step-by-step integration guide',
					'TypeScript code examples',
					'Webhook handling',
					'Error handling patterns',
					'Testing guidelines',
				],
				tags: ['paystack', 'payments', 'next.js', 'typescript'],
				previewUrl: '#',
				downloadUrl: '/resources/paystack-guide',
				isPremium: false,
				detailsUrl: '/resources/paystack-guide',
				icon: CreditCard,
			},
		],
	},
]

const ResourceCard = ({ resource }: { resource: Resource }) => {
	const Icon = resource.icon || Code

	return (
		<Card className='flex flex-col h-full'>
			<CardHeader>
				<div className='flex justify-between items-start mb-4'>
					<div>
						<div className='flex items-center gap-2 mb-2'>
							<Icon className='h-5 w-5 text-primary' />
							<h3 className='text-xl font-semibold'>{resource.title}</h3>
						</div>
						<p className='text-sm text-muted-foreground'>
							{resource.description}
						</p>
					</div>
					<Badge variant={resource.isPremium ? 'default' : 'secondary'}>
						{resource.price}
					</Badge>
				</div>
				<div className='flex flex-wrap gap-2'>
					{resource.tags.map((tag) => (
						<Badge key={tag} variant='outline' className='text-xs'>
							{tag}
						</Badge>
					))}
				</div>
			</CardHeader>

			<CardContent className='flex-grow'>
				<div className='space-y-4'>
					<h4 className='font-medium'>Includes:</h4>
					<ul className='space-y-2'>
						{resource.features.map((feature, index) => (
							<li key={index} className='flex items-start gap-2'>
								<CheckCircle className='h-4 w-4 text-primary shrink-0 mt-1' />
								<span className='text-sm'>{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</CardContent>

			<CardFooter className='flex gap-2'>
				{resource.previewUrl && resource.previewUrl !== '#' && (
					<Button variant='outline' className='flex-1' asChild>
						<a
							href={resource.previewUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-2'>
							<Laptop className='h-4 w-4' />
							<span>Live Demo</span>
							<ExternalLink className='h-4 w-4' />
						</a>
					</Button>
				)}
				<Button className='flex-1 group' asChild>
					<Link
						href={
							resource.isPremium
								? resource.detailsUrl
								: resource.downloadUrl || '#'
						}
						className='flex items-center justify-center gap-2'>
						{resource.isPremium ? (
							<>
								<Code className='h-4 w-4' />
								<span>View Details</span>
							</>
						) : (
							<>
								<FileDown className='h-4 w-4' />
								<span>Get Resource</span>
							</>
						)}
						<ArrowRight className='h-4 w-4 ml-2 transition-transform group-hover:translate-x-1' />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

const CategorySection = ({
	category,
	items,
}: {
	category: string
	items: Resource[]
}) => (
	<section className='mb-12'>
		<h2 className='text-2xl font-semibold mb-6'>{category}</h2>
		<div className='grid md:grid-cols-2 gap-8'>
			{items.map((item: Resource) => (
				<ResourceCard key={item.id} resource={item} />
			))}
		</div>
	</section>
)

export default function ResourcesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-8'>
				<div className='max-w-4xl mx-auto'>
					{/* Breadcrumb */}
					<div className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
						<Link href='/' className='hover:text-primary'>
							Home
						</Link>
						<span>/</span>
						<span>Resources</span>
					</div>

					{/* Page Header */}
					<header className='text-center mb-12'>
						<h1 className='text-3xl md:text-4xl font-bold mb-4'>
							Developer Resources
						</h1>
						<p className='text-xl text-muted-foreground'>
							Templates, tools, and frameworks for building products in the
							African market
						</p>
					</header>

					{/* Category Stats */}
					<div className='flex flex-wrap justify-center gap-4 mb-12'>
						{resources.map((section) => (
							<div
								key={section.category}
								className='flex items-center gap-2 px-4 py-2 bg-muted rounded-full'>
								<span className='font-medium'>{section.category}</span>
								<Badge variant='secondary'>{section.items.length}</Badge>
							</div>
						))}
					</div>

					{/* Resource Sections */}
					<div className='space-y-12'>
						{resources.map((section) => (
							<CategorySection
								key={section.category}
								category={section.category}
								items={section.items}
							/>
						))}
					</div>

					{/* CTA Section */}
					<div className='mt-16 text-center py-12 bg-secondary/5 rounded-lg'>
						<h2 className='text-2xl font-bold mb-4'>
							Need Custom Development?
						</h2>
						<p className='text-muted-foreground mb-8'>
							Let&apos;s discuss how I can help you build and launch your
							product
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button size='lg' asChild>
								<Link href='/contact' className='flex items-center gap-2'>
									<MessageCircle className='h-5 w-5' />
									Schedule a Call
								</Link>
							</Button>
							<Button variant='outline' size='lg' asChild>
								<Link
									href='https://wa.me/254793643308'
									className='flex items-center gap-2'>
									<Code className='h-5 w-5' />
									Chat on WhatsApp
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
