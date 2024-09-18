// components/PayStackButton.tsx
'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
interface PayStackButtonProps {
	slug: string
}

const PayStackButton: React.FC<PayStackButtonProps> = ({ slug }) => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handlePayment = async () => {
		setLoading(true)
		try {
			// Initialize PayStack payment
			const response = await axios.post('/api/payment/initiate', { slug })
			const { authorizationUrl } = response.data

			// Redirect to PayStack payment
			window.location.href = authorizationUrl
		} catch (error) {
			console.error('Payment initiation error:', error)
			alert('Failed to initiate payment. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Button onClick={handlePayment} disabled={loading}>
			{loading ? 'Processing...' : 'Pay $10 to Access'}
		</Button>
	)
}

export default PayStackButton
