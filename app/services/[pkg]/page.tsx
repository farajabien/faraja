import AddOnsSection from '@/components/AddOnSection'
import ServiceCard from '@/components/ServiceCard'
import { Package, allPackages, ServiceType } from '@/lib/utils'
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
			<h2>Other Packages</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{otherPackages.map((otherPkg) => (
					<ServiceCard key={otherPkg.name} pkg={otherPkg} />
				))}
			</div>
		</div>
	)
}
