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
	title: 'Get Your Web App MVP in 4 Weeks – No Designers or Developers Needed',
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
			<body className={myFont.className}>{children}</body>
		</html>
	)
}
