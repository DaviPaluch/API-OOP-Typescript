import { UploadCategoryController } from "./uploadCategoryController";
import { UploadCategoryUseCase } from "./uploadCategoryUseCase";
import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../../repositories/implementations/Categories/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance()
const uploadCategoryUseCase = new UploadCategoryUseCase(categoriesRepository)
const uloadCategoryController = new UploadCategoryController(uploadCategoryUseCase)

export { uloadCategoryController }