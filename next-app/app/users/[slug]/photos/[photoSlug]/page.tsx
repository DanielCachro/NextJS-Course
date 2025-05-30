
interface Props {
	params: Promise<{slug: number; photoSlug: number}>
}

export default async function PhotoDetailPage({params}: Props) {
	const {slug, photoSlug} = await params

	return (
		<div>
			users/{slug}/photos/{photoSlug}
		</div>
	)
}




