import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'

type Project = {
	title: string // Title of the project
	industry: string // Industry category
	category?: string // Optional category for the project
	subtitle?: string // Optional subtitle for additional context
	description: string // Detailed description of the project
	link?: string // Optional link to the project
	technologies: string[] // List of technologies used
	features?: string[] // Optional list of features for the project
	servicesDelivered?: string[] // Optional list of services delivered
	lessons?: string // Optional lessons learned from the project
}

// Combined projects data
const projects: Project[] = [
	{
		title: 'PropManage',
		industry: 'Real Estate',
		category: 'Property Management',
		description:
			'A comprehensive property management platform that streamlines operations between property owners, tenants, and service providers.',
		technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
		features: [
			'Tenant management system',
			'Maintenance request tracking',
			'Automated billing',
			'Property listing portal',
		],
		servicesDelivered: [
			'Prototype Strategy',
			'Next.js Expertise',
			'Tailored Guidance',
		],
		lessons:
			'Complex business workflows require thorough planning and flexible architecture',
	},
	{
		title: 'BingBang',
		industry: 'Gaming',
		subtitle: 'Social gaming platform',
		description:
			'Social gaming platform that connects gamers worldwide. Integrated with Random.ORG for fair game results and Supabase for user authentication and data storage.',
		link: 'https://bingbang.bet',
		technologies: ['NextJs', 'Random.ORG', 'Supabase'],
	},
	{
		title: 'BiditWinit',
		industry: 'E-commerce',
		category: 'E-commerce',
		description:
			'A gamified online auction platform that leverages user behavior insights to refine auction formats and enhance user experience.',
		technologies: ['React', 'Node.js', 'MongoDB'],
		features: [
			'Dynamic auction formats',
			'User behavior analytics',
			'Engaging TikTok integration',
			'Feedback-driven development',
		],
		servicesDelivered: [
			'Market Research',
			'Platform Development',
			'User Testing',
		],
		lessons:
			'This venture taught me the importance of experimentation and adaptability. By starting with a TikTok channel and testing different auction formats, I was able to gather valuable insights into user behavior and preferences before investing heavily in a full-fledged platform.',
	},
	{
		title: 'ESG Score Visualization',
		industry: 'Finance',
		subtitle: 'Frontend development at Minklist Digital',
		description:
			'Implemented user-friendly charts and graphs for complex ESG data using Next.js and React, enhancing data visualization for better decision-making in sustainability practices.',
		link: 'https://in-house.com',
		technologies: ['Next.js', 'React'],
	},
	{
		title: 'Linha Verde Project',
		industry: 'Non-profit',
		subtitle: 'World Food Programme',
		description:
			'Developed custom project management tools to improve operational efficiency for the World Food Programme. This internal tool is not publicly accessible but is crucial for mission-critical operations.',
		technologies: ['React', 'Node.js'],
	},
	{
		title: 'Academic Now',
		industry: 'Education',
		subtitle: 'Educational platform',
		description:
			'Guided and mentored intern Fathi Hassan in building this educational platform. Provided project planning, code review, and development oversight.',
		link: 'https://academic-now.vercel.app/',
		technologies: ['React', 'Firebase', 'Tailwind CSS'],
	},
	{
		title: 'SugarDaddy',
		industry: 'Food & Beverage',
		subtitle: 'Sugar cane juice parlour in Nairobi',
		description:
			'Supervised intern Fathi Hassan in developing a website for this local Nairobi business. Offered guidance on design and implementation.',
		link: '#',
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		title: 'VR Space',
		industry: 'Technology',
		subtitle: 'Virtual Reality Solutions',
		description:
			'Led development of the VR Space website, offering immersive VR experiences for industries like real estate and education. Guided the team, fixed critical bugs, and optimized SEO, achieving #1 Google ranking for "VR gaming Nairobi".',
		link: 'http://vrspace.co.ke/',
		technologies: ['Vue.js', 'CSS', 'JavaScript'],
	},
	{
		title: 'Kwetunova',
		industry: 'Technology',
		subtitle: 'Web agency website',
		description: 'Official website for Kwetunova web agency.',
		link: 'https://kwetunova-3.vercel.app',
		technologies: ['Next.js', 'Tailwind CSS', 'Shadcn/ui'],
	},
]

// Updated function to count industries instead of categories
const getIndustryCounts = (projects: Project[]) => {
	const counts: { [industry: string]: number } = {}
	projects.forEach((project) => {
		counts[project.industry] = (counts[project.industry] || 0) + 1
	})
	return counts
}
// Projects Page Component
export default function ProjectsPage() {
	const categoryBubbles = getIndustryCounts(projects)

	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Projects', href: '/projects' },
				]}
			/>
			{/* Hero Section */}
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

			{/* Industry Bubbles Section */}
			<section className='py-8 bg-secondary/20'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl font-bold mb-6'>Industries</h2>
					<div className='flex flex-wrap gap-4 justify-center'>
						{Object.entries(categoryBubbles).map(([category, count]) => (
							<div
								key={category}
								className='bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium'>
								{category}: {count}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className='py-16 bg-secondary/30'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-12'>
						Featured Projects ({projects.length})
					</h2>
					<div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
						{projects.map((project) => (
							<Card
								key={project.title}
								className='p-6 hover:shadow-xl transition-all'>
								<div className='mb-4'>
									<h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
									<p className='text-sm text-primary font-medium'>
										{project.category}
									</p>
								</div>
								<p className='text-muted-foreground mb-6'>
									{project.description}
								</p>

								<div className='mb-6'>
									<h4 className='font-semibold mb-2'>Key Features:</h4>
									<ul className='space-y-2'>
										{project.features?.map((feature) => (
											<li key={feature} className='flex items-center gap-2'>
												<Star className='h-4 w-4 text-primary' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className='mb-6'>
									<h4 className='font-semibold mb-2'>Technologies:</h4>
									<div className='flex flex-wrap gap-2'>
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className='bg-primary/10 text-primary text-sm px-3 py-1 rounded-full'>
												{tech}
											</span>
										))}
									</div>
								</div>

								{project.servicesDelivered && (
									<div className='mt-4 pt-4 border-t'>
										<h4 className='font-semibold mb-2'>Services Delivered:</h4>
										<ul className='space-y-2'>
											{project.servicesDelivered.map((service) => (
												<li key={service} className='flex items-center gap-2'>
													<Star className='h-4 w-4 text-primary' />
													<span>{service}</span>
												</li>
											))}
										</ul>
									</div>
								)}

								{project.lessons && (
									<div className='mt-4 pt-4 border-t'>
										<h4 className='font-semibold mb-2'>Key Lessons:</h4>
										<p className='text-muted-foreground'>{project.lessons}</p>
									</div>
								)}
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Want to Build Something Great?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Let&apos;s discuss how we can bring your project to life with
							proven strategies and modern technology
						</p>
						<Button size='lg' className='group'>
							Schedule a Consultation
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Want to Build Something Great?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Let&apos;s discuss how we can bring your project to life with
							proven strategies and modern technology
						</p>
						<Button size='lg' className='group'>
							Schedule a Consultation
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
