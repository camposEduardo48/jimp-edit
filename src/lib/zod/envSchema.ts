import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number(),
})

type envSchemaType = z.infer<typeof envSchema>

envSchema.parse(process.env)

export const env = {
  PORT: Number(process.env.PORT),
} as envSchemaType
