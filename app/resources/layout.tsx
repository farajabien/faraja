// app/resources/layout.tsx
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function ResourcesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-8'>
				<div className='max-w-4xl mx-auto'>
					{/* Breadcrumb */}
					<div className='mb-8'>
						<Link href='/'>
							<Button variant='ghost' className='group flex items-center gap-2'>
								<ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
								Back to Home
							</Button>
						</Link>
					</div>

					{/* Content */}
					{children}
				</div>
			</div>
		</div>
	)
}
