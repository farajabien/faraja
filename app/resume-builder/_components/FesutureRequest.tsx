'use client'

import React, { useState } from 'react'

export default function FeatureRequestForm() {
	const [request, setRequest] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Logic to submit the feature request
		console.log('Feature request submitted:', request)
		setRequest('')
	}

	return (
		<form onSubmit={handleSubmit} className='mt-12'>
			<h2 className='text-2xl font-bold mb-4'>
				Feature Request / Recommendation
			</h2>
			<textarea
				value={request}
				onChange={(e) => setRequest(e.target.value)}
				className='w-full p-2 border rounded'
				rows={4}
				placeholder='Enter your feature request or recommendation here'
			/>
			<button
				type='submit'
				className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
				Submit
			</button>
		</form>
	)
}
