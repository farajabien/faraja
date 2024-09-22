import { AlertCircle, Star } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
	Book,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	projects,
	kwetunovaProjects,
	techStack,
	socialLinks,
	achievements,
	Project,
	Achievement,
} from '@/lib/utils'
import SocialLink from '@/components/SocialLink'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<Card className='p-6 hover:shadow-lg transition-shadow relative'>
			{index === 0 && <Star className='absolute top-2 right-2 text-primary' />}
			<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
			<p className='text-sm text-muted-foreground mb-4'>{project.subtitle}</p>
			<p className='mb-4'>{project.description}</p>
			<div className='flex flex-wrap gap-2 mb-4'>
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className='inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full transition-colors hover:bg-primary/20'>
						{tech}
					</span>
				))}
			</div>
			{project.link && (
				<div className='mt-4'>
					<Button asChild variant='outline' size='sm'>
						<Link
							href={project.link}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center'>
							Visit site <ExternalLink className='ml-2 w-4 h-4' />
						</Link>
					</Button>
				</div>
			)}
		</Card>
	)
}

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 pt-2 max-w-4xl flex-grow'>
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
					<div className='flex justify-center space-x-4 mb-8'>
						<Button asChild variant='outline' size='lg'>
							<Link
								href='/files/farajabien_resume_2024.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center'>
								<FileText className='mr-2 h-4 w-4' /> View Resume
							</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link href='/resources' className='inline-flex items-center'>
								<Book className='mr-2 h-4 w-4' /> Resources
							</Link>
						</Button>
					</div>
				</div>

				<Section title='About Me' icon={User}>
					<p className='mb-4'>
						As a full-stack developer and tech entrepreneur, I specialize in
						creating innovative solutions for the African market. With expertise
						in Next.js, Supabase, and various other modern technologies,
						I&apos;ve successfully launched and managed multiple projects that
						address unique challenges in our region.
					</p>
				</Section>

				<Section title='Skills' icon={Award}>
					<h3 className='text-xl font-semibold mb-4'>Technology Stack</h3>
					<div className='flex flex-wrap gap-2'>
						{techStack.map((tech) => (
							<span
								key={tech.name}
								className='bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'>
								{tech.name}
							</span>
						))}
					</div>
				</Section>

				<Section title='Personal Projects' icon={Code}>
					<div className='text-right text-sm text-muted-foreground mb-2'>
						Total Projects: {projects.length}
					</div>
					<div className='grid md:grid-cols-2 gap-8'>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</Section>

				<Section title='Kwetunova Web Agency Projects' icon={Briefcase}>
					<div className='text-right text-sm text-muted-foreground mb-2'>
						Total Projects: {kwetunovaProjects.length}
					</div>
					<div className='grid md:grid-cols-2 gap-8'>
						{kwetunovaProjects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</Section>

				<Section title='Achievements' icon={Star}>
					<div className='grid md:grid-cols-2 gap-8'>
						{achievements.map((achievement) => (
							<Card
								key={achievement.title}
								className='p-6 hover:shadow-lg transition-shadow'>
								<h3 className='text-2xl font-semibold mb-2'>
									{achievement.title}
								</h3>
								<p className='text-sm text-muted-foreground mb-4'>
									{achievement.description}
								</p>
								<Button asChild variant='outline' size='sm'>
									<Link
										href={achievement.link}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center'>
										View Certificate <ExternalLink className='ml-2 w-4 h-4' />
									</Link>
								</Button>
							</Card>
						))}
					</div>
				</Section>

				<Section title='Resources' icon={Book}>
					<p className='mb-4'>
						I&apos;ve created various resources to help fellow entrepreneurs and
						developers. Currently, I&apos;m offering a free template based on
						this portfolio.
					</p>
					<Card className='p-6 hover:shadow-lg transition-shadow'>
						<h3 className='text-2xl font-semibold mb-2'>
							This Portfolio Template
						</h3>
						<p className='text-sm text-muted-foreground mb-4'>
							A customizable template for creating a professional portfolio
							website with integrated paywalls and payment buttons.
						</p>
						<ul className='list-disc list-inside mb-4'>
							<li>Responsive design</li>
							<li>Dark mode support</li>
							<li>Integrated paywall system</li>
							<li>Customizable sections</li>
							<li>SEO optimized</li>
						</ul>
						<Button asChild variant='outline' size='sm'>
							<Link
								href='https://github.com/farajabien/faraja'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center'>
								View on GitHub <ExternalLink className='ml-2 w-4 h-4' />
							</Link>
						</Button>
					</Card>
				</Section>

				<Section title="Let's Connect" icon={Mail}>
					<div className='text-center'>
						<p className='mb-6 text-lg'>
							Interested in collaborating or discussing opportunities? Get in
							touch or schedule a call!
						</p>
						<div className='flex justify-center space-x-4'>
							<Button asChild size='lg' aria-label='Send email to Bienvenu'>
								<Link
									href='mailto:farajabien@gmail.com'
									className='inline-flex items-center'>
									<Mail className='mr-2 w-5 h-5' /> Email Me
								</Link>
							</Button>
							<BookCalendly />
						</div>
					</div>
				</Section>
			</main>

			<footer className='text-center py-6 text-muted-foreground bg-secondary'>
				<p className='text-sm'>
					Open to exciting startup opportunities and collaborations
				</p>
				<p className='text-sm mt-2'>
					© {new Date().getFullYear()} farajabien. All Rights Reserved.
				</p>
			</footer>
		</div>
	)
}
