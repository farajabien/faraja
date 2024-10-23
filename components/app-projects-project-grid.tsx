'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Project } from '@/app/projects/page'
import { ExternalLink, Code, Lightbulb, CheckCircle } from 'lucide-react'

const CompactProjectCard = ({ project }: { project: Project }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='bg-card text-card-foreground rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow h-[200px] flex flex-col'>
					<h3 className='text-lg font-semibold mb-2 line-clamp-1'>
						{project.title}
					</h3>
					<p className='text-sm text-muted-foreground mb-2 line-clamp-1'>
						{project.industry}
					</p>
					<p className='text-sm line-clamp-4 flex-grow'>
						{project.description}
					</p>
					<div className='mt-2 flex flex-wrap gap-1'>
						{project.technologies &&
							project.technologies.slice(0, 3).map((tech) => (
								<Badge key={tech} variant='secondary' className='text-xs'>
									{tech}
								</Badge>
							))}
						{project.technologies && project.technologies.length > 3 && (
							<Badge variant='secondary' className='text-xs'>
								+{project.technologies.length - 3}
							</Badge>
						)}
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[600px] '>
				<DialogHeader>
					<DialogTitle className='text-2xl font-bold'>
						{project.title}
					</DialogTitle>
				</DialogHeader>
				<ScrollArea className='h-[calc(90vh-100px)] pr-4'>
					<div className='mt-4 space-y-6'>
						<div>
							<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
								Industry
							</h4>
							<p>{project.industry}</p>
						</div>

						{project.category && (
							<div>
								<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
									Category
								</h4>
								<p>{project.category}</p>
							</div>
						)}

						<div>
							<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
								Description
							</h4>
							<p>{project.description}</p>
						</div>

						{project.technologies && (
							<div>
								<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
									Technologies
								</h4>
								<div className='flex flex-wrap gap-2'>
									{project.technologies.map((tech) => (
										<Badge key={tech} variant='secondary'>
											<Code className='w-3 h-3 mr-1' />
											{tech}
										</Badge>
									))}
								</div>
							</div>
						)}

						{project.features && (
							<div>
								<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
									Key Features
								</h4>
								<ul className='list-disc list-inside space-y-1'>
									{project.features.map((feature, index) => (
										<li key={index} className='text-sm'>
											<CheckCircle className='inline w-4 h-4 mr-2 text-green-500' />
											{feature}
										</li>
									))}
								</ul>
							</div>
						)}

						{project.servicesDelivered && (
							<div>
								<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
									Services Delivered
								</h4>
								<ul className='list-disc list-inside space-y-1'>
									{project.servicesDelivered.map((service, index) => (
										<li key={index} className='text-sm'>
											{service}
										</li>
									))}
								</ul>
							</div>
						)}

						{project.lessons && (
							<div>
								<h4 className='text-sm font-semibold text-muted-foreground mb-2'>
									Key Learnings
								</h4>
								<p className='text-sm italic'>
									<Lightbulb className='inline w-4 h-4 mr-2 text-yellow-500' />
									{project.lessons}
								</p>
							</div>
						)}
					</div>
				</ScrollArea>
				{project.link && (
					<div className='pt-4'>
						<Separator className='mb-4' />
						<Button asChild variant='default' size='sm'>
							<a href={project.link} target='_blank' rel='noopener noreferrer'>
								View Project
								<ExternalLink className='ml-2 h-4 w-4' />
							</a>
						</Button>
					</div>
				)}
			</DialogContent>
		</Dialog>
	)
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
	return (
		<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
			{projects.map((project) => (
				<CompactProjectCard key={project.title} project={project} />
			))}
		</div>
	)
}
