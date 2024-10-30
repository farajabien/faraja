'use client'
import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
	CardFooter,
} from './ui/card'
import { CheckCircle } from 'lucide-react'
import BookCalendly from './BookCalendly'
// import ServicePurchaseButton from './payment/ServicePurchaseButton'

import dynamic from 'next/dynamic'

// ServicePurchaseButton dynmaic
const ServicePurchaseButton = dynamic(
	() => import('./payment/ServicePurchaseButton'),
	{
		ssr: false,
	}
)

import { getPriceInKSH, PackageType } from '@/lib/utils'

export default function ServiceCard({ pkg }: { pkg: PackageType }) {
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
				<ul className='space-y-2 mb-2'>
					{pkg.deliverables.map((item, idx) => (
						<li key={idx} className='flex items-start gap-2'>
							<CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
							<span className='text-sm'>{item.name}</span>
						</li>
					))}
				</ul>
				<>
					<BookCalendly text='Schedule Free Discovery Call' />
				</>
			</CardContent>

			<CardFooter
				className={`bg-primary text-primary-foreground py-4 ${
					pkg.isPopular ? 'rounded-b-lg' : ''
				}`}>
				{pkg.overview}
			</CardFooter>
		</Card>
	)
}
