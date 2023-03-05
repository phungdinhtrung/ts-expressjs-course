import { Router } from 'express'
import { IServer } from '../interfaces/server.interface'
import  UserRouter from './user'

export default class Routes {
    static init(server: IServer): void {
        const router : Router = Router()

        // user
        server.app.use('/user', new UserRouter().router)

    }
} 
