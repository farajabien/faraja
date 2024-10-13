import PayButtonPageClient from '@/components/PayButtonPageClient'
import React from 'react'

export default function PaymentDemo() {
	if (typeof window === 'undefined') {
		return null // or a loading state
	}

	return <PayButtonPageClient />
}
