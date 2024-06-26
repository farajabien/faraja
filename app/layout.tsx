import type { Metadata } from 'next'
import { Annie_Use_Your_Telescope } from 'next/font/google'
import './globals.css'

const annieUseYourTelescope = Annie_Use_Your_Telescope({
	weight: ['400'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Web App Prototypes in 4 Weeks ',
	description: 'Validate Your Idea, Save Time & Money!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={annieUseYourTelescope.className}>{children}</body>
		</html>
	)
}
