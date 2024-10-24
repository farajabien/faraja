'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const PayButtonPageClient = dynamic(
	() => import('@/components/PayButtonPageClient'),
	{
		ssr: false,
	}
)

export default function ClientWrapper() {
	return <PayButtonPageClient />
}
