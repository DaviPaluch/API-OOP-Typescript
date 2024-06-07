import { SpecificationsRepository } from "../modules/cars/repositories/Specifications/SpecificationsRepository"

interface IRequest {
  name: string,
  description: string
}

class CreateSpecificationsService {

  constructor(private specificationsRepository: SpecificationsRepository) { }

  execute({ name, description }: IRequest,): void {

    const specificationsAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationsAlreadyExists) {
      throw new Error("specificação já existe...")
    }

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationsService }