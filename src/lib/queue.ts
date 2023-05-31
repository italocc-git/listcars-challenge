import  Queue  from "bull";
import * as jobs from '../jobs'
const redisConfig =  {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  };

const queues = Object.values(jobs).map((job : any) => ({
    bull: new Queue(job.key , {
        redis: redisConfig
    } ),
    name: job.key,
    handle: job.handle,
    options: job.options,
}))


export default {
    queues, 
    add(name: string , data : any) {
        const queue = this.queues.find(queue => queue.name === name)

        return queue?.bull.add(data , queue.options)
    },
    process() {
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed', (job,err) => {
                console.log('Job Failed', queue.name)
                console.log(err)
            })
        })
    }
}