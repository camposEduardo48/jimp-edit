import { FastifyInstance } from 'fastify'
import HomeController from '../controllers/homeController'

const routes = async (app: FastifyInstance) => {
  app.get('/home', HomeController)
}

export default routes
