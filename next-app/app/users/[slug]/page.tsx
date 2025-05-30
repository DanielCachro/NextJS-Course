import {notFound} from 'next/navigation'

interface Props {
	params: Promise<{slug: number}>
}

export default async function UserDetailPage({params}: Props) {
	const {slug} = await params

	if (slug > 10) {
		notFound()
	}

	return <div>UserDetailPage {slug}</div>
}
