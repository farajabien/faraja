import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navigation = () => {
	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/services', label: 'Services' },
		{ href: '/resources', label: 'Resources' },
	]

	return (
		<nav className='border-b'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<Link href='/' className='font-semibold text-lg'>
						Faraja Bien
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-muted-foreground hover:text-primary transition-colors'>
								{link.label}
							</Link>
						))}
						<Button asChild>
							<Link href='https://wa.me/254793643308'>Start Your Project</Link>
						</Button>
					</div>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger asChild className='md:hidden'>
							<Button variant='ghost' size='icon'>
								<Menu className='h-6 w-6' />
							</Button>
						</SheetTrigger>
						<SheetContent>
							<div className='flex flex-col gap-4 pt-8'>
								{links.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className='text-muted-foreground hover:text-primary transition-colors'>
										{link.label}
									</Link>
								))}
								<Button className='mt-4' asChild>
									<Link href='https://wa.me/254793643308'>
										Start Your Project
									</Link>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
