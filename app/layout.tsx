import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import ThemeToggle from '@/components/ThemeToggle'
import { Providers } from './providers'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

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
	title: {
		default: 'Technical Co-Founder Services | Farajabien',
		template: '%s | Farajabien',
	},
	description:
		'Transform your startup ideas into reality with expert technical co-founder services. Specializing in MVP development, technical architecture, and startup validation for East African founders.',
	keywords: [
		'technical co-founder',
		'startup development',
		'MVP development',
		'East Africa',
		'startup validation',
	],
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
					<Footer />
				</Providers>
				{/* Google Analytics Script */}

				<GoogleAnalytics gaId='G-CCBNJQYH4L' />
			</body>
		</html>
	)
}
