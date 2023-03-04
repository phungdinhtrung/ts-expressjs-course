
import express, { Express, Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
const port = process.env.SERVER_PORT || 3000


const app: Express = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.json())


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port :${port}`);
});