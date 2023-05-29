import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { api } from '../lib/axios'
import { prisma} from '../lib/prisma'

export async function carsRoutes(app : FastifyInstance) {

    app.get('/cars-list', async() => {

        const response= await api.get('cars')

        const carsList = response.data

        return carsList
    })

    app.post('/car', async(req, resp) => {

        const bodySchema = z.object({
            title : z.string(),
            brand : z.string(),
            price : z.string(),
            age : z.number()
        })
        const {title , brand, price , age} = bodySchema.parse(req.body)

        const {data} = await api.post('cars' , {
            title,
            brand,
            price,
            age
        })
        console.log(data)
        const car_id = data._id

        if(data){
            await prisma.logs.create({
                data: {
                    car_id
                }
            })
        }

        return resp.status(201).send(data)
    })
}
