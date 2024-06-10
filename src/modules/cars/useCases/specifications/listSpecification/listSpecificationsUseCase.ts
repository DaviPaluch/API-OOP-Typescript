import { Specification } from "../../../model/Specification";
import { SpecificationsRepository } from "../../../repositories/implementations/Specifications/SpecificationsRepository";


class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) { }

  execute(): Specification[] {
    const specification = this.specificationsRepository.list()
    return specification
  }
}

export { ListSpecificationsUseCase }