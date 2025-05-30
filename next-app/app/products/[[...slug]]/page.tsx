interface Props {
	params: Promise<{slug: string[]}>
	searchParams: Promise<{sortOrder: string}>
}

export default async function ProductPage({params, searchParams}: Props) {
	const {slug} = await params
	const {sortOrder} = await searchParams

	return (
		<div>
			Dynamic segments: {slug}, Sort Order: {sortOrder}
		</div>
	)
}
