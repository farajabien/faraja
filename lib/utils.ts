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
	overview: string
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
	overview: string
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
				overview:
					'Kickstart your startup journey with a thorough technical validation of your idea. This package ensures that your concept is not only viable but also equipped with the right technological foundations.',
				includes: [
					'Technical Feasibility Check: A comprehensive assessment to determine if your startup idea can be technically executed.',
					'Tool & Technology Recommendations: Expert suggestions on the best tools and technologies tailored for your project’s needs.',
					'Product Roadmap: A strategic roadmap that outlines key phases for building your product, including budget estimates and timelines.',
					'Landing Page Overview: A detailed overview of a landing page design, complete with suggested copy to effectively capture leads.',
				],
				bestFor: [
					'Early-stage startups',
					'Entrepreneurs validating tech ideas',
					'Tech founders aiming for a solid foundation',
				],
			},
			{
				name: 'Landing Page + Prototype Strategy',
				price: '30,000 KSH ($300)',
				savings: 'Save 5,000 KSH ($50)',
				turnaround: '3-5 business days',
				isPopular: true,
				overview:
					'Ideal for startups looking to establish a digital presence, this package combines technical validation with a functional landing page and prototype strategy.',
				includes: [
					'Complete Startup Idea Validation Package: All features from the initial package.',
					'Functional Landing Page: A fully developed landing page showcasing your product with an attractive, mobile-friendly design.',
					'Feature Highlights: An overview section that clearly articulates key features and benefits.',
					'Strategic Call-to-Action: Effective call-to-action designed to capture inquiries and build an early user waitlist.',
					'Next-Stage Development Plan: A tailored strategic plan for further product development based on feedback and testing.',
				],
				bestFor: [
					'Startups seeking early product validation',
					'Entrepreneurs needing an online presence',
				],
			},
			{
				name: 'Prototype Full Stack Development',
				price: 'Starting at 50,000 KSH ($500)',
				turnaround: 'Custom timeline',
				isPopular: false,
				overview:
					'This comprehensive package offers full stack development tailored for established startups ready to turn their validated ideas into a real product. We leverage cutting-edge technologies to deliver a functional solution.',
				includes: [
					'Full Stack Development: Comprehensive development covering both front-end and back-end needs for your product.',
					'Landing Page Integration: Seamless integration of your landing page into your overall web presence.',
					'Core Functionality Development: Building essential features to provide users with a real product experience.',
					'Backend Integration with Supabase: Efficient data management through backend integration using Supabase.',
					'Transparent Communication: Regular updates and documentation throughout the development process.',
					'Codebase Handoff: Complete handoff of the developed codebase for your future developers to continue the project.',
				],
				bestFor: [
					'Established startups ready for product development',
					'Companies looking to scale web applications',
				],
			},
		],
	},
	{
		title: 'Branding & Marketing Design Services',
		type: 'branding',
		description:
			'Transform your business with professional branding and design solutions that build a strong and memorable identity, enhancing customer engagement and driving growth.',
		packages: [
			{
				name: 'Brand Identity Package',
				price: '25,000 KSH ($250)',
				savings: 'Save 2,500 KSH ($25)',
				turnaround: '5-7 business days',
				isPopular: true,
				overview:
					'Craft a unique brand identity that resonates with your target audience.',
				includes: [
					'Custom logo design reflecting your brand values.',
					'Business card design, ready for printing.',
					'Professional company profile to effectively showcase your business.',
					'Free brand strategy consultation to ensure alignment with your vision.',
				],
				bestFor: [
					'Small businesses launching a new brand',
					'Entrepreneurs establishing a visual identity',
				],
			},
			{
				name: 'Marketing Essentials Package',
				price: '15,000 KSH ($150)',
				savings: 'Save 1,000 KSH ($10)',
				turnaround: '3-5 business days',
				isPopular: false,
				overview:
					'Equip your marketing efforts with essential design elements that attract and engage customers.',
				includes: [
					'Design of 2-3 promotional posters or flyers.',
					'Custom email signature design for enhanced brand presence.',
					'Social media graphics tailored for your campaigns.',
					'Limited revisions to streamline the design process.',
				],
				bestFor: [
					'Companies launching marketing campaigns',
					'Brands enhancing their social media presence',
				],
			},
			{
				name: 'Landing Page Design',
				price: '25,000 KSH ($250)',
				savings: 'Save 3,000 KSH ($30)',
				turnaround: '5-7 business days',
				isPopular: false,
				overview:
					'Create a high-converting landing page designed to capture leads and grow your business.',
				includes: [
					'Professionally designed landing page optimized for lead generation.',
					'Email collection setup using platforms like Mailchimp.',
					'Mobile-friendly design optimized for search engines.',
					'Free domain and SSL setup for one year to ensure security and trust.',
				],
				bestFor: [
					'Businesses focused on generating leads',
					'Startups needing a conversion-oriented web presence',
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
