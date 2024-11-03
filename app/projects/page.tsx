import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'
import { ProjectGrid } from '@/components/app-projects-project-grid'

export const metadata: Metadata = {
	title: 'Farajabien - Project Portfolio',
	description:
		'Showcasing a diverse portfolio of projects across industries, including real estate, e-commerce, and gaming. Discover how Farajabien leverages Next.js and modern technologies to deliver impactful solutions.',
}

// lib/portfolio-data.ts

export interface Project {
	title: string
	industry: string
	category?: string
	subtitle?: string
	description: string
	link?: string
	technologies: string[]
	features?: string[]
	servicesDelivered?: string[]
	lessons?: string
	metrics?: {
		label: string
		value: string
	}[]
	status: 'live' | 'completed' | 'in-progress'
}

const projects: Project[] = [
	{
		title: 'RentFlow',
		industry: 'Real Estate',
		category: 'Property Management',
		subtitle: 'Property Management Platform',
		description:
			'Transforming rent collection for property managers through automation and smart technology',
		link: 'https://rentflow.fbien.com',
		technologies: ['Next.js', 'Supabase', 'WhatsApp API', 'Paystack'],
		features: [
			'Automated WhatsApp & SMS reminders',
			'M-PESA and card payment integration',
			'Real-time payment reconciliation',
			'Property manager dashboard',
			'Tenant portal with payment history',
		],
		servicesDelivered: [
			'End-to-end platform development',
			'Payment gateway integration',
			'Automated notification system',
			'User research and testing',
			'Performance optimization',
		],
		metrics: [
			{ label: 'Collection Rate', value: '95%' },
			{ label: 'Properties Served', value: '20+' },
			{ label: 'Monthly Transactions', value: '500K+ KES' },
			{ label: 'Time Saved', value: '20hrs/month' },
		],
		lessons:
			'The project demonstrated the power of automation in solving real business problems. Key learnings included the importance of local payment integration and user-friendly interfaces for non-technical users.',
		status: 'live',
	},
	{
		title: 'BingBang.bet',
		industry: 'Gaming',
		category: 'Betting Platform',
		subtitle: 'Social Gaming Platform',
		description:
			'Fair-play betting platform with unique game mechanics and secure payment processing',
		link: 'https://bingbang.bet',
		technologies: ['Next.js', 'Supabase', 'Random.org API', 'Paystack'],
		features: [
			'Custom duel betting system',
			'Secure random number generation',
			'Integrated wallet system',
			'Real-time transaction processing',
			'Comprehensive admin dashboard',
		],
		servicesDelivered: [
			'Platform architecture design',
			'Core betting engine development',
			'Payment system integration',
			'Security implementation',
			'Performance optimization',
		],
		metrics: [
			{ label: 'Daily Bets', value: '1000+' },
			{ label: 'Transaction Success', value: '99.9%' },
			{ label: 'User Growth', value: '40% MoM' },
		],
		lessons:
			'Building a betting platform highlighted the critical nature of transaction security and fair play mechanisms. The integration with Random.org proved essential for maintaining user trust.',
		status: 'live',
	},
	{
		title: 'ESG Score Visualization',
		industry: 'Finance',
		category: 'Data Visualization',
		subtitle: 'ESG Data Platform at Minklist Digital',
		description:
			'Interactive visualization platform for complex ESG (Environmental, Social, Governance) metrics',
		technologies: ['React', 'Next.js', 'D3.js'],
		features: [
			'Real-time data visualization',
			'Interactive dashboards',
			'Custom reporting tools',
			'Performance optimization',
		],
		servicesDelivered: [
			'Frontend architecture design',
			'Chart component development',
			'API integration',
			'Performance optimization',
		],
		metrics: [
			{ label: 'Load Time', value: '-40%' },
			{ label: 'User Engagement', value: '+60%' },
			{ label: 'Data Points', value: '1000+' },
		],
		lessons:
			'This project reinforced the importance of performance optimization when dealing with large datasets and complex visualizations.',
		status: 'completed',
	},
]

function getIndustryCounts(projects: Project[]) {
	const counts: Record<string, number> = {}
	projects.forEach((project) => {
		counts[project.industry] = (counts[project.industry] || 0) + 1
	})
	return counts
}

export default function ProjectsPage() {
	const industryBubbles = getIndustryCounts(projects)

	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Projects', href: '/projects' },
				]}
			/>

			<header className='bg-secondary/10 py-8'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='mb-4 md:mb-0'>
							<h1 className='text-3xl md:text-4xl font-bold'>
								Project Portfolio
							</h1>
							<p className='text-lg text-muted-foreground mt-2'>
								Showcasing {projects.length} projects across various industries
							</p>
						</div>
						<div className='flex flex-wrap gap-2 justify-center md:justify-end'>
							{Object.entries(industryBubbles).map(([industry, count]) => (
								<div
									key={industry}
									className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium'>
									{industry}: {count}
								</div>
							))}
						</div>
					</div>
				</div>
			</header>

			<main className='py-12'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-bold mb-8'>Featured Projects</h2>
					<ProjectGrid projects={projects} />
				</div>
			</main>

			<CTASection />
		</div>
	)
}

function CTASection() {
	return (
		<section className='bg-secondary/30 py-12'>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-2xl font-bold mb-4'>
						Want to Build Something Great?
					</h2>
					<p className='text-lg text-muted-foreground mb-6'>
						Let&apos;s discuss how we can bring your project to life with proven
						strategies and modern technology
					</p>
					<a
						href='/contact'
						className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8'>
						Schedule a Consultation
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1'>
							<line x1='5' y1='12' x2='19' y2='12'></line>
							<polyline points='12 5 19 12 12 19'></polyline>
						</svg>
					</a>
				</div>
			</div>
		</section>
	)
}
