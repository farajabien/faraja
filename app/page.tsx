import React from 'react'
import {
	ArrowRight,
	MessageCircle,
	CheckCircle,
	ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { services, valueProps, techStack, templateFeatures } from '@/lib/utils'

export default function LandingPage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16 md:py-24'>
				<div className='max-w-4xl mx-auto text-center space-y-6'>
					<Badge className='bg-primary/10 text-primary'>
						Full-Stack Developer
					</Badge>

					<h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
						From Idea to Launch: Building Digital Products for African Markets
					</h1>

					<p className='text-lg text-primary font-medium'>
						Validation Sprints • MVP Development • SaaS Solutions
					</p>

					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						I help startups and founders validate ideas, build MVPs, and launch
						successful digital products with modern tech stack and local payment
						integrations
					</p>

					{/* Profile Section */}
					<div className='flex items-center justify-center gap-6 pt-8'>
						<Image
							src='https://media.licdn.com/dms/image/v2/D4D03AQH5CrhmVs4yug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731142252113?e=1736985600&v=beta&t=wFdHIVa5FgUl_n7hxP2iDZ7gAzpglF3AY7yYXkaY22g'
							alt='Bienvenu Faraja'
							width={80}
							height={80}
							className='rounded-full shadow-lg'
						/>
						<div className='flex flex-col items-start gap-2'>
							<h2 className='text-lg font-semibold'>Bienvenu Faraja</h2>
							<p className='text-sm text-muted-foreground'>
								Full-Stack Developer specializing in MVPs & SaaS
							</p>
						</div>
					</div>

					{/* Primary CTAs */}
					<div className='flex flex-wrap gap-4 justify-center pt-8'>
						<Button size='lg' className='flex items-center gap-2' asChild>
							<Link href='#services'>
								View Services
								<ArrowRight className='h-4 w-4' />
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='https://wa.me/254793643308'>
								<MessageCircle className='h-5 w-5 mr-2' />
								Let&apos;s Talk
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Value Props */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>How I Help</h2>
					<div className='grid md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{valueProps.map((prop) => (
							<Card key={prop.title}>
								<CardContent className='p-6'>
									<prop.icon className='h-12 w-12 text-primary mb-4' />
									<h3 className='text-xl font-semibold mb-2'>{prop.title}</h3>
									<p className='text-muted-foreground'>{prop.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Services */}
			<section id='services' className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>Services</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						From validation to launch, I offer end-to-end development services
					</p>

					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{services.map((service) => (
							<Card
								key={service.title}
								className={service.highlight ? 'border-primary' : ''}>
								<CardContent className='p-6'>
									<div className='mb-4'>
										{service.highlight && (
											<Badge className='mb-2'>Most Popular</Badge>
										)}
										<h3 className='text-xl font-semibold'>{service.title}</h3>
										<p className='text-2xl font-bold text-primary my-2'>
											{service.price}
										</p>
										<p className='text-muted-foreground mb-4'>
											{service.description}
										</p>
									</div>
									<ul className='space-y-2 mb-6'>
										{service.features?.map((feature) => (
											<li key={feature} className='flex items-start gap-2'>
												<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
												<span className='text-sm'>{feature}</span>
											</li>
										))}
									</ul>
									<Button className='w-full' asChild>
										<Link href={service.href}>
											{service.cta}
											<ArrowRight className='h-4 w-4 ml-2' />
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Template Preview Section */}
			<section className='py-16 bg-secondary/5'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>SaaS Template</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Production-ready template with local payment integrations
					</p>

					<div className='max-w-6xl mx-auto'>
						<div className='relative rounded-xl overflow-hidden shadow-2xl border border-gray-200'>
							<Image
								src='/images/next-saas-template.png'
								alt='SaaS Template Preview'
								width={1200}
								height={600}
								className='w-full h-auto'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8'>
								<div className='text-white space-y-4'>
									<h3 className='text-2xl font-bold'>Next.js SaaS Template</h3>
									<div className='flex gap-4 justify-center'>
										<Button size='lg' variant='default' asChild>
											<Link
												href='https://saas-template.fbien.com'
												className='flex items-center gap-2'>
												<ExternalLink className='h-5 w-5' />
												View Live Demo
											</Link>
										</Button>
										<Button
											size='lg'
											variant='outline'
											className='bg-white/10 backdrop-blur-sm'
											asChild>
											<Link href='/template'>
												Learn More
												<ArrowRight className='h-4 w-4 ml-2' />
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>

						{/* Template Features Grid */}
						<div className='grid md:grid-cols-4 gap-8 mt-12'>
							{templateFeatures.map((section) => (
								<div key={section.category}>
									<h3 className='font-semibold mb-4'>{section.category}</h3>
									<ul className='space-y-2'>
										{section.features.map((feature) => (
											<li key={feature} className='flex items-start gap-2'>
												<CheckCircle className='h-4 w-4 text-primary mt-1 shrink-0' />
												<span className='text-sm'>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-4'>Tech Stack</h2>
					<p className='text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
						Modern technologies for scalable solutions
					</p>

					<div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
						{techStack.map((tech) => (
							<Badge
								key={tech.name}
								variant='secondary'
								className='text-sm py-2 px-4'>
								{tech.name}
							</Badge>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-primary/5'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-4'>
						Ready to Build Your Product?
					</h2>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						Let&apos;s discuss your project and find the best way to bring it to
						life
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button size='lg' variant='default' asChild>
							<Link href='/contact' className='flex items-center gap-2'>
								Start a Project
								<ArrowRight className='h-4 w-4' />
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link
								href='https://wa.me/254793643308'
								className='flex items-center gap-2'>
								<MessageCircle className='h-5 w-5' />
								Chat on WhatsApp
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
