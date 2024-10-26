'use client'

import React from 'react'
import {
	FileText,
	Image,
	FileCode,
	File,
	Calendar,
	CheckCircle,
	Info,
	ChevronDown,
} from 'lucide-react'
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

type DeliverableType = {
	name: string
	type: 'pdf' | 'doc' | 'design' | 'code'
}

type Package = {
	name: string
	price: string
	savings?: string
	turnaround: string
	bestFor?: string[]
	includes: string[]
	isPopular?: boolean
	deliverables?: DeliverableType[]
}

const getFileIcon = (type: DeliverableType['type']) => {
	switch (type) {
		case 'pdf':
		case 'doc':
			return <FileText className='w-4 h-4 text-blue-500' />
		case 'design':
			return <Image className='w-4 h-4 text-purple-500' />
		case 'code':
			return <FileCode className='w-4 h-4 text-green-500' />
		default:
			return <File className='w-4 h-4 text-gray-500' />
	}
}

const DeliverablesSummary = ({
	deliverables,
}: {
	deliverables: DeliverableType[]
}) => {
	const groupedDeliverables = deliverables.reduce((acc, curr) => {
		acc[curr.type] = (acc[curr.type] || 0) + 1
		return acc
	}, {} as Record<string, number>)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='ghost' size='sm' className='h-auto p-1'>
					<div className='flex items-center gap-1'>
						{Object.entries(groupedDeliverables).map(([type, count]) => (
							<div key={type} className='flex items-center'>
								{getFileIcon(type as DeliverableType['type'])}
								<span className='text-xs ml-1'>{count}</span>
							</div>
						))}
					</div>
					<ChevronDown className='w-4 h-4 ml-1' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-64 p-2'>
				<div className='space-y-2'>
					{deliverables.map((deliverable, index) => (
						<div
							key={index}
							className='flex items-center gap-2 p-1 hover:bg-secondary/50 rounded'>
							{getFileIcon(deliverable.type)}
							<span className='text-sm'>{deliverable.name}</span>
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default function Component({
	pkg,
	variant = 'default',
}: {
	pkg: Package
	variant?: string
}) {
	const isFeatured = variant === 'featured' || pkg.isPopular

	const splitIncludedItem = (item: string) => {
		const parts = item.split(':')
		if (parts.length < 2) return { title: item, description: '' }
		return {
			title: parts[0].trim(),
			description: parts[1].trim(),
		}
	}

	return (
		<Card
			className={`
        flex flex-col transform transition-all duration-300 hover:scale-[1.02]
        ${isFeatured ? 'border-primary shadow-lg relative' : 'hover:shadow-md'}
      `}>
			{isFeatured && (
				<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
					<Badge className='bg-primary text-primary-foreground px-4 py-1 text-sm'>
						Most Popular
					</Badge>
				</div>
			)}

			<CardHeader
				className={`
          ${isFeatured ? 'bg-primary/5 border-b border-primary/20' : ''}
          pb-6
        `}>
				<div className='space-y-2'>
					<div className='flex justify-between items-start'>
						<CardTitle className='text-2xl font-bold'>{pkg.name}</CardTitle>
					</div>
					<div className='flex items-baseline'>
						<span className='text-3xl font-bold'>{pkg.price}</span>
						{pkg.savings && (
							<Badge variant='secondary' className='ml-2 bg-green-100'>
								{pkg.savings}
							</Badge>
						)}
					</div>
				</div>
			</CardHeader>

			<CardContent className='flex-grow space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center text-muted-foreground'>
						<Calendar className='w-4 h-4 mr-2' />
						<span className='text-sm'>Delivery in {pkg.turnaround}</span>
					</div>
					{pkg.deliverables && pkg.deliverables.length > 0 && (
						<DeliverablesSummary deliverables={pkg.deliverables} />
					)}
				</div>

				{pkg.bestFor && (
					<div className='bg-secondary/30 p-3 rounded-lg'>
						<p className='text-sm font-medium mb-2'>Best For:</p>
						<ul className='space-y-1'>
							{pkg.bestFor.map((item, index) => (
								<li key={index} className='text-sm text-muted-foreground'>
									• {item}
								</li>
							))}
						</ul>
					</div>
				)}

				<div>
					<div className='flex items-center mb-3'>
						<span className='text-sm font-medium'>What&apos;s Included:</span>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Info className='w-4 h-4 ml-2 text-muted-foreground cursor-help' />
								</TooltipTrigger>
								<TooltipContent>
									<p className='text-sm'>
										All features included in this package
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<ul className='space-y-3'>
						{pkg.includes.map((item, index) => {
							const { title, description } = splitIncludedItem(item)
							return (
								<li key={index} className='flex items-start'>
									<CheckCircle className='w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0' />
									<div className='flex flex-col'>
										<span className='text-sm font-semibold leading-tight'>
											{title}
										</span>
										{description && (
											<span className='text-sm text-muted-foreground leading-tight'>
												{description}
											</span>
										)}
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</CardContent>

			<CardFooter className='pt-6'>
				<Button className='w-full'>Book Call for {pkg.name}</Button>
			</CardFooter>
		</Card>
	)
}
