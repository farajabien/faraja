import React from 'react'
import { Instagram, Linkedin, X } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import CalendlyComponent from '../custom/calendly'
export default function ContactSection() {
	return (
		<section
			id='contact'
			className='py-20 bg-gray-200 hover:shadow-inner transition-all duration-500'>
			<div className='mx-auto text-center'>
				<h2 className='m-2 px-16 py-6 bg-gray-900 text-white text-2xl  border-gray-900  hover:text-orange-500 transition-all duration-500'>
					Book Free Consultation{' '}
				</h2>
				<CalendlyComponent />
				<FAQSection />

				{/* Social Media Links */}
				<div className='mt-8 mx-auto'>
					<h3 className='text-3xl font-bold my-2'>Connect with me</h3>
					<div className='flex justify-center gap-5 '>
						<Link
							href='https://x.com/farajabien?s=21'
							target='_blank'
							rel='noopener noreferrer'>
							<X className='hover:filter-none text-orange-400 grayscale hover:grayscale-0 transition-all duration-500 filter ' />
						</Link>
						<Link
							href='https://www.linkedin.com/in/bienvenufaraja/'
							target='_blank'
							rel='noopener noreferrer'>
							<Linkedin className='hover:filter-none text-orange-400 grayscale hover:grayscale-0 transition-all duration-500 filter' />
						</Link>
						{/* <Link
							href='https://vm.tiktok.com/ZMrMhYEhW/'
							target='_blank'
							rel='noopener noreferrer'>
							<p className='text-orange-400 grayscale hover:grayscale-0 transition-all duration-300'>
								TikTok
							</p>
						</Link> */}
						<Link
							href='https://www.instagram.com/faraja_bien?igsh=MTZnM2pxOTlmdW13bA%3D%3D&utm_source=qr'
							target='_blank'
							rel='noopener noreferrer'>
							<Instagram className='hover:filter-none text-orange-400 grayscale hover:grayscale-0 transition-all duration-500 filter' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

function FAQSection() {
	return (
		<section className='max-w-prose mx-auto'>
			<h2 className='text-3xl md:text-5xl font-bold mt-10 text-center hover:text-orange-500 transition-all duration-500'>
				FAQ
			</h2>
			<div className='text-center space-y-2 my-2'>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='w-full text-center p-5 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg bg-white rounded-2xl '>
							<h3>How long does it take to build a prototype?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-gray-600 text-lg'>
								The average timeline for building a prototype is 4 weeks. This
								includes discovery, design, development, and testing.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<Accordion type='single' collapsible>
					<AccordionItem value='item-2'>
						<AccordionTrigger className='w-full text-center p-5 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg bg-white rounded-2xl '>
							<h3>What technologies do you use?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-gray-600 text-lg'>
								I specialize in React, Next.js, and Tailwind CSS for building
								frontend interfaces. For backend services, I use Node.js,
								Express, and MongoDB.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<Accordion type='single' collapsible>
					<AccordionItem value='item-3'>
						<AccordionTrigger className='w-full text-center p-5 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg bg-white rounded-2xl '>
							<h3>What is the payment schedule?</h3>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-gray-600 text-lg'>
								I require a 50% deposit to start the project, with the remaining
								balance due upon completion. I accept payment via bank transfer
								or PayPal.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	)
}
