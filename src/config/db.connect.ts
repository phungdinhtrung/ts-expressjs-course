import PgDataSource from "./pg.data.source"

export function dbConnect() {
    PgDataSource.initialize()
    .then(() => console.log(`⚡️[database] connected successfully!`))
    .catch((error: string) => console.log(error))
}

