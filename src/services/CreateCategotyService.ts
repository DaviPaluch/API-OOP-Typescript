import { CategoriesRepositoty } from "../repository/CategoriesRepository"



interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {

    constructor(private categoriesRepositoty: CategoriesRepositoty){}

    execute({name,description}: IRequest):void {
        const categoriesRepositoty = new CategoriesRepositoty()

        const categoryAlreadyExists = categoriesRepositoty.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error( "categoria já existe...")
        }

        categoriesRepositoty.create({name,description})
    }
}

export { CreateCategoryService }