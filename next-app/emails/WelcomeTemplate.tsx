
import {Html, Body, Container, Text, Link, Preview, Tailwind} from '@react-email/components'

export default function WelcomeTemplate({name}: {name: string}) {
	return (
		<Html>
			<Tailwind>
				<Preview className='font-bold text-2xl text-amber-950'>Welcome Abroad!</Preview>
				<Body className='bg-amber-100'>
					<Container>
						<Text>Hello {name}</Text>
						<Link href='https://www.google.com'>www.google.com</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}


