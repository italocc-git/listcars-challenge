import { prisma} from '../lib/prisma'

export default {
    key: 'RegistrationCarWebHook',
    options: {
        delay:1000,
    },
    async handle({data} : any){
        if(data){
            const carId = data._id
            const log = await prisma.logs.create({
                data:{
                    car_id : carId
                }
            })
            console.log(`Log ${log.id} gerado ao cadastrar o carro ${data.title}`)
        
        }
        
        
    },
    
}