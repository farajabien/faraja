import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import ThemeToggle from '@/components/ThemeToggle'
import { Providers } from './providers'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Farajabien - Transform Your Startup Ideas into Reality',
	description:
		"Unlock your startup's potential with expert guidance from Farajabien. Specializing in prototype strategy consulting, technical architecture, and tailored support for tech startups.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground px-8 sm:px-20`}>
				<Providers>
					<ThemeToggle />
					<NextTopLoader />
					{children}
				</Providers>
			</body>
		</html>
	)
}
