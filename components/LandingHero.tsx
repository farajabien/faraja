import React from 'react'
import { Trophy, Users, Rocket, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const LandingHero = () => {
	const achievements = [
		{
			icon: <Trophy className='w-5 h-5 text-yellow-500' />,
			metric: '95%',
			label: 'Collection Rate',
			detail: 'RentFlow Property Management',
		},
		{
			icon: <Users className='w-5 h-5 text-blue-500' />,
			metric: '1000+',
			label: 'Daily Transactions',
			detail: 'BingBang.bet Platform',
		},
		{
			icon: <Rocket className='w-5 h-5 text-purple-500' />,
			metric: 'Top 3',
			label: 'SeedAFounder',
			detail: 'Pitch Competition',
		},
		{
			icon: <Calendar className='w-5 h-5 text-green-500' />,
			metric: '4 Weeks',
			label: 'MVP Delivery',
			detail: 'Validated Process',
		},
	]

	return (
		<div className='min-h-screen bg-gradient-to-b from-background to-secondary/20'>
			<div className='container mx-auto px-4 py-16'>
				{/* Hero Content */}
				<div className='text-center mb-12'>
					<div className='flex justify-center gap-2 mb-6'>
						<Badge className='bg-primary/10 text-primary hover:bg-primary/20'>
							Technical Co-Founder
						</Badge>
						<Badge className='bg-secondary/10 text-secondary hover:bg-secondary/20'>
							Full Stack Developer
						</Badge>
					</div>

					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						Transform Your Startup Vision
						<br />
						<span className='text-primary'>Into Reality</span>
					</h1>

					<p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
						From idea validation to MVP in 4 weeks. Specialized in East African
						market with local payment integration expertise.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
						<Button size='lg' className='bg-primary hover:bg-primary/90'>
							View Services
						</Button>
						<Button size='lg' variant='outline'>
							Schedule Call
						</Button>
					</div>
				</div>

				{/* Achievements Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{achievements.map((item, index) => (
						<Card key={index} className='hover:shadow-lg transition-all'>
							<CardContent className='p-6'>
								<div className='flex items-center gap-4'>
									<div className='p-2 bg-background rounded-lg'>
										{item.icon}
									</div>
									<div>
										<div className='text-2xl font-bold'>{item.metric}</div>
										<div className='text-sm font-medium'>{item.label}</div>
										<div className='text-xs text-muted-foreground'>
											{item.detail}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default LandingHero
