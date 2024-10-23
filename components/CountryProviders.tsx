// components/CountryProviders.tsx
//countries
import { countries } from '@/data/countries'
const CountryProviders = () => (
	<section className='mb-12'>
		<h2 className='text-2xl font-semibold mb-4'>
			Supported Countries and Mobile Providers
		</h2>
		<ul className='list-disc list-inside'>
			{countries.map(({ name, flag, providers }) => (
				<li key={name}>
					{flag} {name}
					<ul>
						{providers.map((provider) => (
							<li key={provider}>{provider}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</section>
)

export default CountryProviders
