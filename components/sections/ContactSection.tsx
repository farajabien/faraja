import React from 'react'
import { Instagram, Linkedin, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CalendlyComponent from '../custom/calendly'
export default function ContactSection() {
	return (
		<section className='py-20 bg-gray-200 hover:shadow-inner transition-all duration-500'>
			<div className='mx-auto text-center'>
				<h2 className='m-2 px-16 py-6 bg-black text-white text-2xl  border-black  hover:text-orange-500 transition-all duration-500'>
					Book Free Consultation{' '}
				</h2>
				<CalendlyComponent />

				{/* Social Media Links */}
				<div className='mt-8 mx-auto'>
					<div className='flex justify-center gap-5'>
						<Link
							href='https://x.com/farajabien?s=21'
							target='_blank'
							rel='noopener noreferrer'>
							<X className='hover:filter-none filter grayscale' />
						</Link>
						<Link
							href='https://www.linkedin.com/in/bienvenufaraja/'
							target='_blank'
							rel='noopener noreferrer'>
							<Linkedin className='hover:filter-none filter grayscale' />
						</Link>
						<Link
							href='https://vm.tiktok.com/ZMrMhYEhW/'
							target='_blank'
							rel='noopener noreferrer'>
							TikTok
						</Link>
						<Link
							href='https://www.instagram.com/faraja_bien?igsh=MTZnM2pxOTlmdW13bA%3D%3D&utm_source=qr'
							target='_blank'
							rel='noopener noreferrer'>
							<Instagram className='hover:filter-none filter grayscale' />
						</Link>
					</div>
				</div>
			</div>
			<footer className='mt-8 text-center text-gray-500'>
				<p>
					&copy; {new Date().getFullYear()} Faraja Bien. All rights reserved.
				</p>
			</footer>
		</section>
	)
}
