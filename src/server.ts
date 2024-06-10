// server.ts
import express from 'express'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use(router)

server.get("/", (req, res) => {
  console.log("hello world")

})

server.listen(3000, () => console.log("server is running..."))

