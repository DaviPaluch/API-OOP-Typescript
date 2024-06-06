import { Router, Request, Response } from "express";
import { Category } from "../model/Category";
import { CategoriesRepositoty } from "../repository/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositoty()

const categories: Category[] = [];



categoriesRoutes.post("/", async (request: Request, response: Response) => {
  const { name, description } = request.body
  console.log(name, description)

  const categoryAlreadyExists = await categoriesRepository.findByName(name)

  console.log("categoryAlreadyExists: ", categoryAlreadyExists)
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "categoria já existe..." })
  }

  categoriesRepository.create({ description, name })
  return response.status(201).send("OK");
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const data = categoriesRepository.list()
  return response.status(201).json(data);
})

export { categoriesRoutes }