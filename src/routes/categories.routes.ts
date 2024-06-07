// categories.routes.ts

import { Router, Request, Response } from "express";
import { CategoriesRepositoty } from "../repository/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategotyService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositoty()



categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({name,description})

  return response.status(201).send("sucesso");
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const data = categoriesRepository.list()
  return response.status(201).json(data);
})

export { categoriesRoutes }