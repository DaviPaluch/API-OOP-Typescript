// server.ts
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

server.use(router)

server.get("/", (req, res) => {
  console.log("hello world")
  return res.send("hello")
})


server.listen(3000, () => console.log("server is running..."))

