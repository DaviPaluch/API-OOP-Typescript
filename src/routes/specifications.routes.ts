// categories.routes.ts

import { Router, Request, Response } from "express";
import { createSpecificationsController } from "../modules/cars/useCases/specifications/createSpecification/index";
import { listSpecificationController } from "../modules/cars/useCases/specifications/listSpecification/index";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/Specifications/SpecificationsRepository";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationsController.handle(request, response)
})

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return listSpecificationController.handle(request, response)
})

export { specificationsRoutes }