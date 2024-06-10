import { SpecificationsRepository } from "../../../repositories/implementations/Specifications/SpecificationsRepository"
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase"
import { ListSpecificationsController } from "./listSpecificationsController"

const specificationRepository = SpecificationsRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationsUseCase(specificationRepository)
const listSpecificationController = new ListSpecificationsController(listSpecificationUseCase)

export { listSpecificationController }