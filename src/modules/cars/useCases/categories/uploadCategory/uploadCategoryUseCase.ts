import fs from "fs";
import { parse } from "csv-parse";

class UploadCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parser = parse({
      delimiter: ','
    });

    stream.pipe(parser); //'.pipe' é responsável por pegar o pedaço lido (linha) do que queremos manipular depois

    parser.on('data', async (line) => {
      console.log(line);
    });

    parser.on('end', () => {
      console.log('CSV file processed successfully.');
    });

    parser.on('error', (error) => {
      console.error('Error processing CSV file:', error);
    });

    //console.log(file);
  }
}

export { UploadCategoryUseCase };
