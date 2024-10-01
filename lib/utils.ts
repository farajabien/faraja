// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'

export interface Project {
	title: string
	subtitle: string
	description: string
	link?: string
	technologies: string[] // Add this line
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
			'Social gaming platform that connects gamers worldwide. Integrated with Random.ORG for fair game results and Supabase for user authentication and data storage.',
		link: 'https://bingbang.bet',
		technologies: ['NextJs', 'Random.ORG', 'Supabase'],
	},
	{
		title: 'PropManage',
		subtitle: 'Property management webapp',
		description:
			'Scalable platform for efficient management of multiple properties, integrated with Supabase and Paystack, designed to streamline operations and enhance user engagement.',
		link: 'https://propmanage-farajabiens-projects.vercel.app',
		technologies: ['React', 'Supabase', 'Paystack'],
	},
	{
		title: 'ESG Score Visualization',
		subtitle: 'Frontend development at Minklist Digital',
		description:
			'Implemented user-friendly charts and graphs for complex ESG data using Next.js and React, enhancing data visualization for better decision-making in sustainability practices.',
		link: 'https://in-house.com',
		technologies: ['Next.js', 'React'],
	},
	{
		title: 'Linha Verde Project',
		subtitle: 'World Food Programme',
		description:
			'Developed custom project management tools to improve operational efficiency for the World Food Programme. This internal tool is not publicly accessible but is crucial for mission-critical operations.',
		link: '', // No public link available
		technologies: ['React', 'Node.js'], // Assuming technologies based on typical project needs
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
		technologies: ['React', 'Firebase', 'Tailwind CSS'],
	},
	{
		title: 'SugarDaddy',
		subtitle: 'Sugar cane juice parlour in Nairobi',
		description:
			'Supervised intern Fathi Hassan in developing a website for this local Nairobi business. Offered guidance on design and implementation.',
		link: '#', // Replace with actual link if available
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'VR Space',
		subtitle: 'Virtual Reality Solutions',
		description:
			'Led development of the VR Space website, offering immersive VR experiences for industries like real estate and education. Guided the team, fixed critical bugs, and optimized SEO, achieving #1 Google ranking for "VR gaming Nairobi".',
		link: 'http://vrspace.co.ke/',
		technologies: ['Vue.js', 'CSS', 'JavaScript'],
	},
	{
		title: 'Kwetunova',
		subtitle: 'Web agency website',
		description: 'Official website for Kwetunova web agency.',
		link: 'https://kwetunova-3.vercel.app',
		technologies: ['Next.js', 'Tailwind CSS', 'Shadcn/ui'],
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

// Achievements
export interface Achievement {
	title: string
	description: string
	link: string
}

export const achievements: Achievement[] = [
	{
		title: 'Certified Digital Innovator',
		description:
			'This certificate is awarded to Bienvenu Faraja for successfully participating in the Entrepreneur Academy Explore Course. Gained valuable knowledge in business modeling, customer research, and entrepreneurial experimentation. Explore Course Cohort 4, Certificate ID: jk683ezjjm.',
		link: 'https://54collective.thinkific.com/certificates/jk683ezjjm',
	},
	// Add more achievements as needed
]
