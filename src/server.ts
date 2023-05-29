import fastify from 'fastify'
import 'dotenv/config'
import { carsRoutes } from './routes/cars'
import { logsRoutes } from './routes/logs'

const app = fastify()

app.register(carsRoutes)
app.register(logsRoutes)

app.listen({
    port: 3333,
}).then(() => console.log('HTTP Server is running on port http://localhost:3333'))