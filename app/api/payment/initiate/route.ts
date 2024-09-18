// app/api/payment/initiate/route.ts
import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
	try {
		const { slug } = await request.json()

		const response = await axios.post(
			'https://api.paystack.co/transaction/initialize',
			{
				email: 'user@example.com', // Replace with user's email from your auth system
				amount: 1000, // Amount in kobo ($10)
				metadata: { slug },
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
					'Content-Type': 'application/json',
				},
			}
		)

		const { authorization_url, reference } = response.data.data

		return NextResponse.json(
			{ authorizationUrl: authorization_url, reference },
			{ status: 200 }
		)
	} catch (error) {
		console.error('Payment initiation error:', error)
		return NextResponse.json(
			{ error: 'Failed to initiate payment.' },
			{ status: 500 }
		)
	}
}
