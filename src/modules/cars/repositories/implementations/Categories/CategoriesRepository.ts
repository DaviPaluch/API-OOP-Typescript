//CategoriesRepository.ts

import { Category } from "../../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../../ICategoriesRepository";



class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category: Category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository };