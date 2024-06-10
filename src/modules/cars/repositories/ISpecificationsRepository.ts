import { Specification } from "../model/Specification";

// DTO => Data transfer object
interface ICreateSpecificationsDTO {
  name: string,
  description: string
}

interface ISpecificationsRepository {
  findByName(name: string): Specification
  list(): Specification[]
  create({ name, description }: ICreateSpecificationsDTO): void
}
export { ISpecificationsRepository, ICreateSpecificationsDTO }