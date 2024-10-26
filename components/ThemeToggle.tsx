'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	useEffect(() => {
		const savedTheme = 'light'
		if (savedTheme) {
			setTheme(savedTheme)
		}
	}, [setTheme])

	return (
		// <Button
		// 	variant='ghost'
		// 	className='fixed top-2 right-2 rounded-full'
		// 	onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		// 	aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
		// 	{theme === 'dark' ? '🌞' : '🌙'}
		// </Button>
		<></>
	)
}
