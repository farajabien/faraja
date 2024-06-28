import Logo from '@/components/custom/Logo'
import CalendlyComponent from '@/components/custom/calendly'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import Navigation from '@/components/sections/Navigation'
import PortfolioSection from '@/components/sections/PortfolioSection'
import Pricing from '@/components/sections/Pricing'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyMeSection from '@/components/sections/WhyMeSection'
import Link from 'next/link'

import React from 'react'

export default function Home() {
	return (
		<div className='font-sans bg-gray-100 text-gray-900 scroll-smooth'>
			<Navigation />
			<HeroSection />
			<ProcessSection />
			<WhyMeSection />
			<PortfolioSection />
			<Pricing />
			<ContactSection />
			<footer className='mt-8 text-center text-gray-500'>
				<p>
					<Link href='/' className='flex justify-center gap-2 p-5'>
						<Logo />
					</Link>{' '}
					All rights reserved. &copy; {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	)
}
