import { CreateSpecificationsController } from "./CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";
import { SpecificationsRepository } from "../../../repositories/implementations/Specifications/SpecificationsRepository";
import exp from "constants";

const specificationsRepository = SpecificationsRepository.getInstance()
const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository)
const createSpecificationsController = new CreateSpecificationsController(createSpecificationsUseCase)

export { createSpecificationsController }