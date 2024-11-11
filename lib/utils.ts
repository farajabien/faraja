// lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
	Github,
	Twitter,
	Mail,
	ExternalLink,
	Code,
	Zap,
	CreditCard,
	Shield,
} from 'lucide-react'

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
	price: string
	packages: PackageType[]
	features?: string[]
	cta: string // Call to action text
	highlight?: boolean // Optional highlight field
	href: string // Add href field
}
export const templateFeatures = [
	{
		category: 'Authentication & Users',
		features: [
			'Email & social login authentication',
			'Role-based access control',
			'Team management',
			'User profile management',
		],
	},
	{
		category: 'Subscription & Payments',
		features: [
			'Paystack integration',
			'Multiple subscription plans',
			'Usage-based billing',
			'Payment history',
			'Invoicing',
			'Multi-currency support',
		],
	},
	{
		category: 'Developer Experience',
		features: [
			'TypeScript for type safety',
			'API documentation',
			'Database migrations',
			'Environment management',
			'Pre-configured testing setup',
		],
	},
	{
		category: 'UI/UX',
		features: [
			'Responsive dashboard',
			'Dark/light mode support',
			'Loading states',
			'Error handling',
			'Toast notifications',
		],
	},
]

// Using the services data for pricing
export const services: ServiceType[] = [
	{
		title: 'Basic Template License',
		price: '45,000 KSH',
		description:
			'Ideal for developers looking to quickly launch a SaaS platform',
		features: [
			'Full source code',
			'Technical documentation',
			'Video walkthrough',
			'30 days email support',
		],
		cta: 'Get Started',
		highlight: true,
		href: 'https://github.com/farajabien/next-saas-starter',
		type: 'basic',
		slug: 'basic-template-license',
		packages: [
			{
				name: 'Basic Package',
				price: '45,000 KSH',
				overview: 'Basic package overview',
				deliverables: [
					{ name: 'Source Code', type: 'code' },
					{ name: 'Documentation', type: 'pdf' },
				],
				deliveryTime: '30 days',
				details: [
					{ subtitle: 'Source Code', content: 'Full source code' },
					{ subtitle: 'Documentation', content: 'Technical documentation' },
				],
				slug: 'basic-package',
			},
		],
	},
	{
		title: 'Template + Implementation',
		price: '150,000 KSH',
		description: 'Template with custom implementation and training',
		features: [
			'Everything in Basic License',
			'Custom modifications',
			'Deployment setup',
			'Team training',
		],
		cta: 'Contact Us',
		highlight: false,
		href: 'https://wa.me/254793643308',
		type: 'implementation',
		slug: 'template-implementation',
		packages: [
			{
				name: 'Implementation Package',
				price: '150,000 KSH',
				overview: 'Implementation package overview',
				deliverables: [
					{ name: 'Custom Modifications', type: 'code' },
					{ name: 'Deployment Setup', type: 'consultation' },
				],
				deliveryTime: '60 days',
				details: [
					{ subtitle: 'Custom Modifications', content: 'Custom modifications' },
					{ subtitle: 'Deployment Setup', content: 'Deployment setup' },
				],
				slug: 'implementation-package',
			},
		],
	},
	{
		title: 'Custom Development',
		price: '75,000 KSH',
		description: 'Add custom features to your SaaS application',
		features: [
			'New functionality development',
			'Third-party integrations',
			'Performance optimization',
			'Custom features',
		],
		cta: 'Learn More',
		highlight: false,
		href: 'https://wa.me/254793643308',
		type: 'custom',
		slug: 'custom-development',
		packages: [
			{
				name: 'Custom Package',
				price: '75,000 KSH',
				overview: 'Custom package overview',
				deliverables: [
					{ name: 'New Functionality', type: 'code' },
					{ name: 'Third-party Integrations', type: 'code' },
				],
				deliveryTime: '45 days',
				details: [
					{
						subtitle: 'New Functionality',
						content: 'New functionality development',
					},
					{
						subtitle: 'Third-party Integrations',
						content: 'Third-party integrations',
					},
				],
				slug: 'custom-package',
			},
		],
	},
]

export const valueProps = [
	{
		title: 'Built for Developers',
		description:
			'Clean, maintainable code using modern technologies, ready to be customized for your SaaS needs.',
		icon: Code,
	},
	{
		title: 'Speed Up Development',
		description:
			'Start with a working SaaS platform and avoid the hassle of building from scratch.',
		icon: Zap,
	},
	{
		title: 'African Market Focus',
		description:
			'With Paystack integration and multi-currency support, our templates are designed for startups targeting the African market.',
		icon: CreditCard,
	},
	{
		title: 'Expert Support',
		description:
			'Ongoing support and customization services ensure your SaaS platform evolves as you grow.',
		icon: Shield,
	},
]

// Function to extract all packages
export const extractPackages = (services: ServiceType[]): PackageType[] => {
	return services.flatMap((service) => service.packages)
}

// Export all packages
export const allPackages = extractPackages(services)
