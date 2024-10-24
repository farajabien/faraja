'use client'
import React from 'react'
import { toast } from 'sonner'
import BookCalendly from '@/components/BookCalendly'
import PayButton from './payment/PayButton'
import PaymentMethods from './PaymentMethods'
import CountryProviders from './CountryProviders'
import ContactInfo from './ContactInfo'
import ReadyAlert from './ReadyAlert'

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''
const amount = 10 // Amount in KES

// types.ts
type PaymentConfig = {
	email: string
	amount: number
	publicKey: string
	text: string
	currency: string
}

const PaymentSection = ({
	config,
	onSuccess,
	onClose,
}: {
	config: PaymentConfig
	onSuccess: (reference: string) => void
	onClose: () => void
}) => (
	<section className='text-center mb-8'>
		<h2 className='text-2xl font-semibold mb-4'>Pay for Services</h2>
		<PayButton config={config} onSuccess={onSuccess} onClose={onClose} />
	</section>
)

export default function PayButtonPageClient() {
	const config = {
		email: 'faraja.bien@gmail.com',
		amount: amount * 100,
		publicKey,
		text: `Pay Now (${amount} KES)`,
		currency: 'KES',
	}

	const handleSuccess = (reference: string) => {
		toast.success('Payment Successful', { description: reference })
		console.log('Payment successful, reference:', reference)
	}

	const handleClose = () => {
		console.log('Payment dialog closed')
	}

	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 pt-8 max-w-4xl flex-grow'>
				<header className='text-center mb-12'>
					<h1 className='text-4xl font-bold mb-4'>Payment Demo</h1>
					<p className='text-lg mb-6 text-muted-foreground'>
						Experience seamless payment processing for your business.
					</p>
				</header>

				<PaymentMethods />
				<CountryProviders />
				<PaymentSection
					config={config}
					onSuccess={handleSuccess}
					onClose={handleClose}
				/>
				<ReadyAlert />

				<div className='flex flex-col items-center mb-8'>
					<BookCalendly />
					<ContactInfo />
				</div>
			</main>
		</div>
	)
}
