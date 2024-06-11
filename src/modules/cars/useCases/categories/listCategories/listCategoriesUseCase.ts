import { Category } from "../../../model/Category";
import { CategoriesRepository } from "../../../repositories/implementations/Categories/CategoriesRepository";

import { Response } from "express";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  execute(): Category[] {
    const categories = this.categoriesRepository.list()
    return categories
  }
}

export { ListCategoriesUseCase }