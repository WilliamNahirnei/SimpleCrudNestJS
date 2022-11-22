require('dotenv').config()
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ["./migrations/*.ts"],
    entities: [
      "dist/**/*.entity/*.ts"
  ],
})

export default AppDataSource