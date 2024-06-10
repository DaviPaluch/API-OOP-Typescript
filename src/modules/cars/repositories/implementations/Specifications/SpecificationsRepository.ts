//CategoriesRepository.ts

import { Specification } from "../../../model/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../../ISpecificationsRepository";



class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository()
    }
    return this.INSTANCE
  }

  create({ description, name }: ICreateSpecificationsDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification: Specification = this.specifications.find((category) => category.name === name)
    return specification
  }
}

export { SpecificationsRepository };