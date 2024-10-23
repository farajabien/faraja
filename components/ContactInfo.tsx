import Link from 'next/link'

// components/ContactInfo.tsx
const ContactInfo = () => (
	<div className='text-center'>
		<h2 className='text-xl font-semibold mb-2'>Contact Information</h2>
		<p>
			Email:
			<Link
				href='mailto:faraja.bien@gmail.com'
				className='text-primary'
				aria-label='Email Faraja Bien'>
				faraja.bien@gmail.com
			</Link>
		</p>
		<p>
			WhatsApp:
			<Link
				href='https://wa.me/+254793643308'
				className='text-primary'
				aria-label='WhatsApp Faraja Bien'>
				+254793643308
			</Link>
		</p>
	</div>
)

export default ContactInfo
