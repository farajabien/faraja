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
	type: 'pdf' | 'doc' | 'design' | 'code'
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
			'Get the technical expertise you need to validate, build, and launch your startup idea.',
		packages: [
			{
				name: 'Idea Validation + Landing Page',
				description:
					'Comprehensive package including a technical feasibility check for your startup idea, recommended tech stack, and custom landing page design to effectively capture leads and promote your business.',
				price: '25,000 KSH',
				deliveryTime: '5-7 days',
				overview:
					'Includes feasibility assessment, tech stack recommendations, and landing page design.',
				deliverables: [
					{ name: 'Technical Assessment', type: 'pdf' },
					{ name: 'Tech Stack Guide', type: 'pdf' },
					{ name: 'Landing Page Design', type: 'design' },
				],
				details: [
					{
						subtitle: 'Technical Feasibility Assessment',
						content:
							'An in-depth analysis of your startup idea to determine its viability in the current market. We assess technical requirements, identify potential challenges, and provide tailored solutions.',
					},
					{
						subtitle: 'Recommended Tech Stack',
						content:
							'We suggest the best technologies and tools suited for your project, including frontend and backend frameworks, databases, and third-party services that align with your business goals.',
					},
					{
						subtitle: 'Landing Page Copy',
						content:
							'Craft compelling copy for your landing page designed to convert visitors into leads. We focus on clear messaging, engaging headlines, and persuasive calls-to-action to maximize lead generation.',
					},
				],
			},
			{
				name: 'Prototype Full Stack Development',
				description:
					'Custom development package tailored to bring your prototype to life, including frontend and backend integration. We ensure a seamless user experience and robust performance.',
				price: 'Starting at 50,000 KSH', // Updated pricing
				deliveryTime: 'Custom Timeline',
				overview: 'Development of both frontend and backend components.',
				deliverables: [
					{ name: 'Prototype Development', type: 'code' },
					{ name: 'User Testing Report', type: 'pdf' },
				],
				details: [
					{
						subtitle: 'Full Stack Development',
						content:
							'Development of both frontend and backend components to create a functional prototype. We use modern frameworks and best practices to ensure scalability and maintainability.',
					},
					{
						subtitle: 'Iterative Feedback Loop',
						content:
							'We implement an iterative process to gather feedback and refine the prototype, ensuring that the final product meets your expectations and user needs.',
					},
				],
			},
		],
	},
	{
		title: 'Additional Services',
		description:
			'Expert technical strategy and development services to help your business thrive.',
		packages: [
			{
				name: 'Logo Design',
				price: '10,000 KSH',
				deliveryTime: '5-7 days',
				overview:
					'Professional logo design to create a unique identity for your brand.',
				deliverables: [{ name: 'Logo Design File', type: 'design' }],
				details: [
					{
						subtitle: 'Brand Identity',
						content:
							'Create a unique and recognizable brand identity for your business.',
					},
				],
			},
			{
				name: 'Landing Page Design',
				price: '15,000 KSH',
				deliveryTime: '5-7 days',
				overview:
					'Custom landing page design to effectively capture leads and promote your business.',
				deliverables: [{ name: 'Landing Page Design', type: 'design' }],
				details: [
					{
						subtitle: 'Responsive Design',
						content:
							'A landing page optimized for all devices to maximize conversions.',
					},
				],
			},
			{
				name: 'Landing Page + Idea Validation',
				price: '25,000 KSH',
				deliveryTime: '5-7 days',
				overview:
					'Comprehensive package including landing page design and technical feasibility check for your startup idea.',
				deliverables: [
					{ name: 'Landing Page Design', type: 'design' },
					{ name: 'Technical Assessment', type: 'pdf' },
				],
				details: [
					{
						subtitle: 'Combined Offering',
						content:
							'Get both a professionally designed landing page and a detailed technical assessment for your startup idea.',
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
