'use client'
import React from 'react'
import { PopupButton } from 'react-calendly'

export default function BookCalendly() {
	return (
		<PopupButton
			url='https://calendly.com/farajabien'
			rootElement={
				typeof document !== 'undefined'
					? document.getElementById('root')!
					: undefined
			}
			text='Schedule a Call'
			className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
		/>
	)
}
