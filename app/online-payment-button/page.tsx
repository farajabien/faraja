import PayButtonPageClient from '@/components/PayButtonPageClient'
import React from 'react'

export default function PaymentDemo() {
	if (typeof window !== 'undefined') {
		return <PayButtonPageClient />
	} else {
		return <div>Loading...</div>
	}
}
