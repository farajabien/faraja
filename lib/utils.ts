// lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'

// CSS Class Helper
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// Project Interface
export interface Project {
	title: string
	subtitle: string
	description: string
	link?: string // Optional link
	technologies: string[] // Array of tech stack used in the project
}

// SocialLink Interface
export interface SocialLinkData {
	href: string
	icon: React.ComponentType<{ className?: string }>
	label: string
}

// Tech Stack Interface
export interface TechStackItem {
	name: string
}

// Achievement Interface
export interface Achievement {
	title: string
	description: string
	link: string
}

// Sample Projects

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
export const achievements: Achievement[] = [
	{
		title: 'Certified Digital Innovator',
		description:
			'Awarded to Bienvenu Faraja for successfully completing the Entrepreneur Academy Explore Course. Gained valuable knowledge in business modeling, customer research, and entrepreneurial experimentation. Explore Course Cohort 4, Certificate ID: jk683ezjjm.',
		link: 'https://54collective.thinkific.com/certificates/jk683ezjjm',
	},
	// Add more achievements as needed
]


export function getPriceInKSH(priceString: string): number {
	// Extract the numeric value from the price string
	const match = priceString.match(/(\d{1,3}(,\d{3})*|\d+)(?=\s*KSH)/)
	// Return the numeric value as a number, or null if not found
	return match ? parseInt(match[0].replace(/,/g, ''), 10) : 0;
}