import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Home, Search, ArrowLeft, Code, Coffee } from 'lucide-react'

const NotFound = () => {
	return (
		<div className='min-h-screen bg-background flex items-center justify-center p-4'>
			<Card className='max-w-2xl w-full p-8 text-center'>
				{/* Animated Code Elements */}
				<div className='relative h-32 mb-8'>
					<div className='absolute inset-0 flex items-center justify-center'>
						<Code className='h-24 w-24 text-primary animate-pulse' />
					</div>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<div className='flex items-center gap-2 bg-secondary/80 rounded-lg p-3 backdrop-blur-sm'>
							<Coffee className='h-5 w-5 text-primary animate-bounce' />
							<span className='font-mono'>404</span>
						</div>
					</div>
				</div>

				<h1 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60'>
					Oops! Page Not Found
				</h1>

				<p className='text-xl text-muted-foreground mb-2'>
					Looks like this route hasn&apos;t been deployed yet!
				</p>

				<p className='text-muted-foreground mb-8'>
					Don&apos;t worry - even the best developers occasionally push to the
					wrong branch. Let&apos;s get you back on track!
				</p>

				<div className='grid gap-4 sm:grid-cols-2 max-w-md mx-auto'>
					<Button asChild className='group'>
						<Link href='/'>
							<Home className='mr-2 h-4 w-4 group-hover:animate-bounce' />
							Back Home
						</Link>
					</Button>

					<Button variant='outline' asChild className='group'>
						<Link href='/services'>
							<Search className='mr-2 h-4 w-4 group-hover:rotate-12 transition-transform' />
							View Services
						</Link>
					</Button>
				</div>

				<div className='mt-12 pt-8 border-t'>
					<p className='text-sm text-muted-foreground'>
						Need immediate assistance?
					</p>
					<Button variant='link' asChild className='mt-2'>
						<Link href='/contact'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Contact Support
						</Link>
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default NotFound
