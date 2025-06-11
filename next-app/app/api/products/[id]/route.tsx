import {prisma} from '@/prisma/client'
import {NextRequest, NextResponse} from 'next/server'
import schema, {SchemaType} from '../schema'

interface RouteContext {
	params: Promise<{id: string}>
}

export async function GET(request: NextRequest, {params}: RouteContext) {
	const {id: stringId} = await params
	const id = Number(stringId)

	const product = await prisma.product.findUnique({
		where: {id},
	})

	if (!product) {
		return NextResponse.json('Product not found', {status: 404})
	}

	return NextResponse.json(product, {status: 200})
}

export async function PUT(request: NextRequest, {params}: RouteContext) {
	const {id: stringId} = await params
	const id = Number(stringId)
	const body: SchemaType = await request.json()

	const validation = schema.safeParse(body)

	if (!validation.success) {
		return NextResponse.json(validation.error, {status: 400})
	}

	const product = await prisma.product.findUnique({
		where: {id},
	})

	if (!product) {
		return NextResponse.json('Product not found', {status: 404})
	}

	const updatedProduct = await prisma.product.update({
		where: {id},
		data: {
			name: body.name,
			price: body.price,
		},
	})

	return NextResponse.json(updatedProduct, {status: 201})
}

export async function DELETE(request: NextRequest, {params}: RouteContext) {
	const {id: stringId} = await params
	const id = Number(stringId)

	const product = await prisma.product.findUnique({
		where: {id},
	})

	if (!product) {
		return NextResponse.json('Product not found', {status: 404})
	}

	await prisma.product.delete({
		where: {id},
	})

	return NextResponse.json('Product successfully deleted', {status: 200})
}
