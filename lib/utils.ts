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
	availability?: string // Optional availability field
}

export type DeliverableType = {
	name: string
	type: 'pdf' | 'doc' | 'design' | 'code' | 'consultation' | 'multiple'
	icon?: string
	details?: string // Optional details field
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
	slug: string
	techStack?: string[] // Optional techStack field
}

export interface ServiceType {
	title: string
	description: string
	type: string
	slug: string
	packages: PackageType[]
}
export const services: ServiceType[] = [
	{
		title: 'Technical Co-Founder Services',
		slug: 'technical-co-founder-services',
		description:
			'Transform your startup vision into reality with proven technical expertise and strategic guidance.',
		type: 'technical',
		packages: [
			{
				name: 'Startup Validation Sprint',
				slug: 'startup-validation-sprint',
				description:
					'Validate your startup idea with professional research tools and get an actionable analysis report in 2 weeks',
				price: '25,000 KSH',
				deliveryTime: '2 weeks',
				overview:
					'Complete validation package including initial analysis report, custom survey creation, and research strategy',
				isPopular: true,
				deliverables: [
					{
						name: 'Initial Analysis Report',
						type: 'pdf',
						details:
							'Detailed review of your current business plan with specific areas to validate',
					},
					{
						name: 'Custom Survey Package',
						type: 'multiple',
						details:
							'Google Form (digital) and PDF (printable) versions with target questions',
					},
					{
						name: 'Research Strategy Guide',
						type: 'pdf',
						details:
							'Distribution plan, outreach templates, and data collection guide',
					},
					{
						name: 'Competitor Analysis',
						type: 'pdf',
						details: 'Review compilation and feature comparison',
					},
				],
				details: [
					{
						subtitle: 'Week 1: Analysis & Setup',
						content:
							'• Initial business plan analysis\n' +
							'• Custom survey design (Google Form + PDF)\n' +
							'• Competitor research framework\n' +
							'• Distribution strategy planning',
					},
					{
						subtitle: 'Week 2: Implementation Support',
						content:
							'• Data collection methodology\n' +
							'• Response analysis templates\n' +
							'• Social media outreach templates\n' +
							'• Recommendations for next steps',
					},
				],
				addOns: [
					{
						name: 'Social Media Promotion',
						price: '5,000 KSH',
						description: 'Recommended ad budget for survey distribution',
					},
				],
				bestFor: [
					'Startups validating their idea',
					'Founders doing market research',
					'Teams needing data-driven decisions',
				],
			},
			{
				name: 'MVP Development Sprint',
				slug: 'mvp-development-sprint',
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
				techStack: [
					'Next.js & React',
					'Node.js backend',
					'PostgreSQL database',
					'AWS/Vercel deployment',
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
						availability: 'Up to 20 hours/month of technical consultation', // Optional field
					},
				],
			},
		],
	},
	{
		title: 'Growth & Scale Services',
		slug: 'growth-scale-services',
		description:
			'Technical solutions to help your startup grow and scale efficiently',
		type: 'growth',
		packages: [
			{
				name: 'Technical Growth Package',
				slug: 'technical-growth-package',
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
				slug: 'startup-cto-support',
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
