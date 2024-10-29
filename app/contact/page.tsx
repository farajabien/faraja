// pages/contact.js
import React from 'react'
import Link from 'next/link'
import BookCalendly from '@/components/BookCalendly'

const Contact = () => {
	return (
		<div className='min-h-screen bg-background flex flex-col items-center justify-center text-center'>
			<h1 className='text-4xl md:text-6xl font-bold mb-6'>Contact Us</h1>
			<p className='text-xl md:text-2xl text-muted-foreground mb-8'>
				We would love to hear from you!
			</p>
			<div className='text-lg mb-6'>
				<p className='mb-2'>You can reach us at:</p>
				<div className='text-lg mb-6'>
					<p className='mb-2'>You can reach us at:</p>
					<p className='font-semibold'>
						Email:
						<Link
							href='mailto:faraja.bien@gmail.com'
							className=' hover:underline ml-1'>
							faraja.bien@gmail.com
						</Link>
					</p>
					<p className='font-semibold'>
						Phone:
						<Link href='tel:+254793643308' className=' hover:underline ml-1'>
							+254 793 643 308
						</Link>
					</p>
				</div>
			</div>
			<Link
				href='https://wa.me/254793643308'
				target='_blank'
				rel='noopener noreferrer'
				className='inline-flex items-center px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600'>
				Contact Me via WhatsApp
			</Link>

			<BookCalendly
				text='            Book a meeting with us
            '
				className='w-1/2 mx-auto my-5'
			/>
		</div>
	)
}

export default Contact
