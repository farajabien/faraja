import type { Metadata } from 'next'
import { Annie_Use_Your_Telescope } from 'next/font/google'
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

const annieUseYourTelescope = Annie_Use_Your_Telescope({
	weight: ['400'],
	subsets: ['latin'],
	display: 'auto',
})

export const metadata: Metadata = {
	title: 'Stop Wasting Time & Money on App Development',
	description:
		'Validate your idea with a functional prototype in 4 weeks. Save time, reduce risk, and build a product people actually want.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={myFont.className}>{children}</body>
		</html>
	)
}
