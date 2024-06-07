import { Category } from "../../model/Category";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "./ISpecificationsRepository";

class PostgresSpecificationsRepository implements ISpecificationsRepository {
  findByName(name: string): Category {
    console.log(name)
    return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICreateSpecificationsDTO): void {
    console.log(name, description)
    return null
  }

}