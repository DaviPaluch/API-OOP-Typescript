// categories.routes.ts

import { Router, Request, Response } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()



categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return response.status(201).send("sucesso");
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const data = categoriesRepository.list()
  return response.status(201).json(data);
})

export { categoriesRoutes }