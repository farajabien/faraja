'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { CalendarDays } from 'lucide-react'
import Logo from '../custom/Logo'

export default function HeroSection() {
	return (
		<section
			id='hero'
			className='bg-white hover:shadow-inner transition-all duration-500 mt-10'>
			<section className='text-center py-20 mx-auto max-w-4xl px-2'>
				<h1 className='text-5xl font-bold'>Launch Your Web App in 4 Weeks</h1>
				<p className='text-xl mt-4 '>
					The Fastest, Most Affordable Way for Startups to Validate Their App
					Ideas{' '}
				</p>

				<span className='text-4xl mt-4'>🫶🏾</span>

				<Image
					src='/images/myprofile.png'
					width={400}
					height={300}
					alt='Hero Image'
					loading='lazy'
					className='mx-auto transition-all	duration-500	rounded-full grayscale hover:grayscale-0'
				/>
				<div className='mx-auto max-w-prose'>
					<p className='text-lg mx-2'>
						Welcome to <Logo />– your one-stop shop for rapid prototyping.
						I&lsquo;m a full-stack developer who can help you validate your app
						idea and save time & money. Ready to build your MVP in 4 weeks?
						Let&lsquo;s talk!
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
