import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
	ArrowRight,
	FileDown,
	CheckCircle2,
	Target,
	Users,
	Lightbulb,
	GitCommitHorizontal,
	MessageCircle,
} from 'lucide-react'

export default function ValidationFramework() {
	const steps = [
		{
			icon: Users,
			title: 'Define Your Audience',
			description:
				"Identify who you're solving the problem for with specific characteristics and needs.",
		},
		{
			icon: Target,
			title: 'Identify Pain Points',
			description:
				'Clearly articulate the problem and its impact on your target audience.',
		},
		{
			icon: Lightbulb,
			title: 'List Assumptions',
			description:
				'Document all assumptions about your audience and the problem that need validation.',
		},
		{
			icon: CheckCircle2,
			title: 'Test & Validate',
			description:
				'Create and execute tests to validate each assumption with real data.',
		},
		{
			icon: GitCommitHorizontal,
			title: 'Pivot or Proceed',
			description:
				'Based on validation results, either adjust your approach or move forward with confidence.',
		},
	]

	const frameworkBenefits = [
		'Save time and resources by validating ideas early',
		'Reduce risk of building the wrong solution',
		'Gain confidence in your business idea',
		'Build evidence for investor pitches',
		'Create a clear roadmap for development',
	]

	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Breadcrumb */}
					<div className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
						<Link href='/' className='hover:text-primary'>
							Home
						</Link>
						<span>/</span>
						<Link href='/resources' className='hover:text-primary'>
							Resources
						</Link>
						<span>/</span>
						<span>Validation Framework</span>
					</div>

					{/* Header */}
					<div className='text-center mb-12'>
						<Badge className='mb-4'>Free Resource</Badge>
						<h1 className='text-4xl font-bold mb-4'>
							Validate Before You Build
						</h1>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							A systematic approach to validating your startup idea before
							investing time and money
						</p>
					</div>

					{/* Quick Start */}
					<Card className='mb-12'>
						<CardHeader>
							<CardTitle>Get Started</CardTitle>
							<CardDescription>
								Access the complete validation framework template and start
								validating your idea today
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button size='lg' className='w-full sm:w-auto' asChild>
								<a
									href='https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'>
									<FileDown className='h-5 w-5' />
									Access Template
									<ArrowRight className='h-4 w-4' />
								</a>
							</Button>
						</CardContent>
					</Card>

					{/* Framework Overview */}
					<section className='mb-16'>
						<h2 className='text-2xl font-bold mb-6'>Framework Overview</h2>
						<div className='prose max-w-none'>
							<p className='text-muted-foreground mb-6'>
								A business can be broken down into 2 major components: the
								Problem and the Solution. This framework helps you validate both
								systematically, starting with the Problem to ensure you&apos;re
								solving a real need before investing in building a solution.
							</p>
						</div>

						<div className='grid gap-6 mt-8'>
							{steps.map((step, index) => (
								<Card key={step.title}>
									<CardContent className='flex items-start gap-4 pt-6'>
										<div className='flex-shrink-0'>
											<div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center'>
												<step.icon className='h-5 w-5 text-primary' />
											</div>
										</div>
										<div>
											<h3 className='font-semibold mb-1'>{step.title}</h3>
											<p className='text-sm text-muted-foreground'>
												{step.description}
											</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					{/* Validation Components */}
					<section className='mb-16'>
						<h2 className='text-2xl font-bold mb-6'>Validation Components</h2>
						<div className='grid md:grid-cols-2 gap-8'>
							<Card>
								<CardHeader>
									<CardTitle>Problem Validation</CardTitle>
									<CardDescription>
										Focus on validating your target audience and their pain
										points
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>The Audience</TableHead>
												<TableHead>The Pain Point</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell>Who has the problem?</TableCell>
												<TableCell>
													What specific problem do they face?
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Solution Validation</CardTitle>
									<CardDescription>
										Test your proposed solution with potential users
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>The Solution</TableHead>
												<TableHead>Success Criteria</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell>How will you solve it?</TableCell>
												<TableCell>What defines success?</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</div>
					</section>

					{/* Benefits */}
					<section className='mb-16'>
						<h2 className='text-2xl font-bold mb-6'>Why Use This Framework?</h2>
						<div className='grid gap-4'>
							{frameworkBenefits.map((benefit, index) => (
								<div key={index} className='flex items-start gap-3'>
									<CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
									<span>{benefit}</span>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className='bg-secondary/5 rounded-lg p-8 text-center'>
						<h2 className='text-2xl font-bold mb-4'>
							Ready to Validate Your Idea?
						</h2>
						<p className='text-muted-foreground mb-6'>
							Get started with the framework or schedule a consultation for
							guided validation
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button size='lg' asChild>
								<a
									href='https://warm-pantry-ee2.notion.site/Validate-Before-You-Build-c0ba51f38a8c4c78b6ba0650b44d0ca5'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-2'>
									Access Template
									<ArrowRight className='h-4 w-4' />
								</a>
							</Button>
							<Button variant='outline' size='lg' asChild>
								<Link
									href='https://wa.me/254793643308'
									className='flex items-center gap-2'>
									<MessageCircle className='h-5 w-5' />
									Get Guidance
								</Link>
							</Button>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
