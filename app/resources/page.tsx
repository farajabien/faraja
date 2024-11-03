import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	FileDown,
	ArrowRight,
	CheckCircle,
	Eye,
	ExternalLink,
	ExternalLink as LinkIcon,
} from 'lucide-react'
import { Metadata } from 'next'
import { Resource, ResourceCategory } from './types'

export const metadata: Metadata = {
	title: 'Free Resources for Startups | Faraja Bien',
	description:
		'Access free templates, validation frameworks, and technical guides designed specifically for East African startups and founders.',
}

const resources = [
	{
		category: 'Templates',
		items: [
			{
				id: 'pitch-deck-template',
				title: 'Startup Pitch Deck Template',
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
			},
		],
	},
	{
		category: 'Validation',
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
			},
		],
	},
]

const ResourceCard = ({ resource }: { resource: Resource }) => (
	<Card className='flex flex-col h-full'>
		<CardHeader>
			<div className='flex justify-between items-start mb-4'>
				<div>
					<h3 className='text-xl font-semibold mb-2'>{resource.title}</h3>
					<p className='text-sm text-muted-foreground'>
						{resource.description}
					</p>
				</div>
				<Badge variant='secondary'>{resource.price}</Badge>
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
						<li key={index} className='flex items-center gap-2'>
							<CheckCircle className='h-4 w-4 text-primary' />
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
						<Eye className='h-4 w-4' />
						<span>Preview</span>
						<ExternalLink className='h-4 w-4' />
					</a>
				</Button>
			)}
			<Button className='flex-1 group' asChild>
				<Link href={resource.downloadUrl}>
					<FileDown className='h-4 w-4 mr-2' />
					<span>Get Resource</span>
					<ArrowRight className='h-4 w-4 ml-2 transition-transform group-hover:translate-x-1' />
				</Link>
			</Button>
		</CardFooter>
	</Card>
)

const CategorySection = ({ category, items }: ResourceCategory) => (
	<section className='mb-12'>
		<h2 className='text-2xl font-semibold mb-6'>{category}</h2>
		<div className='grid md:grid-cols-2 gap-8'>
			{items.map((item) => (
				<ResourceCard key={item.id} resource={item} />
			))}
		</div>
	</section>
)

export default function ResourcesPage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
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
							Free Startup Resources
						</h1>
						<p className='text-xl text-muted-foreground'>
							Templates, tools, and guides to help you build better products
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
					<div className='mt-16 text-center'>
						<h2 className='text-2xl font-bold mb-4'>Need Custom Resources?</h2>
						<p className='text-muted-foreground mb-8'>
							Contact me for custom templates and frameworks tailored to your
							startup
						</p>
						<Button size='lg' asChild>
							<Link href='/contact' className='flex items-center gap-2'>
								<LinkIcon className='h-5 w-5' />
								<span>Get in Touch</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
