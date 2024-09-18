// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Github, Twitter, Mail, ExternalLink } from 'lucide-react'

export interface Project {
	title: string
	subtitle: string
	description: string
	link: string
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
export const projects: Project[] = [
	{
		title: 'BingBang',
		subtitle: 'Social gaming platform',
		description:
			'A platform where luck and friendship create unforgettable moments.',
		link: 'https://bingbang.bet',
	},
	{
		title: 'PropManage',
		subtitle: 'Property management webapp',
		description: 'Streamline property management tasks with ease.',
		link: 'https://propmanage.kwetunova.com',
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
