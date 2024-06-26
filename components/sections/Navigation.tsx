'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const sections = ['#hero', '#process', '#portfolio', '#whyme', '#contact']

const Navigation = () => {
	const [activeSection, setActiveSection] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			const currentSection = sections.find((section) => {
				const element = document.querySelector(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					return rect.top >= 0 && rect.top <= window.innerHeight / 2
				}
				return false
			})
			if (currentSection) {
				setActiveSection(currentSection)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<div className='fixed top-0 md:top-1/2 right-0 md:right-0 md:transform md:-translate-y-1/2 z-50'>
			<nav className='bg-white shadow md:rounded-l-lg'>
				<ul className='flex md:flex-col justify-between md:justify-center space-x-2 md:space-x-0 md:space-y-2 p-2 md:p-0'>
					{sections.map((section) => (
						<li key={section}>
							<Link
								href={section}
								className={`text-gray-600 hover:text-orange-600 block px-4 py-2 transition-all duration-500 ${
									activeSection === section ? 'text-orange-600' : ''
								}`}>
								{section.replace('#', '')}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Navigation
