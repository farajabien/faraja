'use client'
import { useRouter } from 'next/navigation'
import BusinessForm from '@/components/BusinessForm'

export default function CreateBusiness() {
	const router = useRouter()

	const handleFormSubmit = async (formData: FormData) => {
		const res = await fetch('/api/create-business', {
			method: 'POST',
			body: formData,
		})

		if (res.ok) {
			const data = await res.json()
			alert('Business created! Please check your email to confirm and publish.')
			router.push(`/business/${data.slug}`)
		} else {
			const error = await res.text()
			alert(`Error: ${error}`)
		}
	}

	return (
		<div className='container mx-auto px-4 py-16 max-w-md'>
			<h2 className='text-2xl font-semibold mb-4 text-center'>
				Create Your Business Landing Page
			</h2>
			<BusinessForm onSubmit={handleFormSubmit} />
		</div>
	)
}
