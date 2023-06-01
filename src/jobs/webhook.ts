import axios from "axios"


export default {
    key: 'RegistrationCarWebHook',
    options: {
        delay:1000,
    },
    async handle({data} : any){
        const url = process.env.WEBHOOK_URL ?? ''
        /* Disparando para o webhook criado 
        https://webhook.site/#!/a103983e-caf3-4415-93d4-9af478a0aad8/3430aabe-f8ba-4ba4-ad51-822931f85565/1 */
        const response = await axios.post(url , data)
        
        if(response.status === 200){
            
            console.log(`Carro ${data.title} criado com sucesso`)
            console.log(response.data)
        }
        
        
    },
    
}