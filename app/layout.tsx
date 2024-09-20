import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import ThemeToggle from '@/components/ThemeToggle'

const myFont = localFont({
	src: [
		{
			path: '../public/fonts/underlord/Underlord.ttf',
			weight: '400',
		},
	],
})

const comic = Comic_Neue({
	weight: ['400'],
	subsets: ['latin'],
	display: 'auto',
})

export const metadata: Metadata = {
	title: 'farajabien - NextJs Developer',
	description:
		'farajabien - NextJs, React, TailwindCSS, MongoDB, NextAuth, Paystack',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={comic.className}>
				<ThemeToggle />
				<NextTopLoader />
				{children}
			</body>
		</html>
	)
}
