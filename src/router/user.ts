import { Router } from "express";
import UserController from '../controller/user.controller'

export default class UserRouter {
    public router : Router;

    constructor() {
        this.router = Router()
        this.routes()
    }

    public routes(): void {

        // Get
        this.router.get('/', UserController.getAll)
        this.router.get('/:id', UserController.getOne)

        // Add
        this.router.post('/add', UserController.post)

        // Update
        this.router.put('/:id', UserController.put)

        // Delete
        this.router.delete('/:id', UserController.delete)
    }
}