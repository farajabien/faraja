// app/resources/_components/ResourceCard.tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ResourceItem } from '@/data/resources'

interface ResourceCardProps {
	resource: ResourceItem
}
export default function ResourceCard({ resource }: ResourceCardProps) {
	const ActionIcon = resource.action?.icon

	return (
		<Card className='flex flex-col hover:shadow-lg transition-shadow'>
			<CardHeader>
				<div className='flex items-start justify-between'>
					<div>
						<h3 className='text-xl font-semibold mb-2'>{resource.title}</h3>
						<p className='text-muted-foreground'>{resource.description}</p>
					</div>
					<Badge variant={resource.price === 'Free' ? 'secondary' : 'default'}>
						{resource.price}
					</Badge>
				</div>
			</CardHeader>

			<CardContent className='flex-grow'>
				<div className='space-y-4'>
					<div>
						<h4 className='font-medium mb-2'>Features:</h4>
						<ul className='space-y-2'>
							{resource.features.map((feature, index) => (
								<li key={index} className='flex items-start gap-2 text-sm'>
									<span className='h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0' />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{resource.techStack && (
						<div>
							<h4 className='font-medium mb-2'>Tech Stack:</h4>
							<div className='flex flex-wrap gap-2'>
								{resource.techStack.map((tech, index) => (
									<Badge
										key={index}
										variant='outline'
										className='flex items-center gap-1'>
										<tech.icon className='w-3 h-3' />
										{tech.name}
									</Badge>
								))}
							</div>
						</div>
					)}
				</div>
			</CardContent>

			<CardFooter>
				<Button asChild className='w-full'>
					<a href={resource.link} target='_blank' rel='noopener noreferrer'>
						{ActionIcon && <ActionIcon className='w-4 h-4 mr-2' />}
						{resource.action?.label}
					</a>
				</Button>
			</CardFooter>
		</Card>
	)
}
