// api/orders/router.ts
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			const order = req.body

			// Define the path to your JSON file
			const filePath = path.join(process.cwd(), 'direct-orders.json')

			// Read the current orders from the JSON file
			const data = fs.existsSync(filePath)
				? fs.readFileSync(filePath, 'utf-8')
				: '[]'
			const orders = JSON.parse(data)

			// Add the new order to the list
			orders.push(order)

			// Write the updated orders back to the JSON file
			fs.writeFileSync(filePath, JSON.stringify(orders, null, 2))

			res.status(200).json({ message: 'Order saved successfully' })
		} catch (error) {
			console.error('Error saving order:', error)
			res.status(500).json({ message: 'Error saving order' })
		}
	} else {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
