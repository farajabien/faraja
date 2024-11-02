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
	return match ? parseInt(match[0].replace(/,/g, ''), 10) : 0
}

// Get file extension based on type
export const getFileExtension = (type: DeliverableType['type']): string => {
	switch (type) {
		case 'pdf':
			return '.pdf'
		case 'doc':
			return '.doc'
		case 'design':
			return '.fig'
		case 'code':
			return '.zip'
		case 'consultation':
			return '.meet'
		default:
			return ''
	}
}

export type AddOn = {
	name: string
	price: string
	description: string
}

export type DeliverableType = {
	name: string
	type: 'pdf' | 'doc' | 'design' | 'code' | 'consultation'
	icon?: string
}

export type PackageDetailType = {
	subtitle: string
	content: string
}

export type PackageType = {
	name: string
	description?: string
	price: string
	turnaround?: string // Optional for simplicity
	isPopular?: boolean // Optional for simplicity
	savings?: string // Optional savings field
	bestFor?: string[] // Optional bestFor field
	overview: string
	deliverables: DeliverableType[]
	deliveryTime: string
	addOns?: AddOn[] // Optional addOns field
	details: PackageDetailType[] // New field for package details
}

export type ServiceType = {
	title: string
	description: string
	packages: PackageType[]
	type?: string
}
export const services: ServiceType[] = [
	{
		title: 'Technical Co-Founder Services',
		description:
			'Transform your startup vision into reality with proven technical expertise and strategic guidance.',
		type: 'technical',
		packages: [
			{
				name: 'Startup Validation Sprint',
				description:
					'Validate your idea and get market-ready in 2 weeks with our proven framework',
				price: '25,000 KSH',
				deliveryTime: '2 weeks',
				overview:
					'Complete validation package with landing page and initial market testing',
				isPopular: true,
				deliverables: [
					{ name: 'Market Validation Report', type: 'pdf' },
					{ name: 'Tech Stack Analysis', type: 'pdf' },
					{ name: 'Landing Page', type: 'code' },
					{ name: 'Analytics Setup', type: 'code' },
				],
				details: [
					{
						subtitle: 'Week 1: Strategy & Planning',
						content:
							'• Market research & competitor analysis\n• Tech stack recommendations\n• Feature prioritization\n• Cost & timeline estimations',
					},
					{
						subtitle: 'Week 2: Implementation',
						content:
							'• Landing page development\n• Analytics integration\n• Lead capture setup\n• A/B testing framework',
					},
				],
				addOns: [
					{
						name: 'Social Media Kit',
						price: '15,000 KSH',
						description: 'Custom social assets and content strategy',
					},
				],
			},
			{
				name: 'MVP Development Sprint',
				description:
					'Get your first working product in front of users within 4 weeks',
				price: 'Starting at 150,000 KSH',
				deliveryTime: '4 weeks',
				isPopular: true,
				overview: 'End-to-end MVP development with user testing and iterations',
				bestFor: [
					'Founders ready to build their first product',
					'Startups seeking product-market fit',
					'Companies needing technical validation',
				],
				deliverables: [
					{ name: 'Working MVP', type: 'code' },
					{ name: 'Technical Documentation', type: 'pdf' },
					{ name: 'User Testing Results', type: 'pdf' },
					{ name: 'Deployment Guide', type: 'pdf' },
				],
				details: [
					{
						subtitle: 'Technical Architecture',
						content:
							'• System design & architecture\n• Database schema design\n• API documentation\n• Security implementation',
					},
					{
						subtitle: 'Development Process',
						content:
							'• Agile development methodology\n• Weekly progress updates\n• Regular demo sessions\n• Iterative improvements',
					},
					{
						subtitle: 'Launch Preparation',
						content:
							'• Deployment setup\n• Performance optimization\n• Security hardening\n• Analytics integration',
					},
				],
				addOns: [
					{
						name: 'Extended Support',
						price: '30,000 KSH/month',
						description: 'Ongoing technical support and maintenance',
					},
				],
			},
		],
	},
	{
		title: 'Growth & Scale Services',
		description:
			'Technical solutions to help your startup grow and scale efficiently',
		type: 'growth',
		packages: [
			{
				name: 'Technical Growth Package',
				description:
					'Optimize your product for scale and implement growth features',
				price: '100,000 KSH',
				deliveryTime: '3 weeks',
				overview: 'Performance optimization and growth feature implementation',
				deliverables: [
					{ name: 'Performance Audit', type: 'pdf' },
					{ name: 'Optimization Implementation', type: 'code' },
					{ name: 'Growth Features', type: 'code' },
					{ name: 'Analytics Dashboard', type: 'code' },
				],
				details: [
					{
						subtitle: 'Performance Optimization',
						content:
							'• Load time optimization\n• Database optimization\n• Caching implementation\n• CDN setup',
					},
					{
						subtitle: 'Growth Features',
						content:
							'• User onboarding flow\n• Referral system\n• Email integration\n• Analytics dashboard',
					},
				],
				addOns: [
					{
						name: 'Custom Analytics',
						price: '25,000 KSH',
						description: 'Custom analytics setup and reporting',
					},
				],
			},
			{
				name: 'Startup CTO Support',
				description: 'Ongoing technical leadership and development support',
				price: '75,000 KSH/month',
				deliveryTime: 'Monthly',
				overview: 'Technical strategy and hands-on development support',
				deliverables: [
					{ name: 'Technical Strategy', type: 'pdf' },
					{ name: 'Code Reviews', type: 'code' },
					{ name: 'Architecture Review', type: 'consultation' },
					{ name: 'Sprint Planning', type: 'consultation' },
				],
				details: [
					{
						subtitle: 'Technical Leadership',
						content:
							'• Architecture planning\n• Tech stack decisions\n• Team guidance\n• Code review',
					},
					{
						subtitle: 'Development Support',
						content:
							'• Feature development\n• Bug fixes\n• Performance optimization\n• Security updates',
					},
				],
				addOns: [
					{
						name: 'Emergency Support',
						price: '15,000 KSH',
						description: '24/7 emergency technical support',
					},
				],
			},
		],
	},
]

// Function to extract packages
const extractPackages = (services: ServiceType[]): PackageType[] => {
	return services.flatMap((service) => service.packages)
}

// Usage
export const allPackages = extractPackages(services)
