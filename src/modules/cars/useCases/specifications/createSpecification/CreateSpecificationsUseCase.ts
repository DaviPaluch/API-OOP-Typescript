import { SpecificationsRepository } from "../../../repositories/implementations/Specifications/SpecificationsRepository"

interface IRequest {
  name: string,
  description: string
}

class CreateSpecificationsUseCase {

  constructor(private specificationsRepository: SpecificationsRepository) { }

  execute({ name, description }: IRequest,): void {

    const specificationsAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationsAlreadyExists) {
      throw new Error("especificação já existe...")
    }

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationsUseCase }