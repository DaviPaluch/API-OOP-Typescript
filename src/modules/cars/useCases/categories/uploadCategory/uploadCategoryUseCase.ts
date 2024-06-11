class UploadCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file)
  }
}

export { UploadCategoryUseCase }