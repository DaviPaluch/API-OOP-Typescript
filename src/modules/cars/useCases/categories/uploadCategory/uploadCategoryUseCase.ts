import fs from "fs";
import { parse } from "csv-parse";
import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

interface IUploadCategory {
  name: string
  description: string
}

class UploadCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) { }

  loadCategories(file: Express.Multer.File): IUploadCategory[] {
    const stream = fs.createReadStream(file.path)
    const categories: IUploadCategory[] = [];


    const parseFile = parse({ delimiter: ',' })

    stream.pipe(parseFile)

    parseFile.on("data", async (line) => {
      const [name, description] = line //desestruturação
      categories.push({ name, description })

    })

    return categories
  }

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parserFile = parse({
      delimiter: ','
    });

    stream.pipe(parserFile); //'.pipe' é responsável por pegar o pedaço lido (linha) do que queremos manipular depois

    parserFile.on('data', async (line) => {
      console.log(line);
    });

    parserFile.on('end', () => {
      console.log('CSV file processed successfully.');
    });

    parserFile.on('error', (error) => {
      console.error('Error processing CSV file:', error);
    });

    //console.log(file);
  }
}

export { UploadCategoryUseCase };