import fastify, { FastifyInstance, RouteShorthandOptions, FastifyRequest } from 'fastify'

import { UserType } from './types'

const server: FastifyInstance = fastify({})

server.get<{ Params: UserType }>('/ping/:username', async function (request, reply) {

    const { username } = request.params

    const pong = username ?? 'PONG'

    console.log({ pong })
    // reply.code(200).send({ pong })
    return { pong }
})

const start = async () => {
    try {
        await server.listen(3000)
        console.log(`Server started: 0.0.0.0:3000`)
    } catch (error: any) {
        console.error(error)
        process.exit()
    }
}

start()