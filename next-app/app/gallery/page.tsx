import Image from 'next/image'

export default function GalleryPage() {
	return (
		<div className='w-96 h-96 relative'>
			<Image
				src='https://bit.ly/react-cover'
				fill
				sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
				alt='react cover'
				className='object-cover rounded-lg'
                priority
			/>
		</div>
	)
}
