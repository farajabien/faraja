'use client'
import { Project } from '@/app/projects/page'
import { Card } from './ui/card'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from './ui/button'

const ProjectCard = ({ project }: { project: Project }) => (
	<Card className='p-6 hover:shadow-xl transition-all'>
		<div className='mb-4'>
			<h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
			{project.subtitle && (
				<p className='text-sm text-muted-foreground mb-1'>{project.subtitle}</p>
			)}
			{project.category && (
				<p className='text-sm text-primary font-medium'>{project.category}</p>
			)}
		</div>
		<p className='text-muted-foreground mb-6'>{project.description}</p>

		{project.features && (
			<div className='mb-6'>
				<h4 className='font-semibold mb-2'>Key Features</h4>
				<ul className='space-y-2'>
					{project.features.map((feature) => (
						<li key={feature} className='flex items-start gap-2'>
							<Star className='h-4 w-4 text-primary shrink-0 mt-1' />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>
		)}

		<div className='mb-6'>
			<h4 className='font-semibold mb-2'>Technologies</h4>
			<div className='flex flex-wrap gap-2'>
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className='bg-primary/10 text-primary text-sm px-3 py-1 rounded-full'>
						{tech}
					</span>
				))}
			</div>
		</div>

		{project.servicesDelivered && (
			<div className='mt-4 pt-4 border-t'>
				<h4 className='font-semibold mb-2'>Services Delivered</h4>
				<ul className='space-y-2'>
					{project.servicesDelivered.map((service) => (
						<li key={service} className='flex items-start gap-2'>
							<Star className='h-4 w-4 text-primary shrink-0 mt-1' />
							<span>{service}</span>
						</li>
					))}
				</ul>
			</div>
		)}

		{project.lessons && (
			<div className='mt-4 pt-4 border-t'>
				<h4 className='font-semibold mb-2'>Key Lessons</h4>
				<p className='text-muted-foreground'>{project.lessons}</p>
			</div>
		)}

		{project.link && (
			<div className='mt-6'>
				<Button
					variant='outline'
					className='w-full group'
					onClick={() => window.open(project.link, '_blank')}>
					View Project
					<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
				</Button>
			</div>
		)}
	</Card>
)

export default ProjectCard
