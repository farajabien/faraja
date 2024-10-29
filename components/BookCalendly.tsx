'use client'
import { ArrowRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'

export default function BookCalendly({ text }: { text?: string }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<PopupButton
			url='https://calendly.com/farajabien/30min'
			rootElement={document.body}
			// @ts-ignore
			text={
				<div className='flex items-center justify-center'>
					<span>{text ?? 'Schedule a Call'}</span>
					<ArrowRightIcon className='w-5 h-5 ml-2' /> {/* Arrow icon */}
				</div>
			}
			prefill={{
				name: 'Your Name',
				email: 'your@email.com',
				customAnswers: {
					a1: 'Meeting with Bienvenu Faraja',
					a2: 'Discuss potential collaboration or project',
				},
			}}
			className='inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full bg-green-500'
		/>
	)
}
