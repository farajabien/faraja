import { Alert, AlertDescription, AlertTitle } from './ui/alert'

// components/ReadyAlert.tsx
const ReadyAlert = () => (
	<Alert className='mb-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-lg shadow-md'>
		<AlertTitle className='font-semibold'>
			Ready to Enhance Your Payment Experience?
		</AlertTitle>
		<AlertDescription>
			If you&apos;re a business or service provider looking to implement payment
			features like this on your website, let me know!
		</AlertDescription>
	</Alert>
)

export default ReadyAlert
