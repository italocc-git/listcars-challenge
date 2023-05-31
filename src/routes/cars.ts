import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { api } from '../lib/axios'
import queue from '../lib/queue';

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
        try {
            const {title , brand, price , age} = bodySchema.parse(req.body)
        
            const {data} = await api.post('cars' , {
                title,
                brand,
                price,
                age
            })
            
            
            await queue.add('RegistrationCarWebHook', data)

            return resp.status(201).send(data)
        
        }catch(error) {
            if(error instanceof z.ZodError){
                const jsonErrorMessage = error.issues.map(issue => ({
                    field : issue.path[0],
                    message : issue.message
                }))
                return resp.status(400).send(jsonErrorMessage)
            }
        }

        
        

       

        
    })
}
