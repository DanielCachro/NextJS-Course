import {NextRequest, NextResponse} from 'next/server'
import schema from '../schema'

interface RouteContext {
	params: Promise<{
		id: number
	}>
}

export async function GET(request: NextRequest, {params}: RouteContext) {
	const {id} = await params

	if (id > 10) {
		return NextResponse.json(
			{
				error: 'User not found',
			},
			{status: 404}
		)
	}

	return NextResponse.json({id, name: 'Daniel'})
}

export async function PUT(request: NextRequest, {params}: RouteContext) {
	const body = await request.json()
	const {id} = await params

	const validation = schema.safeParse(body)

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, {status: 400})
	}

	if (id > 10) {
		return NextResponse.json({error: 'User not found'}, {status: 404})
	}
	return NextResponse.json({id: 1, name: body.name})
}

export async function DELETE(request: NextRequest, {params}: RouteContext) {
	const {id} = await params

	if (id > 10) {
		return NextResponse.json({error: 'User not found'}, {status: 404})
	}

	return NextResponse.json({})
}


