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

export type Package = {
	name: string
	price: string
	turnaround: string
	isPopular: boolean
	includes: string[]
	savings?: string // Optional savings field
	bestFor?: string[] // Optional bestFor field
	addOns?: AddOn[]
}

export type AddOn = {
	name: string
	price: string
	description: string
}

export type ServiceType = {
	title: string
	description: string
	packages: Package[]
	type?: string
}

type PackageType = {
	name: string
	price: string
	turnaround: string
	isPopular: boolean
	includes: string[]
	addOns?: { name: string; price: string; description: string }[]
}

export const services: ServiceType[] = [
	{
		title: 'Startup Technical Services',
		description:
			'Let me handle the technical side of things so you can focus on your business. I provide tailored tech solutions to help turn your startup ideas into reality.',
		packages: [
			{
				name: 'Startup Idea Validation Package',
				price: '15,000 KSH ($150)',
				turnaround: '24-48 hours',
				isPopular: false,
				includes: [
					'A full check of whether your startup idea is technically possible.',
					'A plan for growing your business as it scales.',
					'Recommendations on the best tools and technologies for your project.',
					'A roadmap for building your product, including budget and timeline.',
					'Landing page overview and suggested copy to capture leads.',
				],
				bestFor: [
					'Early-stage startups',
					'Entrepreneurs validating ideas',
					'Tech founders',
				],
			},
			{
				name: 'Landing Page + Prototype Strategy',
				price: '30,000 KSH ($300)',
				savings: 'Save 5,000 KSH ($50)', // Added savings
				turnaround: '3-5 business days',
				isPopular: true,
				includes: [
					'Everything in the Startup Idea Validation Package.',
					'A fully functional landing page to showcase your product.',
					'Overview section highlighting key features and benefits.',
					'Strong call-to-action for capturing inquiries or building a waitlist.',
					'Mobile-friendly design for all devices.',
					'A strategic development plan for next stages of your product.',
				],
				bestFor: [
					'Startups looking for early product validation',
					'Entrepreneurs needing a web presence',
				],
			},
			{
				name: 'Prototype Full Stack Development',
				price: 'Starting at 50,000 KSH ($500)',
				turnaround: 'Custom timeline',
				isPopular: false,
				includes: [
					'Comprehensive full stack development of your product.',
					'Landing page implementation into your web presence.',
					'Core functionality development for a real product experience.',
					'Backend integration using Supabase for effective data management.',
					'Regular progress updates and documentation for transparency.',
					'Full handoff of the developed codebase for future developers.',
				],
				bestFor: [
					'Established startups ready for product development',
					'Companies scaling web applications',
				],
			},
		],
	},
	{
		title: 'Branding & Marketing Design Services',
		type: 'branding',
		description:
			'I create professional branding and design solutions to help you build a strong and memorable brand identity.',
		packages: [
			{
				name: 'Brand Identity Package',
				price: '25,000 KSH ($250)',
				savings: 'Save 2,500 KSH ($25)',
				turnaround: '5-7 business days',
				isPopular: true,
				includes: [
					'Custom logo design that represents your brand.',
					'Business card design, ready to print.',
					'Company profile design to showcase your business.',
					'Free brand strategy consultation to align your vision.',
				],
				bestFor: [
					'Small businesses building a new brand',
					'Entrepreneurs needing visual identity',
				],
			},
			{
				name: 'Marketing Essentials Package',
				price: '15,000 KSH ($150)',
				savings: 'Save 1,000 KSH ($10)',
				turnaround: '3-5 business days',
				isPopular: false,
				includes: [
					'Design of 2-3 posters or flyers for your marketing efforts.',
					'Custom email signature design to enhance your brand presence.',
					'Social media graphics tailored for your campaigns.',
					'Limited revisions to keep the process efficient and focused.',
				],
				bestFor: [
					'Companies launching a marketing campaign',
					'Brands looking for social media designs',
				],
			},
			{
				name: 'Landing Page Design',
				price: '25,000 KSH ($250)',
				savings: 'Save 3,000 KSH ($30)',
				turnaround: '5-7 business days',
				isPopular: false,
				includes: [
					'A professionally designed landing page to capture leads effectively.',
					'Email collection setup using tools like Mailchimp.',
					'Mobile-friendly design optimized for search engines.',
					'Free domain and SSL setup for one year to ensure security.',
				],
				bestFor: [
					'Businesses looking to generate leads',
					'Startups needing a conversion-focused page',
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
