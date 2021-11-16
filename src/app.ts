import express, { Express } from 'express'
import path from 'path'
import config from './config'
import { notFound, errorHandler } from './middlewares/error.middleware'
import myRouter from './routes/myRouter.router'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/myRouter', myRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.hostname}:${config.server.port}.`)
})
