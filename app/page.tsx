// app/page.tsx
import Link from 'next/link'
import {
	Github,
	Twitter,
	ExternalLink,
	Mail,
	Award,
	Code,
	Users,
	Briefcase,
	FileText,
	User,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	projects,
	kwetunovaProjects,
	techStack,
	socialLinks,
} from '@/lib/utils'
import SocialLink from '@/components/SocialLink'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import { PopupButton } from 'react-calendly'
import BookCalendly from '@/components/BookCalendly'

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 py-16 max-w-4xl flex-grow'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold mb-4 animate-fade-in'>
						Faraja<span className='text-primary'>Bien</span>
					</h1>
					<p className='text-xl mb-8 text-muted-foreground'>
						Next.js Developer | Startup Enthusiast
					</p>
					<div className='flex justify-center space-x-6 mb-8'>
						{socialLinks.map((link) => (
							<SocialLink
								key={link.label}
								href={link.href}
								icon={link.icon}
								label={link.label}
							/>
						))}
					</div>
					<Button asChild variant='outline' size='lg'>
						<Link
							href='/files/farajabien_resume_2024.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center'>
							<FileText className='mr-2 h-4 w-4' /> View Resume
						</Link>
					</Button>
				</div>

				{/* About Me Section */}
				<Section title='About Me'>
					<Card className='p-6'>
						<div className='flex items-center mb-4'>
							<User className='w-12 h-12 text-primary mr-4' />
							<h3 className='text-2xl font-semibold'>Faraja Bien</h3>
						</div>
						<p className='text-muted-foreground'>
							I&apos;m a passionate full-stack developer and tech entrepreneur
							specializing in creating innovative solutions for the African
							market. With expertise in Next.js, Supabase, and various modern
							technologies, I bring a unique perspective to every project. My
							goal is to create intuitive, efficient, and impactful digital
							solutions that solve real-world problems, particularly in startup
							environments and established companies.
						</p>
					</Card>
				</Section>

				{/* Tech Stack Section */}
				<Section title='Tech Stack'>
					<div className='flex flex-wrap justify-center gap-3'>
						{techStack.map((tech) => (
							<span
								key={tech.name}
								className='bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors'>
								{tech.name}
							</span>
						))}
					</div>
				</Section>

				{/* Key Metrics Section */}
				<Section title='Key Metrics'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
						<MetricCard icon={Code} value='5+' label='Years of Experience' />
						<MetricCard
							icon={Briefcase}
							value='10+'
							label='Projects Completed'
						/>
						<MetricCard icon={Users} value='5+' label='Happy Clients' />
						<MetricCard icon={Award} value='2' label='Startups Founded' />
					</div>
				</Section>

				{/* Recent Projects Section */}
				<Section title='Recent Projects'>
					<div className='grid md:grid-cols-2 gap-8'>
						{projects.map((project) => (
							<Card
								key={project.title}
								className='p-6 hover:shadow-lg transition-shadow'>
								<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
								<p className='text-sm text-muted-foreground mb-4'>
									{project.subtitle}
								</p>
								<p className='mb-4'>{project.description}</p>
								{project.link ? (
									<Button asChild variant='outline'>
										<Link
											href={project.link}
											className='inline-flex items-center'>
											Visit site <ExternalLink className='ml-2 w-4 h-4' />
										</Link>
									</Button>
								) : (
									<p className='text-sm text-muted-foreground'>
										Internal project
									</p>
								)}
							</Card>
						))}
					</div>
				</Section>

				{/* Kwetunova Web Agency Projects Section */}
				<Section title='Kwetunova Web Agency Projects'>
					<div className='grid md:grid-cols-2 gap-8'>
						{kwetunovaProjects.map((project) => (
							<Card
								key={project.title}
								className='p-6 hover:shadow-lg transition-shadow'>
								<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
								<p className='text-sm text-muted-foreground mb-4'>
									{project.subtitle}
								</p>
								<p className='mb-4'>{project.description}</p>
								{project.link ? (
									<Button
										asChild
										variant='outline'
										size='sm'
										className='mt-4  '>
										<Link
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center text-primary'>
											Visit site <ExternalLink className='ml-2 w-4 h-4' />
										</Link>
									</Button>
								) : (
									<p className='text-sm text-muted-foreground'>
										Internal project
									</p>
								)}
							</Card>
						))}
					</div>
				</Section>

				{/* Let's Connect Section */}
				<Section title="Let's Connect">
					<div className='text-center'>
						<p className='mb-6 text-lg'>
							Interested in collaborating or discussing opportunities? Get in
							touch or schedule a call!
						</p>
						<div className='flex justify-center space-x-4'>
							<Button asChild size='lg'>
								<Link
									href='mailto:faraja.bien@gmail.com'
									className='inline-flex items-center'>
									<Mail className='mr-2 w-5 h-5' /> Email Me
								</Link>
							</Button>
							<BookCalendly />
						</div>
					</div>
				</Section>
			</main>

			{/* Footer */}
			<footer className='text-center py-6 text-muted-foreground bg-secondary'>
				<p className='text-sm'>
					Open to exciting startup opportunities and collaborations
				</p>
				<p className='text-sm mt-2'>
					© {new Date().getFullYear()} Bienvenu Faraja. All Rights Reserved.
				</p>
			</footer>
		</div>
	)
}

// Add this component at the end of the file
function MetricCard({
	icon: Icon,
	value,
	label,
}: {
	icon: React.ComponentType<{ className?: string }>
	value: string
	label: string
}) {
	return (
		<div className='flex flex-col items-center p-4 bg-secondary rounded-lg'>
			<Icon className='w-8 h-8 mb-2 text-primary' />
			<span className='text-3xl font-bold mb-1'>{value}</span>
			<span className='text-sm text-muted-foreground'>{label}</span>
		</div>
	)
}
