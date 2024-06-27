import CalendlyComponent from '@/components/custom/calendly'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import Navigation from '@/components/sections/Navigation'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyMeSection from '@/components/sections/WhyMeSection'

import React from 'react'

export default function Home() {
	return (
		<div className='font-sans bg-gray-100 text-gray-900 scroll-smooth'>
			<Navigation />
			<HeroSection />
			<ProcessSection />
			<WhyMeSection />
			<PortfolioSection />
			<ContactSection />
		</div>
	)
}
