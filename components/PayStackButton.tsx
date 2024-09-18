// components/PayStackButton.tsx
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { PaystackButton as ReactPaystackButton } from 'react-paystack'
import { Button } from '@/components/ui/button'

interface PayStackButtonProps {
	slug: string
}

const PayStackButton: React.FC<PayStackButtonProps> = ({ slug }) => {
	const router = useRouter()

	const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''

	const handlePaymentSuccess = async (reference: any) => {
		try {
			const response = await fetch('/api/payment/verify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					reference: reference.reference,
					slug,
				}),
			})

			const data = await response.json()

			if (response.ok) {
				alert('Payment successful. Access granted.')
				router.push(`/business/${slug}`)
			} else {
				alert(`Payment verification failed: ${data.error}`)
			}
		} catch (error) {
			console.error('Payment verification error:', error)
			alert('Failed to verify payment. Please contact support.')
		}
	}

	const componentProps = {
		email: 'user@example.com', // Replace with the user's email from your auth system
		amount: 1000, // Amount in kobo ($10)
		publicKey,
		text: 'Pay $10 to Access',
		onSuccess: handlePaymentSuccess,
		onClose: () => {
			console.log('Payment dialog closed')
		},
	}

	return <ReactPaystackButton {...componentProps} />
}

export default PayStackButton
