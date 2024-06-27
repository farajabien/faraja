'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const sections = ['#process', '#whyme', '#portfolio', '#contact']

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
		<div className='fixed top-0 left-0 right-0 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50'>
			<nav className='bg-white shadow rounded-lg'>
				<ul className='flex flex-wrap justify-center space-x-1 md:space-x-4 p-2'>
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
