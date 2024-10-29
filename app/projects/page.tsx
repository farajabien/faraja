import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import ProjectCard from '@/components/ProjectCard'
import { Metadata } from 'next'
import { ProjectGrid } from '@/components/app-projects-project-grid'

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

export const metadata: Metadata = {
	title: 'Farajabien - Project Portfolio',
	description:
		'Showcasing a diverse portfolio of projects across industries, including real estate, e-commerce, and gaming. Discover how Farajabien leverages Next.js and modern technologies to deliver impactful solutions.',
}

const projects: Project[] = [
	{
		title: 'RentFlow',
		industry: 'Real Estate',
		category: 'Property Management',
		subtitle: 'Comprehensive Property Management Platform',
		description:
			'A comprehensive property management platform designed to optimize interactions between property owners, tenants, and service providers, enhancing efficiency and communication. RentFlow aims to streamline property management tasks and improve user experiences.',
		link: 'https://RentFlow.fbien.com',
		technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
		features: [
			'Robust tenant management system for seamless interactions',
			'Maintenance request tracking to ensure timely responses',
			'Automated billing features for hassle-free transactions',
			'Intuitive property listing portal to attract potential tenants',
			'Real-time financial reporting for property owners',
			'Customizable dashboard for a personalized user experience',
		],
		servicesDelivered: [
			'Technical Feasibility Analysis to assess project viability',
			'Architecture Blueprint outlining system structure',
			'Technology Stack Recommendation tailored for project needs',
			'MVP Feature Scope & Budget estimation for initial launch',
			'Landing Page Overview + Copy development for effective marketing',
		],
		lessons:
			'This project underscored the necessity of thorough planning and adaptable architecture to accommodate complex business workflows. Engaging stakeholders early in the process proved crucial for aligning expectations and ensuring the project met real user needs.',
	},

	{
		title: 'BingBang',
		industry: 'Gaming',
		subtitle: 'Social Gaming Platform',
		description:
			'A vibrant social gaming platform that connects gamers from around the globe. It features integration with Random.ORG for unbiased game outcomes and Supabase for secure user authentication and data management.',
		link: 'https://bingbang.bet',
		technologies: ['Next.js', 'Random.ORG', 'Supabase'],
		features: [
			'Seamless user registration and login using Supabase',
			'Real-time game outcomes powered by Random.ORG',
			'Interactive user interface for engaging gameplay',
			'Community features to foster social interactions among players',
			'Analytics dashboard for tracking user engagement and game performance',
		],
		servicesDelivered: [
			'Prototype Development to validate game concepts',
			'Technical Feasibility Analysis for project viability',
			'User Testing to refine gameplay and user experience',
		],
		lessons:
			'This project demonstrated the importance of integrating reliable technologies for game fairness and user security. Early prototype development allowed us to gather player feedback, ensuring the platform met user expectations before launch.',
	},
	{
		title: 'BiditWinit',
		industry: 'E-commerce',
		category: 'E-commerce',
		description:
			'A gamified online auction platform that utilizes user behavior insights to innovate auction formats and enhance user engagement. The platform is designed to create a fun and competitive bidding environment.',
		link: '#',
		technologies: ['React', 'Node.js', 'MongoDB'],
		features: [
			'Diverse auction formats that adapt based on user preferences',
			'In-depth user behavior analytics for informed decision-making',
			'Engaging TikTok integration to boost user interaction',
			'Feedback-driven development for continuous improvement',
			'Dynamic notifications to keep users updated on auction activity',
		],
		servicesDelivered: [
			'In-depth Market Research to identify user needs and preferences',
			'Comprehensive Platform Development for robust functionality',
			'User Testing to refine the user experience and auction formats',
		],
		lessons:
			"This venture highlighted the significance of leveraging social media for user insights. The initial focus on TikTok provided valuable data on user engagement, informing the platform's development and marketing strategy.",
	},
	{
		title: 'ESG Score Visualization',
		industry: 'Finance',
		subtitle: 'Frontend Development at Minklist Digital',
		description:
			'Developed user-friendly charts and graphs to visualize complex ESG data using Next.js and React, facilitating better decision-making in sustainability practices.',
		link: 'https://in-house.com',
		technologies: ['Next.js', 'React'],
		features: [
			'Interactive visualizations for complex ESG metrics',
			'Customizable dashboards for user preferences',
			'Real-time data updates for accurate insights',
		],
		servicesDelivered: [
			'UI/UX Design for intuitive user navigation',
			'Frontend Development to implement interactive charts',
			'User Testing to enhance usability and functionality',
		],
		lessons:
			'This project reinforced the importance of clear data visualization in decision-making processes. Feedback from users helped refine the visualizations, ensuring they effectively communicated complex information.',
	},
	{
		title: 'Linha Verde Project',
		industry: 'Non-profit',
		subtitle: 'World Food Programme',
		description:
			'Created tailored project management tools to enhance operational efficiency for the World Food Programme. This internal tool is vital for critical mission operations.',
		technologies: ['React', 'Node.js'],
		features: [
			'Customizable project tracking for various initiatives',
			'Collaboration tools for team communication',
			'Real-time reporting for transparency and accountability',
		],
		servicesDelivered: [
			'Needs Assessment to identify operational requirements',
			'Platform Development for improved project management',
			'Training and Support for end-users to maximize tool utilization',
		],
		lessons:
			'This project highlighted the necessity of understanding user needs in a non-profit context. Engaging with end-users during development ensured the tool effectively supported their operational workflows.',
	},
	{
		title: 'Academic Now',
		industry: 'Education',
		subtitle: 'Educational Platform',
		description:
			'Provided mentorship to intern Fathi Hassan in the development of this educational platform, offering project planning, code reviews, and oversight throughout the development process.',
		link: 'https://academic-now.vercel.app/',
		technologies: ['React', 'Firebase', 'Tailwind CSS'],
		features: [
			'Course management system for easy content organization',
			'Student performance tracking for personalized learning',
			'Interactive quizzes and assessments for knowledge retention',
		],
		servicesDelivered: [
			'Mentorship and Guidance to foster intern development',
			'Code Reviews to ensure best practices',
			'User Testing to validate educational effectiveness',
		],
		lessons:
			'Mentoring provided valuable insights into fostering a collaborative learning environment. The experience emphasized the importance of constructive feedback in skill development.',
	},
	{
		title: 'SugarDaddy',
		industry: 'Food & Beverage',
		subtitle: 'Sugar Cane Juice Parlour in Nairobi',
		description:
			'Supervised intern Fathi Hassan in creating a website for this local Nairobi business, providing guidance on design and implementation best practices.',
		// link: '#',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		features: [
			'Responsive design for mobile and desktop users',
			'Online menu showcasing available products',
			'Contact form for customer inquiries and feedback',
		],
		servicesDelivered: [
			'Web Design and Development for user-friendly navigation',
			'Branding Consultation to create a cohesive online presence',
			'Training for the business owner to manage content updates',
		],
		lessons:
			'Working with local businesses reinforced the significance of understanding their unique needs. The project highlighted the impact of a well-designed website on customer engagement.',
	},
	{
		title: 'VR Space',
		industry: 'Technology',
		subtitle: 'Virtual Reality Solutions',
		description:
			'Led the development of the VR Space website, delivering immersive virtual reality experiences across sectors like real estate and education. Oversaw the team, resolved critical bugs, and optimized SEO, achieving a #1 Google ranking for "VR gaming Nairobi".',
		link: 'http://vrspace.co.ke/',
		technologies: ['Vue.js', 'CSS', 'JavaScript'],
		features: [
			'Immersive VR experiences tailored for various sectors',
			'User-friendly interface for easy navigation',
			'SEO optimization for increased visibility',
		],
		servicesDelivered: [
			'Team Leadership to ensure project alignment and quality',
			'Technical Support to resolve issues during development',
			'SEO Strategy Implementation for improved online presence',
		],
		lessons:
			'This project emphasized the need for strong team collaboration in delivering complex solutions. Achieving a high Google ranking underscored the importance of effective SEO strategies in driving traffic.',
	},
	{
		title: 'Kwetunova',
		industry: 'Technology',
		subtitle: 'Web Agency Website',
		description:
			'The official website for Kwetunova web agency, showcasing their services and portfolio.',
		link: 'https://kwetunova-3.vercel.app',
		technologies: ['Next.js', 'Tailwind CSS', 'Shadcn/ui'],
		features: [
			'Portfolio showcase to highlight previous work',
			'Service descriptions for clear understanding of offerings',
			'Contact forms for potential client inquiries',
		],
		servicesDelivered: [
			'Web Design and Development to enhance online visibility',
			'Content Strategy for effective messaging',
			'Training for agency staff to manage updates',
		],
		lessons:
			'Building this website reinforced the importance of showcasing work effectively. Clear communication of services and an intuitive design are crucial for attracting clients in a competitive market.',
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
