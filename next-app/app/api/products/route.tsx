import {NextRequest, NextResponse} from 'next/server'
import schema from './schema'

const PRODUCTS = [
	{
		id: 1,
		name: 'Milk',
		price: 2.5,
	},
	{
		id: 2,
		name: 'Bread',
		price: 3.5,
	},
]

export function GET(request: NextRequest) {
	return NextResponse.json(PRODUCTS, {status: 200})
}

export async function POST(request: NextRequest) {
	const body = await request.json()

	const validation = schema.safeParse(body)

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, {status: 400})
	}

	return NextResponse.json({id: Math.random() * 100, name: body.name, price: body.price}, {status: 201})
}

