import {NextRequest, NextResponse} from 'next/server'
import schema, {SchemaType} from './schema'
import {prisma} from '@/prisma/client'

export async function GET(request: NextRequest) {
	const products = await prisma.product.findMany()

	return NextResponse.json(products, {status: 200})
}

export async function POST(request: NextRequest) {
	const body: SchemaType = await request.json()

	const validation = schema.safeParse(body)

	if (!validation.success) {
		return NextResponse.json(validation.error.errors, {status: 400})
	}

	const product = await prisma.product.findUnique({
		where: {name: body.name},
	})

	if (product) {
		return NextResponse.json('Product with this name already exists', {status: 409})
	}

	const newProduct = await prisma.product.create({
		data: {name: body.name, price: body.price},
	})

	return NextResponse.json(newProduct, {status: 201})
}
