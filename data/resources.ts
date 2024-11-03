// lib/resources.ts
import {
	Brush,
	Code,
	Star,
	Triangle,
	FileDown,
	FileCheck,
	Book,
	Coins,
} from 'lucide-react'

export interface ResourceItem {
	title: string
	description: string
	link: string
	price: string
	action: {
		icon: any
		label: string
	}
	features: string[]
	techStack?: { name: string; icon: any }[]
	category: 'template' | 'guide' | 'tool'
	tags?: string[]
}

export interface Category {
	category: string
	icon: any
	items: ResourceItem[]
}

export const resources: Category[] = [
	{
		category: 'Templates',
		icon: Code,
		items: [
			{
				title: 'Enhanced Portfolio Template',
				description:
					'Modern, responsive portfolio template built with Next.js and Tailwind CSS. Perfect for developers and technical founders.',
				link: 'https://github.com/farajabien/faraja',
				price: 'Free',
				category: 'template',
				action: {
					icon: Star,
					label: 'Star on GitHub',
				},
				features: [
					'Advanced responsive design',
					'Dark and light mode support',
					'Highly customizable sections',
					'Advanced SEO features',
				],
				techStack: [
					{ name: 'Next.js', icon: Code },
					{ name: 'Tailwind CSS', icon: Code },
					{ name: 'Shadcn UI', icon: Brush },
					{ name: 'Vercel', icon: Triangle },
				],
				tags: ['portfolio', 'next.js', 'template'],
			},
			{
				title: 'Startup Pitch Deck Template',
				description:
					"Professional pitch deck template based on 54 Collective's proven framework for East African startups.",
				link: '/resources/pitch-deck',
				price: 'Free',
				category: 'template',
				action: {
					icon: FileDown,
					label: 'Download Template',
				},
				features: [
					'12 essential slides',
					'Market sizing guide',
					'Financial projections',
					'Investment ask structure',
				],
				tags: ['pitch deck', 'startup', 'fundraising'],
			},
		],
	},
	{
		category: 'Validation Tools',
		icon: FileCheck,
		items: [
			{
				title: 'Startup Validation Framework',
				description:
					'Step-by-step framework to validate your startup idea before building. Based on real experience with East African startups.',
				link: '/resources/validation-framework',
				price: 'Free',
				category: 'tool',
				action: {
					icon: Book,
					label: 'Access Framework',
				},
				features: [
					'Problem validation guide',
					'Market size calculator',
					'Customer interview templates',
					'MVP scope planner',
				],
				tags: ['validation', 'startup', 'framework'],
			},
		],
	},
	{
		category: 'Technical Guides',
		icon: Book,
		items: [
			{
				title: 'Local Payment Integration Guide',
				description:
					'Comprehensive guide for integrating M-PESA and other local payment solutions in East African startups.',
				link: '/resources/payment-guide',
				price: 'Free',
				category: 'guide',
				action: {
					icon: Coins,
					label: 'View Guide',
				},
				features: [
					'M-PESA integration steps',
					'Paystack implementation',
					'Security best practices',
					'Code examples',
				],
				techStack: [
					{ name: 'Node.js', icon: Code },
					{ name: 'Next.js', icon: Code },
				],
				tags: ['payments', 'integration', 'fintech'],
			},
		],
	},
]
