// app/api/payment/verify/route.ts
import { NextResponse } from 'next/server'
import axios from 'axios'
import { updateBusiness } from '@/lib/serverUtils'

export async function POST(request: Request) {
	try {
		const { reference, slug } = await request.json()

		// Verify payment with Paystack
		const paystackResponse = await axios.get(
			`https://api.paystack.co/transaction/verify/${reference}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
				},
			}
		)

		if (paystackResponse.data.data.status === 'success') {
			// Update business to grant access
			await updateBusiness(slug, { isPaid: true })

			return NextResponse.json(
				{ message: 'Payment successful. Access granted.' },
				{ status: 200 }
			)
		} else {
			return NextResponse.json(
				{ error: 'Payment verification failed.' },
				{ status: 400 }
			)
		}
	} catch (error) {
		console.error('Payment verification error:', error)
		return NextResponse.json(
			{ error: 'Internal Server Error.' },
			{ status: 500 }
		)
	}
}
