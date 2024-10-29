'use client'
import { useEffect } from 'react'

const TikTokEmbed = () => {
	useEffect(() => {
		// Load TikTok embed script
		const script = document.createElement('script')
		script.src = 'https://www.tiktok.com/embed.js'
		script.async = true
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div className='aspect-video flex items-center justify-center'>
			<blockquote
				className='tiktok-embed'
				cite='https://www.tiktok.com/@farajabien/video/7430559700422249734'
				data-video-id='7430559700422249734'>
				<section>
					<a
						target='_blank'
						href='https://www.tiktok.com/@farajabien'
						rel='noopener noreferrer'>
						@farajabien
					</a>
				</section>
			</blockquote>
		</div>
	)
}

export default TikTokEmbed
