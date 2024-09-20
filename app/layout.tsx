import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import ThemeToggle from '@/components/ThemeToggle'

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground px-8 sm:px-20`}>
				<ThemeToggle />
				<NextTopLoader />
				{children}
			</body>
		</html>
	)
}
