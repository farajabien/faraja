import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { headers } from 'next/headers'
import { Download } from '@/app/types'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const headersList = await headers() // await the headers

		// Get file path
		const filePath = path.join(process.cwd(), 'data', 'downloads.json')

		// Read existing data
		const fileData = await fs.readFile(filePath, 'utf-8')
		const data = JSON.parse(fileData)

		// Create new download entry
		const newDownload: Download = {
			id: crypto.randomUUID(),
			resource: body.resource,
			timestamp: new Date().toISOString(),
			userAgent: (await headersList.get('user-agent')) || undefined, // await each header
			ipAddress: (await headersList.get('x-forwarded-for')) || undefined, // await each header
		}

		// Add new download
		data.downloads.push(newDownload)

		// Write back to file
		await fs.writeFile(filePath, JSON.stringify(data, null, 2))

		console.log('Download tracked:', newDownload)

		return NextResponse.json({ success: true, id: newDownload.id })
	} catch (error) {
		console.error('Download tracking error:', error)
		return NextResponse.json(
			{ error: 'Failed to track download' },
			{ status: 500 }
		)
	}
}

// Optional: GET route with proper header handling
export async function GET(req: Request) {
	try {
		const headersList = await headers()
		// Add authentication check here if needed

		const filePath = path.join(process.cwd(), 'data', 'downloads.json')
		const fileData = await fs.readFile(filePath, 'utf-8')
		const data = JSON.parse(fileData)

		return NextResponse.json(data)
	} catch (error) {
		console.error('Error fetching downloads:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch downloads' },
			{ status: 500 }
		)
	}
}
