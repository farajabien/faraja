'use client'

import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useResumeStore } from '@/hooks/use-resume'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const sections = [
	{ id: 'personal', title: 'Personal Information' },
	{ id: 'summary', title: 'Professional Summary' },
	{ id: 'experience', title: 'Work Experience' },
	{ id: 'education', title: 'Education' },
	{ id: 'skills', title: 'Skills & Competencies' },
	{ id: 'projects', title: 'Projects' },
	{ id: 'certifications', title: 'Certifications' },
	{ id: 'awards', title: 'Awards & Achievements' },
	{ id: 'volunteer', title: 'Volunteer Experience' },
	{ id: 'languages', title: 'Languages' },
	{ id: 'publications', title: 'Publications' },
	{ id: 'references', title: 'References' },
]

export default function ResumeForm() {
	const { currentSection, updateSection, nextSection, completedSections } =
		useResumeStore()

	const currentSectionData = sections[currentSection] || sections[0]

	return (
		<Dialog open={currentSection < sections.length}>
			<DialogTrigger asChild>
				<Button variant='outline'>Open Resume Form</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{currentSectionData.title}</DialogTitle>
				</DialogHeader>
				<div className='flex justify-between items-center mb-4'>
					<div className='flex space-x-2'>
						{sections.map((section, index) => (
							<span key={section.id} className='text-sm'>
								{completedSections.includes(section.id) ? (
									<CheckCircle className='text-green-500' size={16} />
								) : (
									<Circle
										className={
											index === currentSection
												? 'text-blue-500'
												: 'text-gray-300'
										}
										size={16}
									/>
								)}
							</span>
						))}
					</div>
				</div>
				<Progress
					value={(currentSection / sections.length) * 100}
					className='mb-4'
				/>
				{/* Add form fields for the current section */}
				<Button onClick={nextSection}>Next</Button>
			</DialogContent>
		</Dialog>
	)
}
