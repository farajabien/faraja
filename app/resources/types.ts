import { LucideIcon } from 'lucide-react'

export type Resource = {
	id: string
	title: string
	description: string
	price: string
	features: string[]
	tags: string[]
	previewUrl?: string
	downloadUrl: string
	category?: string
	techStack?: {
		name: string
		icon: LucideIcon
	}[]
}

export type ResourceCategory = {
	category: string
	items: Resource[]
}

export type CategorySection = {
	category: string
	items: Resource[]
}
