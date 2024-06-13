//index.ts

import { DataSource } from 'typeorm'
import { Category } from '../modules/cars/model/Category'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "renalt",
  synchronize: true,
  logging: true,
  entities: [Category],
  subscribers: [],
  migrations: [],
})