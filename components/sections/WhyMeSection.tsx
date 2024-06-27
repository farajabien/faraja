import React from 'react'
import { Card } from '../ui/card'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export type whyMePointsType = {
	title: string
	description: string
}
type ComparisonPoint = {
	feature: string
	traditionalSDLC: string
	failFastPrototyping: string
}

export default function WhyMeSection() {
	const whyMePoints: whyMePointsType[] = [
		{
			title: 'Save Time & Money',
			description: 'No more endless development cycles.',
		},
		{
			title: 'Reduce Risk',
			description: 'Test your idea before investing heavily.',
		},
		{
			title: 'Build Momentum',
			description: 'Get early users and validate demand.',
		},
		{
			title: 'Stay Agile',
			description: 'Quickly adapt to feedback and market changes.',
		},
	]

	const comparisonPoints: ComparisonPoint[] = [
		{
			feature: 'Focus',
			traditionalSDLC: 'Visual aesthetics and comprehensive planning',
			failFastPrototyping: 'Core functionality and user experience (UX)',
		},
		{
			feature: 'Starting Point',
			traditionalSDLC: 'High-fidelity mockups and detailed documentation',
			failFastPrototyping: 'Problem validation and user flow mapping',
		},
		{
			feature: 'Initial Deliverable',
			traditionalSDLC: 'Polished UI design',
			failFastPrototyping:
				'Functional prototype (using the Next.js starter kit or custom-built)',
		},
		{
			feature: 'Time to Market',
			traditionalSDLC: 'Months to years',
			failFastPrototyping: 'Weeks',
		},
		{
			feature: 'Cost',
			traditionalSDLC: 'High (designers, developers, project managers)',
			failFastPrototyping:
				'Lower (focused on prototyping and initial development)',
		},
		{
			feature: 'Flexibility',
			traditionalSDLC:
				'Difficult and expensive to change designs once development starts',
			failFastPrototyping: 'Easy to iterate and adapt based on user feedback',
		},
		{
			feature: 'Risk',
			traditionalSDLC:
				"High risk of building a product that doesn't meet user needs",
			failFastPrototyping: 'Lower risk due to early validation with real users',
		},
		{
			feature: 'User Feedback',
			traditionalSDLC: 'Gathered late in the development process',
			failFastPrototyping:
				'Integrated throughout the process, starting with the functional prototype',
		},
		{
			feature: 'Best Suited For',
			traditionalSDLC: 'Well-defined requirements and established companies',
			failFastPrototyping:
				'Startups and early-stage projects that need to validate their idea quickly and efficiently, or projects with evolving requirements',
		},
	]
	return (
		<section
			id='whyme'
			className='py-20 bg-gray-100 hover:shadow-inner transition-all duration-500 px-5'>
			<div className='max-w-prose md:max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-5xl font-bold text-center  hover:text-orange-500 transition-all duration-500'>
					Why Fail Fast Works
				</h2>
				<div className='text-center'>
					<p className='text-gray-600 text-lg mt-2'>
						Building a prototype in 4 weeks or less can help you:
					</p>
				</div>
				<div className='mx-2 mt-10 grid grid-cols-2 md:grid-cols-4 gap-2'>
					{whyMePoints.map((point: whyMePointsType, index: number) => (
						<Card
							key={index}
							className='bg-white rounded-2xl shadow-lg text-center p-5 border-gray-900 grayscale hover:grayscale-0 transition-all duration-500'>
							<h3 className='text-2xl font-semibold  hover:text-orange-500 transition-all duration-500'>
								{point.title}
							</h3>
							<p>{point.description}</p>
						</Card>
					))}
				</div>
				<div className='max-w-prose mx-auto'>
					{' '}
					<h2 className='text-3xl md:text-5xl font-bold text-center my-16  hover:text-orange-500 transition-all duration-500'>
						SDLC vs Fail Fast
					</h2>
					<Table
						className='mx-auto max-w-prose
						border-gray-900 border-2
						'>
						<TableCaption>SDLC vs Fail Fast</TableCaption>
						<TableHeader>
							<TableHead>Feature</TableHead>
							<TableHead>SDLC</TableHead>
							<TableHead>Fail Fast</TableHead>
						</TableHeader>

						<TableBody>
							{comparisonPoints.map((point: ComparisonPoint, index: number) => (
								<TableRow
									key={index}
									className={`${index % 2 ? 'bg-gray-100' : 'bg-white'}`}>
									<TableCell>{point.feature}</TableCell>
									<TableCell className='bg-blue-50'>
										{point.traditionalSDLC}
									</TableCell>
									<TableCell className='bg-green-50'>
										{point.failFastPrototyping}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</section>
	)
}
