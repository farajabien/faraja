'use client'

import { useState, useEffect } from 'react'

interface BusinessFormProps {
	onSubmit: (data: FormData) => void
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState<File | null>(null)
	const [email, setEmail] = useState('')
	const [slug, setSlug] = useState('')
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!name || !description || !email) {
			alert('Please fill in all required fields.')
			return
		}

		const formData = new FormData()
		formData.append('name', name)
		formData.append('description', description)
		formData.append('email', email)
		formData.append('slug', slug)
		if (image) formData.append('image', image)

		onSubmit(formData)
	}

	useEffect(() => {
		setSlug(name.toLowerCase().replace(/ /g, '-'))
	}, [name])

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div>
				<label className='block text-sm font-medium'>Business Name</label>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className='mt-1 block w-full border border-gray-300 rounded-md p-2'
				/>
			</div>
			<div>
				<label className='block text-sm font-medium'>Description</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					className='mt-1 block w-full border border-gray-300 rounded-md p-2'></textarea>
			</div>
			<div>
				<label className='block text-sm font-medium'>Logo/Banner Image</label>
				<input
					type='file'
					accept='image/*'
					onChange={(e) => setImage(e.target.files?.[0] || null)}
					className='mt-1 block w-full'
				/>
			</div>
			<div>
				<label className='block text-sm font-medium'>Contact Email</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className='mt-1 block w-full border border-gray-300 rounded-md p-2'
				/>
			</div>
			<button
				type='submit'
				className='bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'>
				Submit
			</button>
		</form>
	)
}

export default BusinessForm
