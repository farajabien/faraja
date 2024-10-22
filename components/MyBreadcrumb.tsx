import React from 'react'
import {
	Breadcrumb as BreadcrumbRoot,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
	href?: string
	label: string
	icon?: React.ReactNode
}

interface BreadcrumbProps {
	/** Array of breadcrumb items */
	items: BreadcrumbItem[]
	/** Optional class name for the root element */
	className?: string
	/** Whether to show the home icon at the start */
	showHomeIcon?: boolean
	/** Optional home URL override */
	homeUrl?: string
	/** Optional aria label for the breadcrumb */
	ariaLabel?: string
}

export function MyBreadcrumb({
	items,
	className,
	showHomeIcon = true,
	homeUrl = '/',
	ariaLabel = 'Breadcrumb navigation',
}: BreadcrumbProps) {
	// Validate items array
	if (!Array.isArray(items) || items.length === 0) {
		return null
	}

	return (
		<BreadcrumbRoot className={cn('py-4', className)}>
			<BreadcrumbList
				className='flex items-center space-x-2'
				aria-label={ariaLabel}>
				{showHomeIcon && (
					<>
						<BreadcrumbItem>
							<BreadcrumbLink
								href={homeUrl}
								className='flex items-center hover:text-primary transition-colors'
								aria-label='Home'>
								<Home className='h-4 w-4' />
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator aria-hidden='true' />
					</>
				)}

				{items.map((item, index) => {
					const isLastItem = index === items.length - 1

					return (
						<React.Fragment key={`${item.label}-${index}`}>
							<BreadcrumbItem>
								{isLastItem ? (
									<BreadcrumbPage className='flex items-center'>
										{item.icon && <span className='mr-2'>{item.icon}</span>}
										{item.label}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink
										href={item.href || '#'}
										className='flex items-center hover:text-primary transition-colors'>
										{item.icon && <span className='mr-2'>{item.icon}</span>}
										{item.label}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLastItem && <BreadcrumbSeparator aria-hidden='true' />}
						</React.Fragment>
					)
				})}
			</BreadcrumbList>
		</BreadcrumbRoot>
	)
}

// Usage example:
/*
import { FileText, Users } from 'lucide-react';

// Basic usage
<MyBreadcrumb
  items={[
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects' }
  ]}
/>

// With icons and customization
<MyBreadcrumb
  items={[
    { label: 'Documents', href: '/docs', icon: <FileText className="h-4 w-4" /> },
    { label: 'Team', href: '/team', icon: <Users className="h-4 w-4" /> },
    { label: 'Settings' }
  ]}
  showHomeIcon={false}
  className="bg-secondary/10"
  ariaLabel="Page navigation"
/>
*/
