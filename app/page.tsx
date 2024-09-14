import Link from 'next/link'
import { Github, Twitter, ExternalLink, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
	{
		title: 'BingBang',
		subtitle: 'Social gaming platform',
		description:
			'A platform where luck and friendship create unforgettable moments.',
		link: 'https://bingbang.bet',
	},
	{
		title: 'PropManage',
		subtitle: 'Property management webapp',
		description: 'Streamline property management tasks with ease.',
		link: 'https://propmanage.kwetunova.com',
	},
]

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 py-16 max-w-4xl flex-grow'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl font-bold mb-4 animate-fade-in'>
						Faraja<span className='text-primary'>Bien</span>
					</h1>
					<p className='text-xl mb-8 text-muted-foreground'>
						Next.js Developer | Startup Enthusiast
					</p>
					<div className='flex justify-center space-x-6'>
						<SocialLink
							href='https://github.com/farajabien'
							icon={<Github className='w-6 h-6' />}
							label='GitHub'
						/>
						<SocialLink
							href='https://twitter.com/farajabien'
							icon={<Twitter className='w-6 h-6' />}
							label='Twitter'
						/>
					</div>
				</div>

				<Section title='Tech Stack'>
					<div className='flex flex-wrap justify-center gap-3'>
						{[
							'Next.js',
							'Supabase',
							'Tailwind CSS',
							'shadcn/ui',
							'Resend',
							'PayStack',
							'Vercel',
						].map((tech) => (
							<span
								key={tech}
								className='bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors'>
								{tech}
							</span>
						))}
					</div>
				</Section>

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
								<Button asChild variant='outline'>
									<Link
										href={project.link}
										className='inline-flex items-center'>
										Visit site <ExternalLink className='ml-2 w-4 h-4' />
									</Link>
								</Button>
							</Card>
						))}
					</div>
				</Section>

				<Section title="Let's Connect">
					<div className='text-center'>
						<p className='mb-6 text-lg'>
							Interested in collaborating or discussing opportunities? Get in
							touch!
						</p>
						<Button asChild size='lg'>
							<Link
								href='mailto:faraja.bien@gmail.com'
								className='inline-flex items-center'>
								<Mail className='mr-2 w-5 h-5' /> Contact Me
							</Link>
						</Button>
					</div>
				</Section>
			</main>

			<footer className='text-center py-6 text-muted-foreground bg-secondary'>
				<p className='text-sm'>
					Open to exciting startup opportunities and collaborations
				</p>
			</footer>
		</div>
	)
}

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className='mb-16'>
			<h2 className='text-2xl font-semibold mb-8 text-center'>{title}</h2>
			{children}
		</div>
	)
}

function SocialLink({
	href,
	icon,
	label,
}: {
	href: string
	icon: React.ReactNode
	label: string
}) {
	return (
		<Link
			href={href}
			className='text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary'
			aria-label={label}>
			{icon}
		</Link>
	)
}
