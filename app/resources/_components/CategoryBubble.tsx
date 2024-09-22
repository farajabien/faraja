import React from 'react'

type CategoryBubbleProps = {
	icon: React.ElementType
	label: string
	count: number
}

const CategoryBubble: React.FC<CategoryBubbleProps> = ({
	icon: Icon,
	label,
	count,
}) => (
	<div className='flex flex-col items-center'>
		<div className='relative'>
			<div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center'>
				<Icon className='w-8 h-8 text-primary-foreground' />
			</div>
			<div className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center'>
				<span className='text-xs font-bold'>{count}</span>
			</div>
		</div>
		<span className='mt-2 text-sm font-medium'>{label}</span>
	</div>
)

export default CategoryBubble
