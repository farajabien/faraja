import React from 'react'
import Link from 'next/link'
import { allPackages } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import ServiceCard from '@/components/PackageCard'
import AddOnsSection from '@/components/AddOnSection'

type Params = Promise<{ pkg: string }>

const PackageNotFound = ({ packageName }: { packageName: string }) => (
	<div className='container mx-auto px-4 py-16'>
		<Card className='max-w-lg mx-auto text-center p-8'>
			<h1 className='text-2xl font-bold text-primary mb-4'>
				Package Not Found
			</h1>
			<p className='text-muted-foreground mb-6'>
				We couldn&apos;t find a package matching: {packageName}
			</p>
			<Button asChild>
				<Link href='/services'>
					<ArrowLeft className='w-4 h-4 mr-2' />
					View All Packages
				</Link>
			</Button>
		</Card>
	</div>
)

const NavigationButton = () => (
	<Button variant='ghost' asChild size='sm'>
		<Link href='/services'>
			<ArrowLeft className='w-4 h-4 mr-2' />
			Back to Services
		</Link>
	</Button>
)

const OtherPackageCard = ({ pkg }: { pkg: (typeof allPackages)[0] }) => (
	<Card
		key={pkg.name}
		className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
			pkg.isPopular ? 'border-primary' : ''
		}`}>
		{pkg.isPopular && (
			<div className='absolute top-0 right-0'>
				<Badge className='rounded-bl-lg rounded-tr-lg'>Most Popular</Badge>
			</div>
		)}

		<CardHeader>
			<h3 className='text-xl font-bold group-hover:text-primary transition-colors'>
				{pkg.name}
			</h3>
			<div className='flex items-center text-muted-foreground'>
				<Clock className='w-4 h-4 mr-2' />
				<span className='text-sm'>{pkg.turnaround}</span>
			</div>
		</CardHeader>

		<CardFooter>
			<Button
				asChild
				variant={pkg.isPopular ? 'default' : 'outline'}
				className='w-full'>
				<Link href={`/services/${encodeURIComponent(pkg.name)}`}>
					Learn More
					<ArrowRight className='w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity' />
				</Link>
			</Button>
		</CardFooter>
	</Card>
)

const OtherPackagesSection = ({
	packages,
}: {
	packages: typeof allPackages
}) => (
	<section className='mb-16'>
		<div className='flex justify-between items-center mb-8'>
			<h2 className='text-2xl font-semibold text-primary'>
				Explore Other Packages
			</h2>
			<Button variant='ghost' asChild>
				<Link href='/services'>
					View All
					<ArrowRight className='w-4 h-4 ml-2' />
				</Link>
			</Button>
		</div>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{packages.map((pkg) => (
				<OtherPackageCard key={pkg.name} pkg={pkg} />
			))}
		</div>
	</section>
)

export default async function PackagePage({ params }: { params: Params }) {
	const { pkg: pkgSlug } = await params

	const decodedPkg = decodeURIComponent(pkgSlug)
	const pkg = allPackages.find((pkg) => pkg.name === decodedPkg)

	if (!pkg) {
		return <PackageNotFound packageName={decodedPkg} />
	}

	const otherPackages = allPackages.filter((p) => p.name !== decodedPkg)

	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12'>
				<NavigationButton />

				<div className='max-w-4xl mx-auto mb-16'>
					<ServiceCard pkg={pkg} />
				</div>

				<OtherPackagesSection packages={otherPackages} />

				<AddOnsSection />
			</div>
		</div>
	)
}
