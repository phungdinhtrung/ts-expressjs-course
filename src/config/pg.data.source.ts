import { User } from "../entities/user.entity";
import { DataSource } from "typeorm"
require('dotenv').config()


const PgDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: true,
    logger: "file",
    entities: [ User ],
    synchronize: true 
})

export default PgDataSource;