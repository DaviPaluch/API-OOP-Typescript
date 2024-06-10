import { Request, Response } from "express"
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

class CreateSpecificationsController {

  constructor(private createSpecificationUseCase: CreateSpecificationsUseCase) { }

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    this.createSpecificationUseCase.execute({ name, description })

    return res.status(201).send("sucesso");
  }
}

export { CreateSpecificationsController }