//CategoriesRepository.ts

import exp from "constants";
import { Category } from "../model/Category";
import { response } from "express";


// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string,
  description: string
}
class CategoriesRepositoty {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
    const category: Category =  this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepositoty };