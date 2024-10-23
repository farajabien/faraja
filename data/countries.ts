// data/countries.ts
type Country = {
	name: string
	flag: string
	providers: string[]
}

export const countries: Country[] = [
	{
		name: 'Nigeria',
		flag: '🇳🇬',
		providers: ['MTN Nigeria', 'Glo Mobile', 'Airtel Nigeria', '9mobile'],
	},
	{
		name: 'Ghana',
		flag: '🇬🇭',
		providers: ['MTN Ghana', 'Vodafone Ghana', 'AirtelTigo', 'Glo Ghana'],
	},
	{
		name: 'Kenya',
		flag: '🇰🇪',
		providers: ['Safaricom', 'Airtel Kenya', 'Telkom Kenya', 'Equitel Kenya'],
	},
]
