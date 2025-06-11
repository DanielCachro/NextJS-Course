import {z} from 'zod'

const schema = z
	.object({
		name: z.string().min(3),
		price: z.number().min(0.01),
	})
	.strict()

export type SchemaType = z.infer<typeof schema>
export default schema
