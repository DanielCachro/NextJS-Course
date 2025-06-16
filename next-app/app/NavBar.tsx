'use client'
import {useSession} from 'next-auth/react'
import Link from 'next/link'

export default function NavBar() {
	const {status, data: session} = useSession()

	return (
		<div className='flex bg-slate-200 p-5 space-x-3'>
			<Link href='/' className='mr-5'>
				Next.js
			</Link>
			<Link href='/users'>Users</Link>
			<Link href='/gallery'>Gallery</Link>

			{status === 'loading' && <p>Loading...</p>}
			{status === 'authenticated' && (
				<p className='flex gap-3'>
					{session.user!.name}
					<Link href='/api/auth/signout'>Sign Out</Link>
				</p>
			)}
			{status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
		</div>
	)
}
