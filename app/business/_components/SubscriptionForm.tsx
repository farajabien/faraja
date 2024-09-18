// app/business/_components/SubscriptionForm.tsx
'use client'

import { useState } from 'react'

interface SubscriptionFormProps {
	businessSlug: string
}

export default function SubscriptionForm({
	businessSlug,
}: SubscriptionFormProps) {
	const [email, setEmail] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (email) {
			const res = await fetch(`/api/business/${businessSlug}/subscribe`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})

			const data = await res.json()

			if (res.ok) {
				alert('Thank you for subscribing!')
				setEmail('')
			} else {
				alert(`Error: ${data.error || 'Something went wrong.'}`)
			}
		}
	}

	return (
		<form
			className='flex flex-col items-center space-y-4'
			onSubmit={handleSubmit}>
			<input
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Enter your email'
				required
				className='w-full max-w-md border border-gray-300 rounded-md p-2'
			/>
			<button
				type='submit'
				className='bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'>
				Subscribe
			</button>
		</form>
	)
}
