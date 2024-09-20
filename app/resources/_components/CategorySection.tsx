import React from 'react'
import Section from '@/components/Section'
import ResourceCard from './ResourceCard'
import { Category } from '../types'

type CategorySectionProps = {
	category: Category
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => (
	<Section title={category.category} icon={category.icon}>
		<div className='grid md:grid-cols-2 gap-8'>
			{category.items.map((item) => (
				<ResourceCard key={item.title} item={item} icon={category.icon} />
			))}
		</div>
	</Section>
)

export default CategorySection
