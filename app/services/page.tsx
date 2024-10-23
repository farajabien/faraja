import { CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'
import { MyBreadcrumb } from '@/components/MyBreadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Farajabien - Technical Strategy & Development Services',
	description:
		'Validate and launch your startup idea with expert technical guidance. From rapid validation to MVP development, get the expertise you need to succeed.',
}

const services = [
	{
		title: 'Startup Technical Services',
		description:
			'I provide tailored technical solutions that help you turn your startup vision into reality—from idea validation to full implementation. Let me handle the tech while you focus on your business.',
		packages: [
			{
				name: 'Rapid Validation Package',
				price: '15,000 KSH ($150)',
				turnaround: '24-48 hours',
				isPopular: false,
				includes: [
					'Comprehensive assessment of your startup idea’s technical feasibility.',
					'Custom architecture plan to support scalability as your business grows.',
					'Expert recommendations for the most suitable tech stack for your project.',
					'Clear definition of essential features for your Minimum Viable Product (MVP).',
					'Accurate timeline and budget estimation to help you plan your project effectively.',
				],
			},
			{
				name: 'Landing Page + Prototype Strategy',
				price: '30,000 KSH ($300)',
				turnaround: '3-5 business days',
				isPopular: true,
				includes: [
					'Everything included in the Rapid Validation Package.',
					'A fully functional, simple landing page to showcase your product or service and capture leads.',
					'A dedicated section for a clear overview of your service or product, highlighting what it offers.',
					'Showcase your key features and benefits to attract potential users.',
					'A strong call-to-action section with a signup form to build a waitlist or capture inquiries.',
					'Mobile-friendly design to ensure your page looks great on all devices.',
					'A strategic plan for developing the next stages of your product or prototype.',
				],
			},
			{
				name: 'Prototype Frontend Development',
				price: 'Custom Pricing',
				turnaround: 'Custom Timeline',
				isPopular: false,
				includes: [
					'Complete development of your product’s frontend using modern technologies like React and Next.js.',
					'Seamless implementation of the landing page for your startup’s web presence.',
					'Building the core functionality of your web application to give users a real product experience.',
					'Setting up and integrating your backend database using Supabase to store and manage your data.',
					'Regular progress updates and clear documentation to keep you informed at every step.',
					'A full handoff of the developed codebase, complete with documentation for future developers to work from.',
				],
			},
		],
	},
]

const deliveryFormats = [
	{
		category: 'Documentation',
		icon: '📄',
		formats: [
			'Clear, easy-to-follow diagrams that show the technical architecture of your solution.',
			'Detailed documentation outlining the features and scope of your project.',
			'A roadmap showing the key stages of development, so you know what to expect.',
			'Complete API documentation if your project involves integrating with external services.',
		],
	},
	{
		category: 'Code & Development',
		icon: '💻',
		formats: [
			'A well-organized, clean codebase for your frontend that developers can easily work on.',
			'A solid database schema to store all your essential data, set up through Supabase or another service.',
			'Smooth API integrations to connect your frontend with external services or your backend.',
			'Full setup for deployment, making sure your product or website is live and accessible to users.',
		],
	},
	{
		category: 'Strategy',
		icon: '🎯',
		formats: [
			'An analysis of the best tech stack for your project based on your specific needs and goals.',
			'A plan for how your product can scale as you grow, ensuring it’s ready to handle more users.',
			"A breakdown of the technical resources you'll need, from developer skills to cloud services.",
			'Cost-saving strategies that help you minimize expenses without sacrificing quality.',
		],
	},
	{
		category: 'Support',
		icon: '🤝',
		formats: [
			'Ongoing technical consultation to address any questions or concerns as your project develops.',
			'Step-by-step guidance during the implementation phase, ensuring a smooth development process.',
			'Code reviews to ensure your project maintains high-quality standards.',
			'Handoff support to make sure you and any future developers are set up for success.',
		],
	},
]

const processSteps = [
	{
		title: 'Discovery',
		description:
			'I’ll work with you to fully understand your vision, goals, and the specific technical needs of your startup. This is where we clarify your requirements and create a clear project roadmap.',
	},
	{
		title: 'Strategy',
		description:
			'I’ll develop a solid, strategic technical plan, including the best tech stack, key development milestones, and how to scale your product as your business grows. The goal is to align the tech with your business objectives.',
	},
	{
		title: 'Implementation',
		description:
			'I’ll quickly and efficiently develop your solution, from building a landing page to creating a functional prototype. Throughout the process, I’ll keep you updated on progress to ensure we stay on track.',
	},
	{
		title: 'Handoff & Support',
		description:
			'Once development is complete, I’ll provide detailed documentation and training to ensure a smooth transition. I’ll also offer post-launch support, ensuring you have everything you need to succeed moving forward.',
	},
]

function ServiceCard({ service }: { service: (typeof services)[0] }) {
	return (
		<div className='max-w-4xl mx-auto'>
			<h2 className='text-3xl font-bold mb-4'>{service.title}</h2>
			<p className='text-xl text-muted-foreground mb-8'>
				{service.description}
			</p>

			<div className='grid md:grid-cols-3 gap-8'>
				{service.packages.map((packageItem) => (
					<Card
						key={packageItem.name}
						className={`p-6 relative ${
							packageItem.isPopular ? 'border-primary' : ''
						}`}>
						{packageItem.isPopular && (
							<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg'>
								Most Popular
							</div>
						)}
						<h3 className='text-2xl font-bold mb-2'>{packageItem.name}</h3>
						<p className='text-xl font-semibold text-primary mb-4'>
							{packageItem.price}
						</p>
						<p className='text-sm text-muted-foreground mb-6'>
							Turnaround: {packageItem.turnaround}
						</p>
						<div className='space-y-6'>
							<div>
								<h4 className='font-semibold mb-3'>Package Includes:</h4>
								<ul className='space-y-2'>
									{packageItem.includes.map((feature, idx) => (
										<li key={idx} className='flex items-start gap-3'>
											<CheckCircle className='text-primary h-5 w-5 mt-1 flex-shrink-0' />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-background'>
			<MyBreadcrumb
				items={[
					{ label: 'Home', href: '/' },
					{ label: 'Services', href: '/services' },
				]}
			/>

			{/* Hero Section */}
			<section className='container mx-auto px-4 py-16'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Technical Strategy & Development Services
					</h1>
					<p className='text-xl text-muted-foreground mb-8'>
						Validate your startup idea and launch faster with expert technical
						guidance and modern development solutions.
					</p>
				</div>
			</section>

			{/* Services Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<div className='space-y-16'>
						{services.map((service) => (
							<ServiceCard key={service.title} service={service} />
						))}
					</div>
				</div>
			</section>

			{/* Delivery Formats Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Service Deliverables
					</h2>
					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{deliveryFormats.map((format) => (
							<Card key={format.category} className='p-6'>
								<h3 className='font-semibold mb-3 flex items-center gap-2'>
									<span className='text-xl'>{format.icon}</span>
									{format.category}
								</h3>
								<ul className='space-y-2 text-sm text-muted-foreground'>
									{format.formats.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='bg-secondary/30 py-16'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Our Working Process
					</h2>
					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{processSteps.map((step, index) => (
							<div key={step.title} className='relative'>
								<div className='text-4xl font-bold text-primary mb-4'>
									{index + 1}
								</div>
								<h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
								<p className='text-muted-foreground'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Ready to Launch Your Startup?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Book a consultation to discuss your technical needs and find the
							right package for your startup.
						</p>
						<BookCalendly />
					</div>
				</div>
			</section>
		</div>
	)
}
