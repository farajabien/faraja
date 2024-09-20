import Link from 'next/link'
import {
	ExternalLink,
	Code,
	Book,
	Hammer,
	Star,
	Database,
	CreditCard,
	Moon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { Metadata } from 'next'

// Types
type Resource = {
	title: string
	description: string
	link: string
	price: string
	action?: {
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
		label: string
	}
	features?: string[]
	techStack?: {
		name: string
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	}[]
}

type Category = {
	category: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	items: Resource[]
}

// Data
const resources: Category[] = [
	{
		category: 'Templates',
		icon: Code,
		items: [
			{
				title: 'Enhanced Portfolio Template',
				description:
					"Explore the enhanced version of the portfolio you're currently viewing! This template is designed for professionals looking to showcase their work with advanced features like integrated paywalls and dynamic content sections. Make sure to star the repo to support our work!",
				link: 'https://github.com/farajabien/enhanced-portfolio',
				price: 'Free',
				action: {
					icon: Star,
					label: 'Star on GitHub',
				},
				features: [
					'Advanced responsive design',
					'Dark and light mode support',
					'Robust paywall integration',
					'Highly customizable sections',
					'Advanced SEO features',
				],
				techStack: [
					{ name: 'Next.js', icon: Code },
					{ name: 'Tailwind CSS', icon: Code },
					{ name: 'React Query', icon: Code },
				],
			},
		],
	},
]

// Components
function CategoryBubble({
	icon: Icon,
	label,
	count,
}: {
	icon: React.ElementType
	label: string
	count: number
}) {
	return (
		<div className='flex flex-col items-center'>
			<div className='relative'>
				<div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center'>
					<Icon className='w-8 h-8 text-primary-foreground' />
				</div>
				<div className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center'>
					<span className='text-xs font-bold'>{count}</span>
				</div>
			</div>
			<span className='mt-2 text-sm font-medium'>{label}</span>
		</div>
	)
}

function ResourceCard({
	item,
	icon: Icon,
}: {
	item: Resource
	icon: React.ElementType
}) {
	return (
		<Card className='p-6 hover:shadow-lg transition-shadow'>
			<div className='flex items-center mb-4'>
				<Icon className='w-8 h-8 text-primary mr-4' />
				<h3 className='text-2xl font-semibold'>{item.title}</h3>
			</div>
			<p className='text-sm text-muted-foreground mb-4'>{item.description}</p>

			{item.features && (
				<div className='mb-4'>
					<h4 className='font-semibold mb-2'>Features:</h4>
					<ul className='list-disc list-inside'>
						{item.features.map((feature, index) => (
							<li key={index} className='text-sm'>
								{feature}
							</li>
						))}
					</ul>
				</div>
			)}

			{item.techStack && (
				<div className='mb-4'>
					<h4 className='font-semibold mb-2'>Tech Stack:</h4>
					<div className='flex flex-wrap gap-2'>
						{item.techStack.map((tech, index) => (
							<div
								key={index}
								className='flex items-center bg-secondary rounded-full px-3 py-1'>
								<tech.icon className='w-4 h-4 mr-2' />
								<span className='text-xs'>{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			)}

			<div className='flex justify-between items-center mt-4'>
				<span className='font-bold text-lg'>{item.price}</span>
				<div className='space-x-2'>
					<Button asChild variant='outline'>
						<Link href={item.link} className='inline-flex items-center'>
							View Repo <ExternalLink className='ml-2 w-4 h-4' />
						</Link>
					</Button>
					{item.action && (
						<Button asChild variant='default'>
							<Link href={item.link} className='inline-flex items-center'>
								{item.action.icon && (
									<item.action.icon className='mr-2 w-4 h-4' />
								)}
								{item.action.label}
							</Link>
						</Button>
					)}
				</div>
			</div>
		</Card>
	)
}

function CategorySection({ category }: { category: Category }) {
	return (
		<Section title={category.category} icon={category.icon}>
			<div className='grid md:grid-cols-2 gap-8'>
				{category.items.map((item) => (
					<ResourceCard key={item.title} item={item} icon={category.icon} />
				))}
			</div>
		</Section>
	)
}

export const metadata: Metadata = {
	title: 'Resources by Bienvenu Faraja - Tools & Templates',
	description:
		'Explore a curated list of resources including tools, templates, and guides designed by Bienvenu Faraja to empower developers and entrepreneurs in their digital journey.',
}

// Main component
export default function ResourcesPage() {
	return (
		<div className='min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark flex flex-col'>
			<main className='container mx-auto px-4 py-16 max-w-4xl flex-grow'>
				<h1 className='text-4xl font-bold mb-8 text-center'>Resources</h1>

				<div className='flex justify-center space-x-8 mb-12'>
					{resources.map((category) => (
						<CategoryBubble
							key={category.category}
							icon={category.icon}
							label={category.category}
							count={category.items.length}
						/>
					))}
				</div>

				{resources.map((category) => (
					<CategorySection key={category.category} category={category} />
				))}
			</main>

			<footer className='text-center py-6 text-muted-foreground bg-secondary dark:bg-secondary-dark'>
				<p className='text-sm'>
					© {new Date().getFullYear()} Bienvenu Faraja. All Rights Reserved.
				</p>
			</footer>
		</div>
	)
}
