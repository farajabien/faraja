import AddOnsSection from '@/components/AddOnSection'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Package, allPackages, ServiceType } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Params = Promise<{ pkg: string }>
export default async function PackagePage({ params }: { params: Params }) {
	const { pkg: pkgParam } = await params

	const decodedPkg = decodeURIComponent(pkgParam)

	const pkg = allPackages.find((pkg) => pkg.name === decodedPkg)

	if (!pkg) {
		return (
			<div>
				<h1>Service not found</h1>
				<p>No service found for: {decodedPkg}</p>
			</div>
		)
	}

	// Get the rest of the packages excluding the currently displayed package
	const otherPackages = allPackages.filter((p) => p.name !== decodedPkg)

	return (
		<div>
			<ServiceCard pkg={pkg} isBrandingMarketing />
			<AddOnsSection />
			<h2 className='text-2xl font-semibold mb-6 text-primary'>
				Other Packages
			</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{otherPackages.map((otherPkg) => (
					<Card
						key={pkg.name}
						className={`p-6 relative ${pkg.isPopular ? 'border-primary' : ''}`}>
						{pkg.isPopular && (
							<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
								Most Popular
							</div>
						)}
						<h3 className='text-2xl font-bold mb-2'>{pkg.name}</h3>
						<p className='text-sm text-muted-foreground mb-6'>
							Timeline: {pkg.turnaround}{' '}
						</p>

						<Button
							asChild
							className='w-full  bottom-0 left-0 right-0 absolute'>
							<Link href={`/services/${encodeURIComponent(pkg.name)}`}>
								Get Started
							</Link>
						</Button>
					</Card>
				))}
			</div>
		</div>
	)
}
