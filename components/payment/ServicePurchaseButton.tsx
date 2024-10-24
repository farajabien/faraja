'use client'
import React from 'react'
import { toast } from 'sonner'
import PayButton from './PayButton' // Adjust the import path as necessary

interface ServicePurchaseButtonProps {
	serviceName: string
	email: string
	amount: number // Amount should be in KES, convert to cents for Paystack
}
const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''

const ServicePurchaseButton: React.FC<ServicePurchaseButtonProps> = ({
	serviceName,
	email,
	amount,
}) => {
	const handleSuccess = (reference: string) => {
		toast.success(`Order placed successfully! Reference: ${reference}`)
		// Optionally, you can handle post-success logic here, like updating the database
	}

	const handleClose = () => {
		toast.info('Payment closed. Please try again.')
	}

	const componentConfig = {
		email,
		amount: amount * 100, // Convert KES to cents
		publicKey,
		text: `Purchase Now`,
		currency: 'KES',
	}

	return (
		<PayButton
			config={componentConfig}
			onSuccess={handleSuccess}
			onClose={handleClose}
		/>
	)
}

export default ServicePurchaseButton
