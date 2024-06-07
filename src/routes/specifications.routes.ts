// categories.routes.ts

import { Router, Request, Response } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/Specifications/SpecificationsRepository";
import { CreateSpecificationsService } from "../services/CreateSpecificationsService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository()



specificationsRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateSpecificationsService(specificationsRepository)

  createCategoryService.execute({ name, description })

  return response.status(201).send("sucesso");
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
  const data = specificationsRepository.list()
  return response.status(201).json(data);
})

export { specificationsRoutes }