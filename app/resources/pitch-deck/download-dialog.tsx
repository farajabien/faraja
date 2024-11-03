'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { FileDown, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export default function DownloadDialog() {
	const [agreed, setAgreed] = useState(false)
	const [downloadDialogOpen, setDownloadDialogOpen] = useState(false)

	const handleDownload = async () => {
		try {
			// Track download with resource info
			await fetch('/api/track-download', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					resource: 'pitch-deck',
					timestamp: new Date(),
					metadata: {
						template: 'Startup Pitch Deck',
						version: '1.0',
						source: 'pitch-deck-page',
					},
				}),
			})

			// Download the file
			// Replace this with your download URL
			window.open('/files/pitch-deck-template.pptx', '_blank')

			// Close the dialog
			setDownloadDialogOpen(false)
			toast.success('Your download should begin automatically', {
				position: 'bottom-right',
				duration: 5000,
			})
		} catch (error) {
			console.error('Download error:', error)
			toast.error('Download failed', {
				description: 'Please try again or contact support',
			})
		} finally {
			// Reset agreement
			setAgreed(false)

			// Reset dialog
			setDownloadDialogOpen(false)
		}
	}

	return (
		<Dialog open={downloadDialogOpen} onOpenChange={setDownloadDialogOpen}>
			<DialogTrigger asChild>
				<Button size='lg' className='group'>
					<FileDown className='mr-2 h-5 w-5' />
					Get the Template
					<ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Download Pitch Deck Template</DialogTitle>
					<DialogDescription>
						Please review and agree to our usage terms
					</DialogDescription>
				</DialogHeader>
				<div className='py-4'>
					<div className='rounded-lg bg-muted p-4 mb-4'>
						<h4 className='font-medium mb-2'>Usage Terms:</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>• Template is free for personal and business use</li>
							<li>• Modification and customization is allowed</li>
							<li>• Redistribution is not permitted</li>
							<li>• Attribution is appreciated but not required</li>
						</ul>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox
							id='terms'
							checked={agreed}
							onCheckedChange={(checked) => setAgreed(checked === true)}
						/>
						<label htmlFor='terms' className='text-sm text-muted-foreground'>
							I agree to these usage terms
						</label>
					</div>
				</div>
				<DialogFooter>
					<Button
						variant='outline'
						onClick={() => setDownloadDialogOpen(false)}>
						Cancel
					</Button>
					<Button
						disabled={!agreed}
						onClick={handleDownload}
						className='flex items-center gap-2'>
						<FileDown className='h-4 w-4' />
						Download Now
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
