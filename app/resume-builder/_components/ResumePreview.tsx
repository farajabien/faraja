'use client'

import React from 'react'
import { useResumeStore } from '@/hooks/use-resume'
import { toast } from 'sonner'
export default function ResumePreview() {
	const { resumeData } = useResumeStore()

	return (
		<div className='mt-8'>
			<h2 className='text-2xl font-bold mb-4'>Resume Preview</h2>

			<pre>{JSON.stringify(resumeData, null, 2)}</pre>
			<button
				onClick={() => {
					/* Logic to download PDF */
					toast.success('Downloading PDF...')
				}}>
				Download PDF
			</button>
		</div>
	)
}
