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
	Rocket,
	Target,
	Layout,
} from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const techStack: TechStackItem[] = [
	{ name: 'Next.js' },
	{ name: 'Supabase' },
	{ name: 'Tailwind CSS' },
	{ name: 'shadcn/ui' },
	{ name: 'Resend' },
	{ name: 'PayStack' },
	{ name: 'Prisma ORM' },
	{ name: 'Vercel' },
]

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

export const services: ServiceType[] = [
	{
		title: 'Startup Validation Sprint',
		price: '45,000 KSH',
		description: 'Transform your idea into a validated market concept',
		features: [
			'Market Validation Report',
			'Tech Stack Recommendations',
			'Custom Landing Page',
			'Analytics & Lead Capture Setup',
			'A/B Testing Framework',
		],
		cta: 'Start Validation',
		highlight: true,
		href: '/services/startup-validation',
		type: 'validation',
		slug: 'startup-validation',
		packages: [
			{
				name: 'Validation Package',
				price: '45,000 KSH',
				overview: '2-week sprint to validate your startup idea',
				deliveryTime: '2 weeks',
				deliverables: [
					{ name: 'Market Research Report', type: 'pdf' },
					{ name: 'Landing Page', type: 'code' },
					{ name: 'Analytics Setup', type: 'code' },
				],
				details: [
					{
						subtitle: 'Week 1',
						content:
							'Strategy & Planning - market research, competitor analysis',
					},
					{
						subtitle: 'Week 2',
						content: 'Implementation - landing page, analytics, lead capture',
					},
				],
				slug: 'startup-validation',
				bestFor: [
					'Early-stage startups',
					'New product ideas',
					'Market testing',
				],
			},
		],
	},
	{
		title: 'MVP Development',
		price: '250,000 KSH',
		description: 'Launch your first working product in 4 weeks',
		features: [
			'Working MVP with core features',
			'Technical Documentation',
			'User Testing Setup',
			'Deployment Guide',
			'Weekly Updates',
		],
		cta: 'Build MVP',
		highlight: true,
		href: '/services/mvp-development',
		type: 'mvp',
		slug: 'mvp-development',
		packages: [
			{
				name: 'MVP Development',
				price: '250,000 KSH',
				overview: 'Core features to validate your product',
				deliveryTime: '4 weeks',
				deliverables: [
					{ name: 'Working Product', type: 'code' },
					{ name: 'Documentation', type: 'pdf' },
					{ name: 'Deployment Setup', type: 'consultation' },
				],
				details: [
					{ subtitle: 'Week 1', content: 'Technical Architecture & Design' },
					{
						subtitle: 'Week 2-4',
						content: 'Development Process with weekly updates',
					},
				],
				slug: 'mvp-development',
				bestFor: ['Validated ideas', 'First version launch', 'User testing'],
				techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Paystack'],
			},
		],
	},
	{
		title: 'SaaS Template',
		price: '150,000 KSH',
		description: 'Production-ready SaaS foundation with custom implementation',
		features: [
			'Full Source Code',
			'Custom Modifications',
			'Deployment Setup',
			'Team Training',
			'Documentation',
		],
		cta: 'Get Started',
		highlight: false,
		href: '/services/saas-template',
		type: 'saas',
		slug: 'saas-template',
		packages: [
			{
				name: 'SaaS Implementation',
				price: '150,000 KSH',
				overview: 'Customized SaaS platform with local payment integration',
				deliveryTime: '4 weeks',
				deliverables: [
					{ name: 'Source Code', type: 'code' },
					{ name: 'Documentation', type: 'pdf' },
					{ name: 'Training', type: 'consultation' },
				],
				details: [
					{
						subtitle: 'Setup',
						content: 'Template customization and deployment',
					},
					{
						subtitle: 'Training',
						content: 'Team onboarding and platform management',
					},
				],
				slug: 'saas-template',
				bestFor: [
					'Subscription businesses',
					'Local payment needs',
					'Team collaboration',
				],
				techStack: ['Next.js', 'Supabase', 'Paystack', 'Tailwind CSS'],
				addOns: [
					{
						name: 'Custom Integration',
						price: '45,000 KSH',
						description: 'Integrate with your existing tools and services',
					},
					{
						name: 'Extended Support',
						price: '25,000 KSH/month',
						description: 'Ongoing maintenance and support',
					},
				],
			},
		],
	},
]

export const resources = [
	{
		title: 'Next.js SaaS Starter',
		description:
			'Production-ready SaaS template with authentication, payments, and team management',
		type: 'template',
		slug: 'supabase-saas-starter',
		href: '/resources/supabase-saas-starter',
		features: [
			'Next.js App Router',
			'Supabase Auth & Database',
			'Stripe Integration',
			'Team Management',
			'Email Notifications',
			'Documentation',
		],
		price: 'Free',
		demoUrl: 'https://saas-template.fbien.com',
		githubUrl: 'https://github.com/farajabien/supabase-saas-starter',
	},
	{
		title: 'Validation Framework',
		description: 'Systematic approach to validate your startup idea',
		type: 'framework',
		slug: 'validation-framework',
		href: '/resources/validation-framework',
		features: [
			'Problem Validation Guide',
			'Solution Testing Framework',
			'Market Analysis Template',
			'Assumption Testing Tools',
			'Pivot Strategy Guide',
		],
		price: 'Free',
		notionUrl:
			'https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5',
	},
	{
		title: 'MVP Playbook',
		description: 'Guide to building and launching your MVP in 4 weeks',
		type: 'guide',
		slug: 'mvp-playbook',
		href: '/resources/mvp-playbook',
		features: [
			'Feature Prioritization',
			'Technical Planning',
			'Development Timeline',
			'Launch Checklist',
			'Testing Framework',
		],
		price: 'Free',
		notionUrl: '/resources/mvp-playbook',
	},
]

export const valueProps = [
	{
		title: 'Market Validation First',
		description:
			'Test and validate your ideas before investing in full development.',
		icon: Target,
	},
	{
		title: 'Rapid MVP Development',
		description:
			'Get your product to market quickly with core features and real user feedback.',
		icon: Rocket,
	},
	{
		title: 'African Market Focus',
		description:
			'Built-in support for local payment systems and market requirements.',
		icon: CreditCard,
	},
	{
		title: 'Full-Stack Solutions',
		description:
			'End-to-end development from validation to deployment and maintenance.',
		icon: Layout,
	},
]

export const templateFeatures = [
	{
		category: 'Authentication & Users',
		features: [
			'Email & social login',
			'Role-based access control',
			'Team management',
			'User profiles',
		],
	},
	{
		category: 'Payments & Billing',
		features: [
			'Paystack integration',
			'Subscription management',
			'Usage-based billing',
			'Multi-currency support',
		],
	},
	{
		category: 'Developer Experience',
		features: [
			'TypeScript configuration',
			'API documentation',
			'Database migrations',
			'Testing setup',
		],
	},
	{
		category: 'UI/UX',
		features: [
			'Responsive dashboard',
			'Dark/light mode',
			'Loading states',
			'Toast notifications',
		],
	},
]

// Helper functions remain the same
export function getPriceInKSH(priceString: string): number {
	const match = priceString.match(/(\d{1,3}(,\d{3})*|\d+)(?=\s*KSH)/)
	return match ? parseInt(match[0].replace(/,/g, ''), 10) : 0
}

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

// Type definitions
export interface Project {
	title: string
	subtitle: string
	description: string
	link?: string
	technologies: string[]
}

export interface SocialLinkData {
	href: string
	icon: React.ComponentType<{ className?: string }>
	label: string
}

export interface TechStackItem {
	name: string
}

export type DeliverableType = {
	name: string
	type: 'pdf' | 'doc' | 'design' | 'code' | 'consultation' | 'multiple'
	icon?: string
	details?: string
}

export type PackageDetailType = {
	subtitle: string
	content: string
}

export type PackageType = {
	name: string
	description?: string
	price: string
	turnaround?: string
	isPopular?: boolean
	savings?: string
	bestFor?: string[]
	overview: string
	deliverables: DeliverableType[]
	deliveryTime: string
	addOns?: AddOn[]
	details: PackageDetailType[]
	slug: string
	techStack?: string[]
}

export interface ServiceType {
	title: string
	description: string
	type: string
	slug: string
	price: string
	packages: PackageType[]
	features?: string[]
	cta: string
	highlight?: boolean
	href: string
}

export type AddOn = {
	name: string
	price: string
	description: string
	availability?: string
}

// Export all packages function
export const extractPackages = (services: ServiceType[]): PackageType[] => {
	return services.flatMap((service) => service.packages)
}

export const allPackages = extractPackages(services)
