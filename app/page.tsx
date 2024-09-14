import Link from 'next/link'
import { Github, Twitter, ExternalLink, Mail } from 'lucide-react'

const projects = [
  {
    title: 'BingBang',
    subtitle: 'Social gaming platform',
    description: 'A platform where luck and friendship create unforgettable moments.',
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
      <main className='container mx-auto px-4 py-16 max-w-3xl flex-grow'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-4'>
            Faraja<span className='text-primary'>Bien</span>
          </h1>
          <p className='text-xl mb-8'>Next.js Developer | Startup Enthusiast</p>
          <div className='flex justify-center space-x-4'>
            <SocialLink href='https://github.com/farajabien' icon={<Github className='w-6 h-6' />} />
            <SocialLink href='https://twitter.com/farajabien' icon={<Twitter className='w-6 h-6' />} />
          </div>
        </div>

        <Section title="Tech Stack">
          <div className='flex flex-wrap justify-center gap-2'>
            {['Next.js', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Resend', 'PayStack', 'Vercel'].map((tech) => (
              <span key={tech} className='bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'>
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Recent Projects">
          <div className='space-y-8'>
            {projects.map((project) => (
              <div key={project.title} className='bg-card text-card-foreground rounded-lg p-6 shadow-sm'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-sm text-muted-foreground mb-4'>{project.subtitle}</p>
                <p className='mb-4'>{project.description}</p>
                <Link href={project.link} className='text-primary hover:underline inline-flex items-center'>
                  Visit site <ExternalLink className='ml-2 w-4 h-4' />
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Let's Connect">
          <div className='text-center'>
            <p className='mb-4'>Interested in collaborating or discussing opportunities? Get in touch!</p>
            <Link href='mailto:faraja.bien@gmail.com' className='inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'>
              <Mail className='mr-2 w-4 h-4' /> Contact Me
            </Link>
          </div>
        </Section>
      </main>

      <footer className='text-center py-4 text-muted-foreground bg-secondary'>
        <p>Open to exciting startup opportunities and collaborations</p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className='mb-16'>
      <h2 className='text-2xl font-semibold mb-8 text-center'>{title}</h2>
      {children}
    </div>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <Link href={href} className='text-muted-foreground hover:text-primary transition-colors'>
      {icon}
    </Link>
  )
}