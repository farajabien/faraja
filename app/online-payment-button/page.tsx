import dynamic from 'next/dynamic'
import React from 'react'

const PayButtonPageClient = dynamic(
	() => import('@/components/PayButtonPageClient'),
	{
		ssr: false,
	}
)

export default function PaymentDemo() {
	return <PayButtonPageClient />
}
