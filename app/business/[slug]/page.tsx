// app/business/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getBusinesses, Business } from '@/lib/serverUtils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import SubscriptionForm from '../_components/SubscriptionForm'

interface BusinessPageProps {
	params: { slug: string }
}

export default function BusinessPage({ params }: BusinessPageProps) {
	const businesses = getBusinesses()

	console.log('businesses here: ', businesses[0].slug)
	console.log('params here: ', params.slug)
	console.log(
		'businesses[0].slug === params.slug: ',
		businesses[0].slug === params.slug
	)

	const business = businesses.find((b) => b.slug === params.slug)

	if (!business) {
		notFound()
	}

	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 py-16 max-w-3xl flex-grow text-center'>
				<h1 className='text-4xl font-bold mb-4'>{business.name}</h1>
				{business.imageUrl && (
					<Image
						src={business.imageUrl}
						alt={`${business.name} Logo`}
						width={128}
						height={128}
						className='mx-auto mb-4 object-contain'
					/>
				)}
				<p className='text-lg mb-8'>{business.description}</p>
				<SubscriptionForm businessSlug={business.slug} />
			</main>

			<footer className='text-center py-4 text-muted-foreground bg-secondary'>
				<p className='text-sm'>
					© {new Date().getFullYear()} {business.name}. All rights reserved.
				</p>
			</footer>
		</div>
	)
}
