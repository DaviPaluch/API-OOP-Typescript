// categories.routes.ts

import { Router, Request, Response } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/Categories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/categories/createCategory/index";
import { listCategoriesController } from "../modules/cars/useCases/categories/listCategories/index";

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance()



categoriesRoutes.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

export { categoriesRoutes }