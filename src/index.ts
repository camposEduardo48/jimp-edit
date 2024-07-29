import fastify from 'fastify'
import { env } from './lib/zod/envSchema'
import routes from './routes/homeRoutes'

export const app = fastify({
  logger: true,
})
const PORT = env.PORT

app.register(routes)

app.listen({ port: PORT }).then(() => {
  console.log('Server running!')
})
