// types/portfolio.ts
export interface Experience {
	title: string
	company: string
	location: string
	period: string
	highlights: string[]
	technologies?: string[]
	metrics?: {
		label: string
		value: string
	}[]
}

// lib/portfolio-data.ts
export const portfolioData = {
	personal: {
		name: 'Bienvenu Mwenzagu Faraja',
		title: 'Technical Co-Founder & Full Stack Developer',
		location: 'Nairobi, Kenya',
		contact: {
			email: 'faraja.bien@gmail.com',
			phone: '+254 793 643 308',
		},
	},
	expertise: [
		{
			area: 'Technical Leadership',
			points: [
				'End-to-end product development',
				'MVP strategy and execution',
				'Technical architecture design',
				'Local fintech integration (M-PESA, Paystack)',
			],
		},
		{
			area: 'Development',
			points: [
				'Full-stack web applications',
				'High-performance systems',
				'API integrations',
				'User experience design',
			],
		},
	],
	experience: [
		{
			title: 'Founder & Technical Lead',
			company: 'RentFlow',
			location: 'Nairobi',
			period: 'August 2023 - Present',
			highlights: [
				'Built property management platform serving 20+ properties',
				'Integrated M-PESA & Paystack processing 500K+ KES monthly',
				'Reduced late payments by 25% through automation',
				'Improved collection rate from 70% to 95%',
			],
			technologies: ['Next.js', 'Supabase', 'WhatsApp API', 'Paystack'],
			metrics: [
				{ label: 'Properties Served', value: '20+' },
				{ label: 'Collection Rate', value: '95%' },
				{ label: 'Monthly Transactions', value: '500K+ KES' },
			],
		},
		{
			title: 'Solo Developer',
			company: 'BingBang.bet',
			location: 'Nairobi',
			period: 'January 2024 - Present',
			highlights: [
				'Developed betting platform with Random.org integration',
				'Built real-time transaction system handling 1000+ daily bets',
				'Implemented secure wallet management system',
				'Created comprehensive admin dashboard',
			],
			technologies: ['Next.js', 'Supabase', 'Random.org API', 'Paystack'],
			metrics: [
				{ label: 'Daily Bets', value: '1000+' },
				{ label: 'Uptime', value: '99.9%' },
				{ label: 'User Growth', value: '40% MoM' },
			],
		},
		{
			title: 'Frontend Developer',
			company: 'Minklist Digital',
			location: 'Winooski',
			period: 'June 2022 – December 2023',
			highlights: [
				'Built ESG score visualization features',
				'Optimized frontend performance',
				'Integrated real-time data updates',
			],
			technologies: ['React', 'Next.js', 'D3.js'],
		},
		{
			title: 'Fullstack Engineer',
			company: 'World Food Programme (via Robobo Inc)',
			location: 'Maputo',
			period: 'August 2022 - January 2023',
			highlights: [
				'Developed project management tools',
				'Reduced manual workload by 30%',
				'Led agile development process',
			],
			technologies: ['Node.js', 'NestJS', 'PostgreSQL'],
		},
	],
	skills: {
		frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
		backend: ['Node.js', 'NestJS', 'RESTful APIs', 'GraphQL'],
		database: ['PostgreSQL', 'MongoDB', 'Supabase'],
		infrastructure: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
		testing: ['Jest', 'Cypress', 'Unit Testing', 'E2E Testing'],
		practices: ['Agile', 'Scrum', 'Git', 'Code Review'],
	},
	education: {
		degree: 'Bachelor of Science in Information Systems Technology',
		institution: 'United States International University – Africa',
		graduation: 'September 2023',
	},
}
