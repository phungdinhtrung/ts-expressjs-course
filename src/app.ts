import express, { Express } from 'express'
import Middleware from './middleware/app.middleware'
import Routes from './router/index'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000
import { dbConnect } from './config/db.connect'


class App {
    public app: Express = express()

    constructor() {
        this.app = express()
        Middleware.init(this)
        Routes.init(this)
        dbConnect()
    }
}


const app = new App().app

app.listen(port, () => {
    console.log(`⚡️[server] is listenning on port ${port}`);
});

