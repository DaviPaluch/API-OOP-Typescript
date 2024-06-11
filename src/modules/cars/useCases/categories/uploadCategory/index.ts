import { UploadCategoryController } from "./uploadCategoryController";
import { UploadCategoryUseCase } from "./uploadCategoryUseCase";

const uploadCategoryUseCase = new UploadCategoryUseCase()
const uloadCategoryController = new UploadCategoryController(uploadCategoryUseCase)

export { uloadCategoryController }