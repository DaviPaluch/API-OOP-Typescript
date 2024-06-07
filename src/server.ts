// server.ts
import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specifications.routes'

const server = express()

server.use(express.json())
server.use("/categories", categoriesRoutes)
server.use("/specifications", specificationsRoutes)

server.get("/", (req, res) => {
  console.log("hello world")

})

server.listen(3000, () => console.log("server is running..."))

