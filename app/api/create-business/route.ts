// app/api/create-business/route.ts
import { NextResponse } from 'next/server'
import { getBusinesses, saveBusinesses, Business } from '@/lib/serverUtils'
import { v4 as uuidv4 } from 'uuid'
import { uploadImage } from '@/lib/serverUtils'
export async function POST(request: Request) {
	try {
		const formData = await request.formData()
		const name = formData.get('name') as string
		const description = formData.get('description') as string
		const email = formData.get('email') as string
		const image = formData.get('image') as File | null

		if (!name || !description || !email) {
			return NextResponse.json(
				{ error: 'All fields are required.' },
				{ status: 400 }
			)
		}

		// Generate a unique slug
		const slug = uuidv4()

		// Handle image upload if provided
		let imageUrl = ''
		if (image) {
			imageUrl = await uploadImage(image)
		}

		const newBusiness: Business = {
			slug,
			name,
			description,
			imageUrl,
			emails: [],
			isPublished: false,
			isPaid: false,
		}

		const businesses = getBusinesses()
		businesses.push(newBusiness)
		saveBusinesses(businesses)

		// TODO: Send confirmation email with verification link

		return NextResponse.json({ slug }, { status: 201 })
	} catch (error) {
		console.error('Error creating business:', error)
		return NextResponse.json(
			{ error: 'Internal Server Error.' },
			{ status: 500 }
		)
	}
}
