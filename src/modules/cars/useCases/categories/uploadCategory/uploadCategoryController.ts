import { Request, Response } from "express"
import { UploadCategoryUseCase } from "./uploadCategoryUseCase"

class UploadCategoryController {
  constructor(private uploadCategoryUseCase: UploadCategoryUseCase) { }
  handle(req: Request, res: Response) {
    const { file } = req //recebimento do arquivo dentro do request
    this.uploadCategoryUseCase.execute(file)

    return res.send()
  }
}

export { UploadCategoryController }