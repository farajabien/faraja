'use client'
import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from './ui/card'
import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'
import BookCalendly from './BookCalendly'
import PayButton from './payment/PayButton'
import ServicePurchaseButton from './payment/ServicePurchaseButton'
import { getPriceInKSH } from '@/lib/utils'

export default function ServiceCard({
	pkg,
	isBrandingMarketing,
}: {
	pkg: {
		name: string
		price: string
		turnaround: string
		includes: string[]
		isPopular: boolean
	}
	isBrandingMarketing?: boolean
}) {
	return (
		<Card className={`relative ${pkg.isPopular ? 'border-primary' : ''}`}>
			{pkg.isPopular && (
				<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
					Most Popular
				</div>
			)}
			<CardHeader>
				<CardTitle className='text-xl mb-2'>{pkg.name}</CardTitle>
				<p className='text-lg font-semibold text-primary'>{pkg.price}</p>
				<p className='text-sm text-muted-foreground'>
					Turnaround: {pkg.turnaround}
				</p>
			</CardHeader>
			<CardContent>
				<h5 className='font-semibold mb-4'>Includes:</h5>
				<ul className='space-y-2'>
					{pkg.includes.map((item, idx) => (
						<li key={idx} className='flex items-start gap-2'>
							<CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
							<span className='text-sm'>{item}</span>
						</li>
					))}
				</ul>
				<>
					{/* If it's a branding/marketing service, show purchase button; otherwise, show a discovery call button */}
					{isBrandingMarketing ? (
						<ServicePurchaseButton
							serviceName={pkg.name}
							email='client-email@example.com' // Replace this with the actual client email
							amount={getPriceInKSH(pkg.price)}
						/>
					) : (
						<BookCalendly text='Schedule Free Discovery Call' />
					)}
				</>
			</CardContent>
		</Card>
	)
}
