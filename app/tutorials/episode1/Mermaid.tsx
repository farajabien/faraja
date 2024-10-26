'use client'

import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
	chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
	const mermaidRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Initialize mermaid
		mermaid.initialize({
			startOnLoad: true,
			theme: 'default',
			securityLevel: 'loose',
			fontFamily: 'inherit',
			maxTextSize: 9000,
			flowchart: {
				htmlLabels: true,
				curve: 'basis',
			},
		})

		const renderChart = async () => {
			if (mermaidRef.current) {
				// Clear previous content
				mermaidRef.current.innerHTML = ''

				try {
					// Generate a valid ID (letters only, no numbers or special chars at start)
					const id = `mermaid-${Date.now()}`

					// Render the new diagram
					const { svg } = await mermaid.render(id, chart)

					if (mermaidRef.current) {
						mermaidRef.current.innerHTML = svg
					}
				} catch (error) {
					console.error('Mermaid rendering failed:', error)
					if (mermaidRef.current) {
						mermaidRef.current.innerHTML = `<div class="text-red-500">Failed to render diagram</div>`
					}
				}
			}
		}

		// Render the chart
		renderChart()
	}, [chart])

	return (
		<div
			ref={mermaidRef}
			className='mermaid w-full min-h-[300px] flex items-center justify-center'
		/>
	)
}
