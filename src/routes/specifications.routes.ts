// categories.routes.ts

import { Router, Request, Response } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/Specifications/SpecificationsRepository";
import { CreateSpecificationsService } from "../services/CreateSpecificationsService";
import { listCategoriesController } from "../modules/cars/useCases/categories/listCategories";


const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository()



specificationsRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateSpecificationsService(specificationsRepository)

  createCategoryService.execute({ name, description })

  return response.status(201).send("sucesso");
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
  const data = listCategoriesController.handle(request, response)
  return response.status(201).json(data);
})

export { specificationsRoutes }