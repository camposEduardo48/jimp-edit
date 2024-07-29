import { FastifyReply, FastifyRequest } from 'fastify'
import { imageManipulated } from '../services/generateImage'

const HomeController = async (request: FastifyRequest, reply: FastifyReply) => {
  imageManipulated()
  return reply.status(201).send('Imagem manipulada com isso!')
}
export default HomeController
