// components/NamecheapBanner.tsx
import { ArrowRight, CheckCircle, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NamecheapBanner = () => {
	const features = [
		{ id: 1, text: 'Reliable Hosting' },
		{ id: 2, text: 'Domain Registration' },
		{ id: 3, text: 'SSL Certificates' },
		{ id: 4, text: '24/7 Support' },
	]

	return (
		<div className='my-12 text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-100 dark:border-blue-900'>
			<div className='flex items-center justify-center mb-6'>
				<Globe className='h-8 w-8 text-primary mr-3' />
				<h2 className='text-2xl font-bold'>Launch Your SaaS with Namecheap</h2>
			</div>

			<div className='relative max-w-4xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300'>
				<Link
					href='https://namecheap.pxf.io/c/5455551/1176637/5618'
					target='_blank'
					rel='noopener noreferrer'
					className='block relative max-w-4xl mx-auto mb-8 hover:scale-[1.02] transition-transform duration-300'>
					<Image
						src='https://app.impact.com/display-ad/5618-1176637?v=2'
						alt='Namecheap Banner'
						width={1200}
						height={600}
						className='w-full h-full object-cover rounded-lg shadow-lg'
						priority
					/>
				</Link>
			</div>

			<p className='text-muted-foreground mb-8 max-w-2xl mx-auto px-4'>
				Get started with reliable hosting, domains, and SSL certificates at
				competitive prices. Perfect for launching your next SaaS project.
			</p>

			<div className='flex flex-wrap gap-4 justify-center mb-8 px-4'>
				{features.map((feature) => (
					<div
						key={feature.id}
						className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300'>
						<CheckCircle className='h-4 w-4 text-green-500' />
						<span>{feature.text}</span>
					</div>
				))}
			</div>

			<Button
				size='lg'
				className='bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300'
				asChild>
				<Link
					href='https://namecheap.pxf.io/saasbuilder'
					target='_blank'
					rel='noopener noreferrer'
					className='flex items-center gap-2'>
					<Globe className='h-5 w-5' />
					Get Started with Namecheap
					<ArrowRight className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
				</Link>
			</Button>

			{/* Tracking Pixel */}
			<Image
				height={0}
				width={0}
				src='https://namecheap.pxf.io/i/5455551/1176637/5618'
				alt=''
				className='w-0 h-0 absolute invisible'
				priority={false}
			/>
		</div>
	)
}

export default NamecheapBanner
