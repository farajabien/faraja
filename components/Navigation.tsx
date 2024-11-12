'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, ChevronDown } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Navigation = () => {
	const pathname = usePathname()

	type Service = {
		href: string
		label: string
		price: string | React.ReactNode
	}

	const services: Service[] = [
		{
			href: '/services/startup-validation',
			label: 'Startup Validation',
			price: '45,000 KSH',
		},
		{
			href: '/services/mvp-development',
			label: 'MVP Development',
			price: '250,000 KSH',
		},
		{
			href: '/services/saas-template',
			label: 'SaaS Template',
			price: '150,000 KSH',
		},
	]

	type Resource = {
		href: string
		label: string
		badge: React.ReactNode
		comingSoon?: boolean
	}

	const resources: Resource[] = [
		{
			href: '/resources/african-saas-kit',
			label: 'Free SaaS Template',
			badge: 'Free',
		},
		{
			href: '/resources/validation-framework',
			label: 'Validation Framework',
			badge: 'Free',
		},
		{
			href: '/resources/mvp-playbook',
			label: 'MVP Playbook',
			badge: 'Free',
			comingSoon: true,
		},
	]

	const links = [
		{ href: '/about', label: 'About' },
		{
			href: '/services',
			label: 'Services',
			items: services,
		},
		{
			href: '/resources',
			label: 'Resources',
			items: resources,
		},
	]

	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === href
		}
		return pathname.startsWith(href)
	}

	return (
		<nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<Link
						href='/'
						className='font-semibold text-lg hover:text-primary transition-colors'>
						Faraja Bien
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center gap-8'>
						{links.map((link) =>
							link.items ? (
								<DropdownMenu key={link.href}>
									<DropdownMenuTrigger className='flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
										{link.label}
										<ChevronDown className='h-4 w-4' />
									</DropdownMenuTrigger>
									<DropdownMenuContent align='end'>
										<DropdownMenuItem asChild>
											<Link href={link.href} className='w-full'>
												View All {link.label}
											</Link>
										</DropdownMenuItem>
										{link.items.map((item) => (
											<DropdownMenuItem
												key={item.href}
												asChild
												disabled={'comingSoon' in item && item.comingSoon}>
												{'comingSoon' in item && item.comingSoon ? (
													<div className='w-full cursor-not-allowed opacity-50'>
														<div className='flex justify-between items-center w-full'>
															<span>{item.label}</span>

															{'badge' in item && (
																<span className='text-xs bg-primary/10 text-primary px-2 py-0.5 rounded'>
																	{item.badge}
																</span>
															)}
														</div>
													</div>
												) : (
													<Link href={item.href} className='w-full'>
														<div className='flex justify-between items-center w-full'>
															<span>{item.label}</span>
															{'price' in item && (
																<span className='text-xs text-muted-foreground'>
																	{item.price}
																</span>
															)}
															{'badge' in item && (
																<span className='text-xs bg-primary/10 text-primary px-2 py-0.5 rounded'>
																	{item.badge}
																</span>
															)}
														</div>
													</Link>
												)}
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Link
									key={link.href}
									href={link.href}
									className={`text-sm font-medium transition-colors hover:text-primary ${
										isActive(link.href)
											? 'text-primary'
											: 'text-muted-foreground'
									}`}>
									{link.label}
								</Link>
							)
						)}
						<div className='flex items-center gap-4'>
							<Button variant='outline' size='sm' asChild>
								<Link href='https://saas-template.fbien.com'>View Demo</Link>
							</Button>
							<Button size='sm' asChild>
								<Link href='https://wa.me/254793643308'>Start Project</Link>
							</Button>
						</div>
					</div>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger asChild className='md:hidden'>
							<Button variant='ghost' size='icon'>
								<Menu className='h-6 w-6' />
							</Button>
						</SheetTrigger>
						<SheetContent>
							<div className='flex flex-col gap-6 pt-8'>
								{links.map((link) => (
									<div key={link.href}>
										{link.items ? (
											<div className='space-y-3'>
												<Link
													href={link.href}
													className={`text-lg font-medium ${
														isActive(link.href)
															? 'text-primary'
															: 'text-muted-foreground'
													}`}>
													{link.label}
												</Link>
												<div className='pl-4 flex flex-col gap-2'>
													{link.items.map((item) => (
														<SheetClose asChild key={item.href}>
															<Link
																href={item.href}
																className='flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors'>
																<span>{item.label}</span>
																{'price' in item && (
																	<span className='text-xs text-muted-foreground'>
																		{item.price}
																	</span>
																)}
																{'badge' in item && (
																	<span className='text-xs bg-primary/10 text-primary px-2 py-0.5 rounded'>
																		{item.badge}
																	</span>
																)}
															</Link>
														</SheetClose>
													))}
												</div>
											</div>
										) : (
											<SheetClose asChild>
												<Link
													href={link.href}
													className={`text-lg font-medium ${
														isActive(link.href)
															? 'text-primary'
															: 'text-muted-foreground'
													}`}>
													{link.label}
												</Link>
											</SheetClose>
										)}
									</div>
								))}
								<div className='flex flex-col gap-3 pt-4'>
									<Button variant='outline' asChild>
										<SheetClose asChild>
											<Link href='https://saas-template.fbien.com'>
												View Demo
											</Link>
										</SheetClose>
									</Button>
									<Button asChild>
										<SheetClose asChild>
											<Link href='https://wa.me/254793643308'>
												Start Project
											</Link>
										</SheetClose>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
