// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'

export interface Project {
	title: string
	subtitle: string
	description: string
	link?: string
}

export interface SocialLinkData {
	href: string
	icon: React.ComponentType<{ className?: string }>
	label: string
}

export interface TechStackItem {
	name: string
}

// CSS Class Helper
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Sample Projects
// Sample Projects
export const projects: Project[] = [
	{
		title: 'BingBang',
		subtitle: 'Social gaming platform',
		description:
			'An innovative online betting platform with secure transactions and multiple payment gateways.',
		link: 'https://bingbang.bet',
	},
	{
		title: 'PropManage',
		subtitle: 'Property management webapp',
		description:
			'Scalable platform for efficient management of multiple properties, integrated with Supabase and Paystack.',
		link: 'https://propmanage-farajabiens-projects.vercel.app',
	},
	{
		title: 'ESG Score Visualization',
		subtitle: 'Frontend development at Minklist Digital',
		description:
			'Implemented user-friendly charts and graphs for complex ESG data using Next.js and React for in-house.com project.',
		link: 'https://in-house.com',
	},
	{
		title: 'Linha Verde Project',
		subtitle: 'World Food Programme',
		description:
			'Developed custom project management tools, improving operational efficiency for WFP. Internal tool, not publicly accessible.',
	},
]
// Kwetunova Web Agency Projects
export const kwetunovaProjects: Project[] = [
	{
		title: 'Academic Now',
		subtitle: 'Educational platform',
		description:
			'Guided and mentored intern Fathi Hassan in building this educational platform. Provided project planning, code review, and development oversight.',
		link: 'https://academic-now.vercel.app/',
	},
	{
		title: 'SugarDaddy',
		subtitle: 'Sugar cane juice parlour in Nairobi',
		description:
			'Supervised intern Fathi Hassan in developing a website for this local Nairobi business. Offered guidance on design and implementation.',
		link: '#', // Replace with actual link if available
	},
	{
		title: 'VR Space',
		subtitle: 'Virtual Reality Solutions',
		description:
			'Led development of the VR Space website, offering immersive VR experiences for industries like real estate and education. Guided the team, fixed critical bugs, and optimized SEO, achieving #1 Google ranking for "VR gaming Nairobi".',
		link: 'http://vrspace.co.ke/',
	},
	{
		title: 'Kwetunova',
		subtitle: 'Web agency website',
		description: 'Official website for Kwetunova web agency.',
		link: 'https://kwetunova.com',
	},
]

// Technology Stack
export const techStack: TechStackItem[] = [
	{ name: 'Next.js' },
	{ name: 'Supabase' },
	{ name: 'Tailwind CSS' },
	{ name: 'shadcn/ui' },
	{ name: 'Resend' },
	{ name: 'PayStack' },
	{ name: 'Vercel' },
]

// Social Links
export const socialLinks: SocialLinkData[] = [
	{
		href: 'https://github.com/farajabien',
		icon: Github,
		label: 'GitHub',
	},
	{
		href: 'https://twitter.com/farajabien',
		icon: Twitter,
		label: 'Twitter',
	},
	{
		href: 'mailto:farajabien@gmail.com',
		icon: Mail,
		label: 'Email',
	},
	{
		href: 'https://www.linkedin.com/in/bienvenufaraja/',
		icon: ExternalLink,
		label: 'LinkedIn',
	},
]
