import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import ProjectCard from '@/components/ProjectCard'

export type Project = {
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
}

const projects: Project[] = [
	{
		title: 'PropManage',
		industry: 'Real Estate',
		category: 'Property Management',
		description:
			'A comprehensive property management platform designed to optimize interactions between property owners, tenants, and service providers, enhancing efficiency and communication.',
		link: 'https://propmanage.fbien.com',

		technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
		features: [
			'Robust tenant management system for seamless interactions',
			'Maintenance request tracking to ensure timely responses',
			'Automated billing features for hassle-free transactions',
			'Intuitive property listing portal to attract potential tenants',
		],
		servicesDelivered: [
			'Prototype Strategy for effective project planning',
			'Next.js Expertise for high-performance applications',
			'Tailored Guidance based on industry insights',
		],
		lessons:
			'This project underscored the necessity of thorough planning and adaptable architecture to accommodate complex business workflows.',
	},
	{
		title: 'BingBang',
		industry: 'Gaming',
		subtitle: 'Social Gaming Platform',
		description:
			'A vibrant social gaming platform that connects gamers from around the globe. It features integration with Random.ORG for unbiased game outcomes and Supabase for secure user authentication and data management.',
		link: 'https://bingbang.bet',
		technologies: ['Next.js', 'Random.ORG', 'Supabase'],
	},
	{
		title: 'BiditWinit',
		industry: 'E-commerce',
		category: 'E-commerce',
		description:
			'A gamified online auction platform that utilizes user behavior insights to innovate auction formats and enhance user engagement.',
		technologies: ['React', 'Node.js', 'MongoDB'],
		features: [
			'Dynamic auction formats that evolve based on user preferences',
			'In-depth user behavior analytics for data-driven decisions',
			'Engaging TikTok integration to boost user interaction',
			'Feedback-driven development for continuous improvement',
		],
		servicesDelivered: [
			'In-depth Market Research to identify user needs',
			'Comprehensive Platform Development for robust functionality',
			'User Testing to refine user experience',
		],
		lessons:
			'This venture highlighted the importance of experimentation and adaptability. Starting with a TikTok channel allowed me to gather invaluable insights into user behavior before committing to a full-scale platform launch.',
	},
	{
		title: 'ESG Score Visualization',
		industry: 'Finance',
		subtitle: 'Frontend Development at Minklist Digital',
		description:
			'Developed user-friendly charts and graphs to visualize complex ESG data using Next.js and React, facilitating better decision-making in sustainability practices.',
		link: 'https://in-house.com',
		technologies: ['Next.js', 'React'],
	},
	{
		title: 'Linha Verde Project',
		industry: 'Non-profit',
		subtitle: 'World Food Programme',
		description:
			'Created tailored project management tools to enhance operational efficiency for the World Food Programme. This internal tool is vital for critical mission operations.',
		technologies: ['React', 'Node.js'],
	},
	{
		title: 'Academic Now',
		industry: 'Education',
		subtitle: 'Educational Platform',
		description:
			'Provided mentorship to intern Fathi Hassan in the development of this educational platform, offering project planning, code reviews, and oversight throughout the development process.',
		link: 'https://academic-now.vercel.app/',
		technologies: ['React', 'Firebase', 'Tailwind CSS'],
	},
	{
		title: 'SugarDaddy',
		industry: 'Food & Beverage',
		subtitle: 'Sugar Cane Juice Parlour in Nairobi',
		description:
			'Supervised intern Fathi Hassan in creating a website for this local Nairobi business, providing guidance on design and implementation best practices.',
		link: '#',
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'VR Space',
		industry: 'Technology',
		subtitle: 'Virtual Reality Solutions',
		description:
			'Led the development of the VR Space website, delivering immersive virtual reality experiences across sectors like real estate and education. Oversaw the team, resolved critical bugs, and optimized SEO, achieving a #1 Google ranking for "VR gaming Nairobi".',
		link: 'http://vrspace.co.ke/',
		technologies: ['Vue.js', 'CSS', 'JavaScript'],
	},
	{
		title: 'Kwetunova',
		industry: 'Technology',
		subtitle: 'Web Agency Website',
		description:
			'The official website for Kwetunova web agency, showcasing their services and portfolio.',
		link: 'https://kwetunova-3.vercel.app',
		technologies: ['Next.js', 'Tailwind CSS', 'Shadcn/ui'],
	},
]

const CTASection = () => (
	<section className='bg-secondary/30 py-16'>
		<div className='container mx-auto px-4'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-4'>
					Want to Build Something Great?
				</h2>
				<p className='text-xl text-muted-foreground mb-8'>
					Let&apos;s discuss how we can bring your project to life with proven
					strategies and modern technology
				</p>
				<Button size='lg' className='group'>
					Schedule a Consultation
					<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
				</Button>
			</div>
		</div>
	</section>
)

export default function ProjectsPage() {
	const getIndustryCounts = () => {
		const counts: Record<string, number> = {}
		projects.forEach((project) => {
			counts[project.industry] = (counts[project.industry] || 0) + 1
		})
		return counts
	}

	const industryBubbles = getIndustryCounts()

	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Projects', href: '/projects' },
				]}
			/>

			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Project Portfolio
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						A showcase of {projects.length} projects across various industries
					</p>
				</div>
			</section>

			<section className='py-8 bg-secondary/20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-bold mb-6'>Industries</h2>
					<div className='flex flex-wrap gap-4 justify-center'>
						{Object.entries(industryBubbles).map(([industry, count]) => (
							<div
								key={industry}
								className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium'>
								{industry}: {count}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12'>
						Featured Projects ({projects.length})
					</h2>
					<div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
						{projects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</div>
				</div>
			</section>

			<CTASection />
		</div>
	)
}
