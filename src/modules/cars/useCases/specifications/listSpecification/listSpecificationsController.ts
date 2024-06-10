import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }

  handle(req: Request, res: Response): Response {
    const data = this.listSpecificationsUseCase.execute()
    return res.status(201).json(data);
  }
}

export { ListSpecificationsController }