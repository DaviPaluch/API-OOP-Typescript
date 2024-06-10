import { CategoriesRepository } from "../../../repositories/implementations/Categories/CategoriesRepository"



interface IRequest {
  name: string,
  description: string
}

class CreateCategoryUseCase {

  constructor(private categoriesRepository: CategoriesRepository) { }

  execute({ name, description }: IRequest,): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("categoria já existe...")
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }