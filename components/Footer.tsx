import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	Mail,
	Phone,
	Calendar,
	Twitter,
	Linkedin,
	Github,
	ArrowUpRight,
	MapPin,
} from 'lucide-react'
import BookCalendly from '@/components/BookCalendly'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const contactInfo = {
		email: 'faraja.bien@gmail.com',
		whatsapp: '0793643308',
	}

	const socialLinks = [
		{
			name: 'Twitter',
			icon: Twitter,
			href: 'https://twitter.com/farajabien',
		},
		{
			name: 'LinkedIn',
			icon: Linkedin,
			href: 'https://linkedin.com/in/bienvenufaraja',
		},
		{
			name: 'GitHub',
			icon: Github,
			href: 'https://github.com/farajabien',
		},
	]

	return (
		<footer className='bg-background border-t'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Company Info */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Faraja Bien</h3>
						<p className='text-sm text-muted-foreground'>
							Technical Strategy & Development Services for Startups
						</p>
						<div className='flex items-center gap-4'>
							{socialLinks.map((social) => (
								<TooltipProvider key={social.name}>
									<Tooltip>
										<TooltipTrigger asChild>
											<Link
												href={social.href}
												target='_blank'
												rel='noopener noreferrer'
												className='text-muted-foreground hover:text-primary transition-colors'>
												<social.icon className='h-5 w-5' />
											</Link>
										</TooltipTrigger>
										<TooltipContent>
											<p>Follow on {social.name}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							))}
						</div>
					</div>
					{/* Quick Links */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Quick Links</h3>
						<ul className='space-y-2'>
							{['Services', 'About', 'Blog', 'Contact'].map((item) => (
								<li key={item}>
									{item.toLowerCase() === 'blog' ? (
										<Link
											href='https://medium.com/@faraja.bien'
											target='_blank'
											className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group'>
											{item}
											<ArrowUpRight className='h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
										</Link>
									) : (
										<Link
											href={`/${item.toLowerCase()}`}
											className='text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group'>
											{item}
											<ArrowUpRight className='h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
					{/* Contact Info */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Contact</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href={`mailto:${contactInfo.email}`}
									className='text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2'>
									<Mail className='h-4 w-4' />
									{contactInfo.email}
								</Link>
							</li>
							<li>
								<Link
									href={`https://wa.me/${contactInfo.whatsapp}`}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2'>
									{/* <WhatsApp className='h-4 w-4' /> */}
									WhatsApp
									{contactInfo.whatsapp}
								</Link>
							</li>
							<li>
								<div className='flex items-center gap-2'>
									<Calendar className='h-4 w-4 text-muted-foreground' />
									<BookCalendly text='Schedule a Call' />
								</div>
							</li>
						</ul>
					</div>
					{/* Newsletter
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Stay Updated</h3>
						<p className='text-sm text-muted-foreground'>
							Get the latest updates on technical strategy and development.
						</p>
						<div className='flex flex-col gap-2'>
							<Button className='w-full'>Subscribe to Newsletter</Button>
						</div>
					</div> */}
				</div>

				{/* Bottom Bar */}
				<div className='mt-12 pt-8 border-t'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-sm text-muted-foreground'>
							© {currentYear} Faraja Bien. All rights reserved.
						</p>
						<div className='flex items-center gap-4'>
							<Link
								href='/privacy'
								className='text-sm text-muted-foreground hover:text-primary transition-colors'>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='text-sm text-muted-foreground hover:text-primary transition-colors'>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
