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
		title: 'Startup Technical Services',
		description:
			'Get the expert help you need to shape, build, and launch your startup idea with confidence.',
		type: 'technical',
		packages: [
			{
				name: 'Idea Check + Landing Page',
				description:
					'A complete package to check if your startup idea is doable and set up a landing page to attract customers.',
				price: '25,000 KSH',
				deliveryTime: '48 hours',
				overview: 'Includes idea check, recommended tools, and a landing page.',
				deliverables: [
					{ name: 'Idea Check Report', type: 'pdf' },
					{ name: 'Recommended Tools Guide', type: 'pdf' },
					{ name: 'Landing Page Design', type: 'design' },
				],
				details: [
					{
						subtitle: 'Idea Check',
						content:
							'An in-depth look at your startup idea to see if it can succeed. We highlight any challenges and suggest solutions.',
					},
					{
						subtitle: 'Recommended Tools',
						content:
							'A list of tools to get your idea started, including which software to use for different parts of the project.',
					},
					{
						subtitle: 'Landing Page Text',
						content:
							'Engaging text for your landing page to attract visitors and encourage them to sign up.',
					},
				],
				addOns: [
					{
						name: 'Social Media Kit',
						price: '10,000 KSH',
						description:
							'A matching social media kit to go with your landing page.',
					},
				],
			},
			{
				name: 'Prototype Development',
				description:
					'A custom development package to bring your idea to life, creating a functional prototype.',
				price: 'Starting at 50,000 KSH',
				deliveryTime: 'Custom Timeline',
				overview: 'Development of the main parts of your product.',
				isPopular: true,
				deliverables: [
					{ name: 'Prototype', type: 'code' },
					{ name: 'User Testing Feedback', type: 'pdf' },
					{ name: 'Technical Guide', type: 'pdf' },
				],
				details: [
					{
						subtitle: 'Prototype Development',
						content:
							'Creation of both the customer-facing and backend parts of your product.',
					},
					{
						subtitle: 'Feedback Process',
						content:
							'An ongoing process to get your input and improve the product based on real feedback.',
					},
					{
						subtitle: 'Technical Guide',
						content:
							'A guide on how to set up and maintain the product, covering all key steps.',
					},
				],
				addOns: [
					{
						name: 'Monthly Support',
						price: '15,000 KSH',
						description: 'Regular updates and help with any technical issues.',
					},
				],
			},
		],
	},
	{
		title: 'Design & Branding Services',
		description:
			'Professional design services to build and grow your brand across all platforms.',
		type: 'design',
		packages: [
			{
				name: 'Startup Brand Package',
				description:
					'Complete brand identity package for startups, including logo, guidelines, and social media templates.',
				price: '35,000 KSH',
				deliveryTime: '5 days',
				isPopular: true,
				overview: 'Everything you need to set up your brand.',
				deliverables: [
					{ name: 'Logo Files', type: 'design' },
					{ name: 'Brand Guide', type: 'pdf' },
					{ name: 'Social Media Templates', type: 'design' },
					{ name: 'Business Card Design', type: 'design' },
				],
				details: [
					{
						subtitle: 'Brand Identity',
						content:
							'A unique logo and design concepts that capture your brand’s personality.',
					},
					{
						subtitle: 'Brand Guide',
						content:
							'A guide on how to use your logo, colors, and fonts to keep your brand consistent.',
					},
					{
						subtitle: 'Social Media Kit',
						content:
							'Custom designs for social media, including profile pictures and post templates.',
					},
				],
			},
			{
				name: 'Digital Marketing Design Pack',
				description:
					'Ongoing design support for all your digital marketing needs.',
				price: '20,000 KSH',
				deliveryTime: '48-72 hours per request',
				overview: 'Designs for social media and digital ads.',
				deliverables: [
					{ name: 'Social Media Posts', type: 'design' },
					{ name: 'Digital Ads', type: 'design' },
					{ name: 'Email Templates', type: 'design' },
				],
				details: [
					{
						subtitle: 'Social Media Content',
						content:
							'Up to 10 custom posts per month for your social channels.',
					},
					{
						subtitle: 'Marketing Materials',
						content:
							'Custom ad designs, email headers, and promotional images.',
					},
				],
				addOns: [
					{
						name: 'Rush Delivery',
						price: '5,000 KSH',
						description: '24-hour turnaround for urgent designs.',
					},
				],
			},
		],
	},
	{
		title: 'Complete Startup Packages',
		description:
			'Everything you need to start your business, from technical setup to brand design, in one package.',
		type: 'combo',
		packages: [
			{
				name: 'Startup Launch Suite',
				description:
					'Our all-in-one startup package includes everything from tech validation to brand design at a discount.',
				price: '75,000 KSH',
				deliveryTime: '14 days',
				isPopular: true,
				savings: '15,000 KSH',
				overview:
					'Launch your startup with a strong foundation and clear brand identity.',
				bestFor: [
					'New startups launching for the first time',
					'Businesses needing a complete rebrand',
					'Founders who want both tech and design support',
				],
				deliverables: [
					{ name: 'Feasibility Report', type: 'pdf' },
					{ name: 'Custom Landing Page', type: 'code' },
					{ name: 'Hosting Setup', type: 'code' },
					{ name: 'Google Analytics Setup', type: 'code' },
					{ name: 'Logo Design', type: 'design' },
					{ name: 'Business Cards', type: 'design' },
					{ name: 'Social Media Templates', type: 'design' },
					{ name: 'Email Signature', type: 'design' },
					{ name: 'Brand Guide', type: 'pdf' },
					{ name: 'Website Guide', type: 'pdf' },
				],
				details: [
					{
						subtitle: 'Week 1: Technical Setup',
						content:
							'• Idea check & planning\n• Domain & hosting setup\n• Landing page development\n• Analytics setup\n• Payment integration (optional)',
					},
					{
						subtitle: 'Week 2: Branding',
						content:
							'• Logo design\n• Business card & letterhead\n• Social media templates\n• Email signature\n• Brand guide creation',
					},
					{
						subtitle: 'Launch Support',
						content:
							'• Website testing\n• Content upload\n• Social profile setup\n• 30-day technical support\n• Launch day support',
					},
				],
				addOns: [
					{
						name: 'Extended Support',
						price: '25,000 KSH',
						description: '3 months of technical support and updates.',
					},
					{
						name: 'SEO Setup',
						price: '15,000 KSH',
						description: 'Basic SEO setup to help with search rankings.',
					},
				],
			},
			{
				name: 'Technical Maintenance & Support',
				description:
					'Flexible, pay-as-you-go support for ongoing technical needs, ensuring your startup stays optimized and secure.',
				price: 'Varies based on scope of work',
				deliveryTime: 'As Needed',
				overview:
					'Ongoing support for bug fixes, updates, performance improvements, and new feature integration.',
				deliverables: [
					{ name: 'Bug Fixes & Updates', type: 'code' },
					{ name: 'Performance Optimization', type: 'code' },
					{ name: 'Security Patches', type: 'code' },
					{ name: 'Feature Additions', type: 'code' },
					{ name: 'Technical Consultation', type: 'consultation' },
				],
				details: [
					{
						subtitle: 'Flexible Support',
						content:
							'On-demand technical help tailored to your needs, covering everything from bug fixes to new feature rollouts.',
					},
					{
						subtitle: 'Security Patches',
						content:
							'Stay protected with regular security patches and updates to guard against vulnerabilities.',
					},
					{
						subtitle: 'Technical Consultation',
						content:
							'Consult with experts on the best tech stack, scalability strategies, and long-term development plans for your startup.',
					},
				],
				addOns: [
					{
						name: 'Priority Support',
						price: '10,000 KSH per month',
						description:
							'Faster response times and dedicated priority handling for urgent or critical technical needs.',
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
