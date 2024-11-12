// types/resources.ts
export interface Resource {
	id: string
	title: string
	description: string
	price: string
	features: string[]
	tags: string[]
	previewUrl?: string
	detailsUrl?: string
	downloadUrl?: string
	isPremium: boolean
}

export interface ResourceCategory {
	category: string
	items: Resource[]
}

// data/resources.ts
export const resources: ResourceCategory[] = [
	{
		category: 'Free Templates',
		items: [
			{
				id: 'pitch-deck',
				title: 'Startup Pitch Deck',
				description:
					'Professional pitch deck template based on proven frameworks for East African startups.',
				price: 'Free',
				features: [
					'12 essential slides',
					'Market sizing guide',
					'Financial projections',
					'Investment ask structure',
				],
				tags: ['pitch deck', 'startup', 'fundraising'],
				downloadUrl: '/resources/pitch-deck',
				isPremium: false,
			},
		],
	},
	{
		category: 'Guides & Frameworks',
		items: [
			{
				id: 'validation-framework',
				title: 'Startup Validation Framework',
				description:
					'Step-by-step framework to validate your startup idea before building.',
				price: 'Free',
				features: [
					'Problem validation guide',
					'Solution testing framework',
					'Market sizing templates',
					'Assumption testing tools',
				],
				tags: ['validation', 'startup', 'framework'],
				downloadUrl:
					'https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5',
				isPremium: false,
			},
		],
	},
]
