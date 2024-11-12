'use client'
import { useEffect, useRef } from 'react'

interface TikTokEmbedProps {
	videoId: string
	username: string
}

const TikTokEmbed = ({ videoId, username }: TikTokEmbedProps) => {
	const embedRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Remove existing script if any
		const existingScript = document.querySelector(
			'script[src="https://www.tiktok.com/embed.js"]'
		)
		if (existingScript) {
			existingScript.remove()
		}

		// Add new script
		const script = document.createElement('script')
		script.src = 'https://www.tiktok.com/embed.js'
		script.async = true

		script.onerror = (error) => {
			console.error('Error loading TikTok embed script:', error)
		}

		document.body.appendChild(script)

		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script)
			}
		}
	}, [])

	return (
		<div ref={embedRef} className='tiktok-embed-container'>
			<blockquote
				className='tiktok-embed'
				cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
				data-video-id={videoId}>
				<section>
					<a
						href={`https://www.tiktok.com/@${username}/video/${videoId}`}
						target='_blank'
						rel='noopener noreferrer'>
						@{username}
					</a>
				</section>
			</blockquote>
		</div>
	)
}

export default TikTokEmbed
