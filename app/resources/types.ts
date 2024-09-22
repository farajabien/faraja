import React from 'react'

export type Resource = {
	title: string
	description: string
	link: string
	price: string
	action?: {
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
		label: string
	}
	features?: string[]
	techStack?: {
		name: string
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	}[]
}

export type Category = {
	category: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	items: Resource[]
}
