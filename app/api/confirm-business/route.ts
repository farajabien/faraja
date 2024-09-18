import { NextResponse } from 'next/server'
import { updateBusiness } from '@/lib/serverUtils'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const slug = searchParams.get('slug')

	if (!slug) {
		return NextResponse.json({ error: 'Invalid slug.' }, { status: 400 })
	}

	try {
		updateBusiness(slug, { isPublished: true })
		return NextResponse.json(
			{ message: 'Your landing page has been published!' },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Error confirming business:', error)
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		)
	}
}
