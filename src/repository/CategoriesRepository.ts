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

  create({ description, name }: ICreateCategoryDTO): void { // indicamos que receberemos um objeto do tipo ICreateCategoryDTO e fazemos a desestruturação dele. Depois indicamos que o retorno é VOID.
    const category = new Category()

    Object.assign(this.categories, {
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
    console.log("input: ", name)
    console.log("this.categories: ", this.categories)
    const category: Category = this.categories.find((category) => category.name === name)
    console.log("category: ", category)
    return category
  }
}

export { CategoriesRepositoty };