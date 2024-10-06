import React from 'react'
import ResumeForm from './_components/ResumeForm'
import ResumePreview from './_components/ResumePreview'
import FeatureRequestForm from './_components/FesutureRequest'
export const metadata = {
	title: 'Simple Resume Builder',
	description: 'Create a clean, consistent resume easily and for free',
}

export default function ResumeBuilderPage() {
	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-6'>Simple Resume Builder</h1>
			<ResumeForm />
			<ResumePreview />
			<FeatureRequestForm />
		</div>
	)
}
