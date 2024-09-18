// app/business/[slug]/premium/page.tsx
import { notFound } from 'next/navigation'
import { getBusinessBySlug, Business } from '@/lib/serverUtils'
import PayStackButton from '@/components/PayStackButton'

interface PremiumPageProps {
	params: { slug: string }
}

export default function PremiumPage({ params }: PremiumPageProps) {
	const business = getBusinessBySlug(params.slug)

	if (!business) {
		return (
			<div className='min-h-screen bg-background text-foreground flex flex-col'>
				<h1>Business not found</h1>
			</div>
		)
	}

	if (business.isPaid) {
		return (
			<div className='min-h-screen bg-background text-foreground flex flex-col'>
				<main className='container mx-auto px-4 py-16 max-w-3xl flex-grow text-center'>
					<h1 className='text-4xl font-bold mb-4'>
						Premium Content for {business.name}
					</h1>
					{/* Add your premium content here */}
					<p className='text-lg mb-8'>
						Here is the exclusive content behind the paywall.
					</p>
				</main>

				<footer className='text-center py-4 text-muted-foreground bg-secondary'>
					<p className='text-sm'>
						© {new Date().getFullYear()} {business.name}. All rights reserved.
					</p>
				</footer>
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col justify-center items-center'>
			<main className='container mx-auto px-4 py-16 max-w-md text-center'>
				<h1 className='text-3xl font-bold mb-4'>Unlock Premium Content</h1>
				<p className='mb-8'>
					Pay $10 to access exclusive features and content.
				</p>
				<PayStackButton slug={business.slug} />
			</main>
		</div>
	)
}
