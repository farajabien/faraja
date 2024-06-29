import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

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
	title: 'Get Your Web App MVP in 4 Weeks – No Designers or Devs Needed',
	description:
		'I build functional prototypes fast and affordable, so you can validate your startup idea and move forward with confidence.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={comic.className}>{children}</body>
		</html>
	)
}
