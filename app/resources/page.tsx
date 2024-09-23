import React from 'react'
import { Metadata } from 'next'
import { Category } from './types'
import { resources } from './data'
import CategoryBubble from './_components/CategoryBubble'
import CategorySection from './_components/CategorySection'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'

export const metadata: Metadata = {
	title: 'Resources by Bienvenu Faraja - Tools & Templates',
	description:
		'Explore a curated list of resources including tools, templates, and guides designed by Bienvenu Faraja to empower developers and entrepreneurs in their digital journey.',
}

// Main component
export default function ResourcesPage() {
	return (
		<div className='min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark flex flex-col'>
			<main className='container mx-auto px-4 py-16 max-w-4xl flex-grow'>
				<MyBreadcrumb
					items={[
						{
							label: 'Home',
							href: '/',
						},
						{
							label: 'Resources',
							href: '/resources',
						},
					]}
				/>
				<h1 className='text-4xl font-bold mb-8 text-center'>Resources</h1>

				<div className='flex justify-center space-x-8 mb-12'>
					{resources.map((category: Category) => (
						<CategoryBubble
							key={category.category}
							icon={category.icon}
							label={category.category}
							count={category.items.length}
						/>
					))}
				</div>

				{resources.map((category: Category) => (
					<CategorySection key={category.category} category={category} />
				))}
			</main>

			<footer className='text-center py-6 text-muted-foreground bg-secondary dark:bg-secondary-dark'>
				<p className='text-sm'>
					© {new Date().getFullYear()} Bienvenu Faraja. All Rights Reserved.
				</p>
			</footer>
		</div>
	)
}
