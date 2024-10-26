import React from 'react'
import { toast } from 'sonner'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
	CreditCard,
	Smartphone,
	Shield,
	Globe,
	CheckCircle2,
	ArrowRight,
} from 'lucide-react'
import PayButton from './payment/PayButton'

// Constants
const PAYMENT_CONFIG = {
	PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
	CURRENCY: 'KES',
	AMOUNT: 100, // Demo amount in KES
	BUSINESS_EMAIL: 'faraja.bien@gmail.com',
} as const

interface PaymentConfig {
	email: string
	amount: number
	publicKey: string
	text: string
	currency: string
}

const PaymentDemo: React.FC = () => {
	const config: PaymentConfig = {
		email: PAYMENT_CONFIG.BUSINESS_EMAIL,
		amount: PAYMENT_CONFIG.AMOUNT * 100, // Convert to cents
		publicKey: PAYMENT_CONFIG.PUBLIC_KEY,
		text: `Try Demo Payment (${PAYMENT_CONFIG.AMOUNT} ${PAYMENT_CONFIG.CURRENCY})`,
		currency: PAYMENT_CONFIG.CURRENCY,
	}

	const handleSuccess = (reference: string) => {
		toast.success('Demo Payment Successful!', {
			description: `Transaction Reference: ${reference}`,
			duration: 5000,
		})
		console.log('Payment successful, reference:', reference)
	}

	const handleClose = () => {
		toast.info('Demo Cancelled', {
			description: "Feel free to try again when you're ready",
			duration: 3000,
		})
	}

	const features = [
		{
			icon: <Globe className='h-6 w-6' />,
			title: 'Multiple Payment Methods',
			description: 'Accept M-PESA, cards, and USSD payments',
		},
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Secure Transactions',
			description: 'Bank-grade security for all payments',
		},
		{
			icon: <CheckCircle2 className='h-6 w-6' />,
			title: 'Instant Confirmation',
			description: 'Real-time payment validation',
		},
	]

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col py-8'>
			<main className='container mx-auto px-4 max-w-3xl'>
				{/* Hero Section */}
				<Card className='mb-8'>
					<CardHeader className='text-center'>
						<CardTitle className='text-3xl font-bold'>
							Payment Integration Demo
						</CardTitle>
						<CardDescription className='text-lg mt-2'>
							Experience our seamless payment processing with this live demo
						</CardDescription>
					</CardHeader>
				</Card>

				{/* Features Grid */}
				<div className='grid md:grid-cols-3 gap-4 mb-8'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='flex flex-col items-center text-center p-4'>
							<div className='text-primary mb-2'>{feature.icon}</div>
							<h3 className='font-semibold mb-1'>{feature.title}</h3>
							<p className='text-sm text-muted-foreground'>
								{feature.description}
							</p>
						</Card>
					))}
				</div>

				{/* Demo Payment Card */}
				<Card className='mb-8'>
					<CardHeader>
						<CardTitle className='text-xl'>Try a Test Payment</CardTitle>
						<CardDescription>
							Process a secure {PAYMENT_CONFIG.AMOUNT} KES demo payment
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Alert className='mb-6'>
							<div className='flex items-center gap-2'>
								<Smartphone className='h-4 w-4' />
								<AlertTitle>Available Payment Methods</AlertTitle>
							</div>
							<AlertDescription className='mt-2'>
								Test our integration with M-PESA, card payments, or USSD
							</AlertDescription>
						</Alert>

						<div className='flex justify-center'>
							<PayButton
								config={config}
								onSuccess={handleSuccess}
								onClose={handleClose}
							/>
						</div>
					</CardContent>
					<CardFooter className='justify-center text-sm text-muted-foreground'>
						No real money will be charged during this demo
					</CardFooter>
				</Card>

				{/* Integration Info */}
				<Card>
					<CardHeader>
						<CardTitle className='text-lg'>Ready to Integrate?</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='flex items-center gap-2'>
							<ArrowRight className='h-4 w-4 text-primary' />
							<span>Simple API integration</span>
						</div>
						<div className='flex items-center gap-2'>
							<ArrowRight className='h-4 w-4 text-primary' />
							<span>Comprehensive documentation</span>
						</div>
						<div className='flex items-center gap-2'>
							<ArrowRight className='h-4 w-4 text-primary' />
							<span>Developer support available</span>
						</div>
					</CardContent>
					<CardFooter className='justify-center text-sm'>
						<p>Contact us at integration@fbien.com for setup assistance</p>
					</CardFooter>
				</Card>
			</main>
		</div>
	)
}

export default PaymentDemo
