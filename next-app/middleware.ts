export {default} from 'next-auth/middleware'

export const config = {
	// *: zero or more
	// +: one or more
	// ?: zero or one
	// : just one
	matcher: ['/users/:id*'],
}


