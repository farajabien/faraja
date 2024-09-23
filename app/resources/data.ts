import { Brush, Code, Star, Triangle } from 'lucide-react'
import { Category } from './types'

export const resources: Category[] = [
	{
		category: 'Templates',
		icon: Code,
		items: [
			{
				title: 'Enhanced Portfolio Template',
				description:
					"Explore the enhanced version of the portfolio you're currently viewing! This template is designed for professionals looking to showcase their work. Make sure to star the repo to support our work!",
				link: 'https://github.com/farajabien/faraja',
				price: 'Free',
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
			},
		],
	},
]
