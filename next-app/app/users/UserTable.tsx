import Link from 'next/link'
import {sort} from 'fast-sort'

interface Props {
	sortOrder: string
}

interface User {
	id: number
	name: string
	email: string
}

export default async function UserTable({sortOrder}: Props) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users: User[] = await res.json()

	const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

	return (
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th>
						<Link href='/users?sortOrder=name'>Name</Link>
					</th>
					<th>
						<Link href='/users?sortOrder=email'>Email</Link>
					</th>
				</tr>
			</thead>
			<tbody>
				{sortedUsers.map(user => (
					<tr key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
