'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Mermaid from './Mermaid'

export default function RentPaymentProcess() {
	const [activeTab, setActiveTab] = useState('userflow')

	// Charts data with fixed syntax
	const charts = {
		userflow: {
			title: 'Rent Payment Flow',
			diagram: `graph TD
          A[Tenant receives SMS:\nRent payment + Link & Paybill] -->|Click link| B[Payment page]
          A -->|Use direct Paybill| C[Enter Paybill number]
          B --> D[View unit details & amount]
          D --> E[Click Pay button]
          E --> F[Payment form]
          F -->|Pay with Card| G[Enter card details]
          F -->|Pay with MPESA| H[Enter phone number]
          G --> I[Complete payment]
          H -->|Receive PIN prompt| J[Enter MPESA PIN]
          J --> I
          C --> I
          I -->|Success| K[Payment confirmation]`,
		},
		paymentprocess: {
			title: 'Payment Methods',
			diagram: `graph TD
          A[Payment Methods] --> B[Payment Link]
          A --> C[Direct Paybill]
          B --> D[Embedded Form]
          D --> E[Card Payment]
          D --> F[MPESA\nEnter Phone + PIN]
          C --> G[MPESA\nDirect Payment]`,
		},
		notification: {
			title: 'Payment Confirmation Flow',
			diagram: `graph TD
          A[Payment completed] --> B[Tenant receives\nconfirmation SMS]
          A --> C[Property manager\nreceives notification]
          C --> D[Payment status updated]`,
		},
		userexperience: {
			title: 'Payment Options Overview',
			diagram: `graph TD
          A[SMS with payment request] --> B[Two options]
          B --> C[Click payment link]
          B --> D[Use Paybill number]
          C --> E[Embedded form:\nCard or MPESA]
          D --> F[Direct MPESA payment]`,
		},
		comparison: {
			title: 'Payment Methods Comparison',
			diagram: `graph TD
          A[Ways to pay rent] --> B[Payment Link]
          A --> C[Direct Paybill]
          B --> D[Card payment\nEnter card details]
          B --> E[MPESA in form\nEnter phone + PIN]
          C --> F[MPESA direct\nUse Paybill number]`,
		},
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6'>Rent Payment Process Overview</h1>

			<Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
				<TabsList className='grid w-full grid-cols-5'>
					{Object.keys(charts).map((tabKey) => (
						<TabsTrigger key={tabKey} value={tabKey}>
							{tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
						</TabsTrigger>
					))}
				</TabsList>

				{Object.entries(charts).map(([tabKey, { title, diagram }]) => (
					<TabsContent key={tabKey} value={tabKey}>
						<Card>
							<CardHeader>
								<CardTitle>{title}</CardTitle>
							</CardHeader>
							<CardContent className='overflow-x-auto'>
								<Mermaid chart={diagram} />
							</CardContent>
						</Card>
					</TabsContent>
				))}
			</Tabs>
		</div>
	)
}
