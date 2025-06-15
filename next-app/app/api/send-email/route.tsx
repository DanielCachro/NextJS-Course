
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
	try {
		const {data, error} = await resend.emails.send({
			from: 'Wypożyczalnia <aneta@szaflarycars.pl>',
			to: ['niezaufanedaniel@gmail.com'],
			subject: 'Hello world',
			react: <WelcomeTemplate name='niezaufanedaniel' />,
		})

		if (error) {
			return Response.json({error}, {status: 500})
		}

		return Response.json(data)
	} catch (error) {
		return Response.json({error}, {status: 500})
	}
}












