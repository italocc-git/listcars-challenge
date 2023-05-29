import { FastifyInstance } from 'fastify';
import { prisma} from '../lib/prisma'

export async function logsRoutes(app : FastifyInstance) {

    app.get('/logs' , async() => {

        const logs = await prisma.logs.findMany()

        return logs
    })
}