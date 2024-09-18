import React from 'react'

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<section className='py-16'>
			<h2 className='text-3xl font-bold mb-8 text-center'>{title}</h2>
			<div className='container mx-auto px-4 max-w-4xl'>{children}</div>
		</section>
	)
}

export default Section
