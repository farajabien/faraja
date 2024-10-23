import { paymentMethods } from '../data/payment-methods'

const PaymentMethods = () => (
	<section className='mb-12'>
		<h2 className='text-2xl font-semibold mb-4'>Available Payment Methods</h2>
		<ul className='list-disc list-inside mb-6'>
			{paymentMethods.map((method) => (
				<li key={method}>{method}</li>
			))}
		</ul>
		<p className='text-muted-foreground'>
			Choose between one-time payments for individual services or subscription
			models for recurring services.
		</p>
	</section>
)

export default PaymentMethods
