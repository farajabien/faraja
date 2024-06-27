'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { CalendarDays } from 'lucide-react'

export default function HeroSection() {
	return (
		<section
			id='hero'
			className='bg-white hover:shadow-inner transition-all duration-500 mt-5'>
			<section className='text-center py-20 mx-auto max-4xl'>
				<h1 className='text-5xl font-bold'>Web App Prototypes in 4 weeks!</h1>
				<p className='text-xl mt-4'>Validate Your Idea, Save Time & Money </p>
				<span className='text-4xl mt-4'>🫶🏾</span>

				<Image
					src='/images/myprofile.png'
					width={400}
					height={300}
					alt='Hero Image'
					loading='lazy'
					className='mx-auto transition-all	duration-500	rounded-full grayscale hover:grayscale-0'
				/>
				<div className='mx-auto  max-w-prose'>
					<p className='text-lg w-fit mx-2'>
						Hi, I&apos;m Faraja Bien 🙃, a web developer specializing in
						building prototypes for startups and entrepreneurs 😎. I can help
						you validate your idea and save time and money by building a working
						prototype in 4 weeks or less 🙈.
					</p>
				</div>
				<Link
					href='https://calendly.com/farajabien/30min'
					target='_blank'
					rel='noopener noreferrer'>
					<Button
						className='m-2 w-fit py-10 bg-gray-900 text-white text-2xl rounded-full
    hover:bg-gray-300 hover:text-gray-900 border-gray-900 transition-all duration-500'>
						Book a Free Consultation
						<CalendarDays className='ml-2 text-orange-400' size={32} />
					</Button>
				</Link>
			</section>
		</section>
	)
}
