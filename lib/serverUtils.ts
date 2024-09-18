// lib/serverUtils.ts
import { v2 as cloudinary } from 'cloudinary'
import path from 'path'
import fs from 'fs'

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
	api_key: process.env.CLOUDINARY_API_KEY!,
	api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export interface Business {
	slug: string
	name: string
	description: string
	imageUrl?: string
	emails: string[]
	isPublished: boolean
	isPaid: boolean
}

const dataFilePath = path.join(process.cwd(), 'lib', 'businesses.json')

// Read Businesses
export const getBusinesses = (): Business[] => {
	try {
		console.log('Attempting to read businesses from:', dataFilePath)

		if (!fs.existsSync(dataFilePath)) {
			console.log('businesses.json does not exist, creating empty file')
			fs.writeFileSync(dataFilePath, JSON.stringify([]))
		}

		const jsonData = fs.readFileSync(dataFilePath, 'utf-8').trim()
		console.log('Raw JSON data:', jsonData)

		if (!jsonData) {
			console.log('businesses.json is empty, returning empty array')
			return []
		}

		const businesses: Business[] = JSON.parse(jsonData)
		console.log('Parsed businesses:', businesses)

		return businesses
	} catch (error) {
		console.error('Error reading or parsing businesses.json:', error)
		fs.writeFileSync(dataFilePath, JSON.stringify([]))
		return []
	}
}

export const getBusinessBySlug = (slug: string): Business | undefined => {
	const businesses = getBusinesses()
	return businesses.find((biz) => biz.slug === slug)
}

// Add a New Business
export const addBusiness = (business: Business): void => {
	const businesses = getBusinesses()
	businesses.push(business)
	fs.writeFileSync(dataFilePath, JSON.stringify(businesses, null, 2))
}

// Update Business (e.g., Publish or Add Emails)
export const updateBusiness = (
	slug: string,
	updatedFields: Partial<Business>
): void => {
	const businesses = getBusinesses()
	const index = businesses.findIndex((biz) => biz.slug === slug)
	if (index !== -1) {
		businesses[index] = { ...businesses[index], ...updatedFields }
		fs.writeFileSync(dataFilePath, JSON.stringify(businesses, null, 2))
	} else {
		throw new Error('Business not found')
	}
}

// Save Businesses
export const saveBusinesses = (businesses: Business[]): void => {
	fs.writeFileSync(dataFilePath, JSON.stringify(businesses, null, 2))
}

// Upload Image to Cloudinary
export const uploadImage = async (image: File): Promise<string> => {
	const buffer = await image.arrayBuffer()
	const base64Image = Buffer.from(buffer).toString('base64')
	const dataURI = `data:${image.type};base64,${base64Image}`

	const result = await cloudinary.uploader.upload(dataURI)
	return result.secure_url
}
