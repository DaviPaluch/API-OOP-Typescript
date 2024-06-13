// categories.routes.ts
import { Router, Request, Response } from "express";
import multer from "multer";
import createCategoryController from "../modules/cars/useCases/categories/createCategory/index";
import { listCategoriesController } from "../modules/cars/useCases/categories/listCategories/index";
import { uloadCategoryController } from "../modules/cars/useCases/categories/uploadCategory/index";

const categoriesRoutes = Router();

/*biblioteca para upload de arquivos*/
/* estamos redirecinando o arquivo para uma pasta temporaria para manipulação em 'tmp' */
const upload = multer({ dest: "./tmp" })

categoriesRoutes.post("/", (request: Request, response: Response) => {
  console.log("panda")
  return createCategoryController().handle(request, response)
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

//passamos o arquivo como middleware para dentro da nossa aplicação.
//utilizamos o método '.single' para receber apenas um arquivo por vez.
//
categoriesRoutes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  return uloadCategoryController.handle(request, response)
})

export { categoriesRoutes } 