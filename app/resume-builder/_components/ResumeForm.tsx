'use client'

import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useResumeStore, sections } from '@/hooks/use-resume'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ResumeFormFields from './ResumeFormFields'

export default function ResumeForm() {
	const { currentSection, nextSection, completedSections } = useResumeStore()

	const currentSectionData = sections[currentSection] || sections[0]

	const [isOpen, setIsOpen] = React.useState(false)
	const isCompleted = currentSection >= sections.length

	return (
		<Dialog open={isOpen}>
			<DialogTrigger asChild>
				<Button variant='outline' onClick={() => setIsOpen(true)}>
					Open Resume Form
				</Button>
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
				<ResumeFormFields />

				{!isCompleted ? (
					<Button onClick={nextSection}>Next</Button>
				) : (
					<Button onClick={() => setIsOpen(false)}>Finish</Button>
				)}

				{currentSection >= sections.length && (
					<Button onClick={() => setIsOpen(false)}>Close</Button>
				)}
			</DialogContent>
		</Dialog>
	)
}
