// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(
				credentials: Record<'email' | 'password', string> | undefined,
				req
			) {
				// Replace this with your user authentication logic
				const user = {
					id: '1',
					name: 'John Smith',
					email: 'jsmith@example.com',
				}

				if (
					credentials?.email === user.email &&
					credentials?.password === 'password'
				) {
					return user
				}
				return null
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth/signin',
	},
})

export { handler as GET, handler as POST }
