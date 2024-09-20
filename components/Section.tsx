import React from 'react'
import { LucideIcon } from 'lucide-react'

interface SectionProps {
	title: string
	children: React.ReactNode
	icon?: LucideIcon
}

function Section({ title, children, icon: Icon }: SectionProps) {
	return (
		<section className='py-16'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<h2 className='text-3xl font-bold mb-8 text-center flex items-center justify-center'>
					{Icon && <Icon className='w-8 h-8 mr-3 text-primary' />}
					{title}
				</h2>
				<div className='bg-card dark:bg-card-dark rounded-lg shadow-md p-6'>
					{children}
				</div>
			</div>
		</section>
	)
}

export default Section
