'use client'

import {CldUploadWidget, CldImage, CloudinaryUploadWidgetInfo} from 'next-cloudinary'
import {useState} from 'react'

export default function UploadPage() {
	const [publicId, setPublicId] = useState('')

	return (
		<>
			{publicId && <CldImage src={publicId} width={270} height={180} alt='A cofee image' />}

			<CldUploadWidget
				options={{
					sources: ['local'],
					showAdvancedOptions: false,
					cropping: true,
					multiple: false,
					defaultSource: 'local',
					styles: {
						palette: {
							window: '#ffffff',
							sourceBg: '#f4f4f5',
							windowBorder: '#90a0b3',
							tabIcon: '#000000',
							inactiveTabIcon: '#555a5f',
							menuIcons: '#555a5f',
							link: '#0433ff',
							action: '#339933',
							inProgress: '#0433ff',
							complete: '#339933',
							error: '#cc0000',
							textDark: '#000000',
							textLight: '#fcfffd',
						},
						fonts: {
							default: null,
							'sans-serif': {
								url: null,
								active: true,
							},
						},
					},
				}}
				onSuccess={results => {
					const info = results.info as CloudinaryUploadWidgetInfo
					setPublicId(info.public_id)
				}}
				uploadPreset='nextjs_course'>
				{({open}) => (
					<button className='btn btn-primary' onClick={() => open()}>
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	)
}
