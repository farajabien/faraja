'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { Button } from '../ui/button'
import { Calendar } from 'lucide-react'

export default function HeroSection() {
	return (
		<section className='bg-white'>
			<section className='text-center py-20 mx-auto max-4xl'>
				<h1 className='text-5xl font-bold'>Web App Prototypes in 4 weeks!</h1>

				<p className='text-xl mt-4'>Validate Your Idea, Save Time & Money</p>
				<Image
					src='/images/myprofile.png'
					width={400}
					height={300}
					alt='Hero Image'
					className='mx-auto mt-8  m-2'
				/>
				<Link
					href='https://calendly.com/farajabien/30min'
					target='_blank'
					rel='noopener noreferrer'>
					<Button
						className='m-2 w-fit py-10 bg-black text-white text-2xl rounded-full
    hover:bg-gray-300 hover:text-black border-black transition-all duration-500'>
						Book a Free Consultation
						<Calendar className='ml-2' />
					</Button>
				</Link>
			</section>
		</section>
	)
}
