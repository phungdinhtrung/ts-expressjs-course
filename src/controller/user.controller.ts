import { Request, Response, NextFunction } from "express";
import UserModel from "../model/user.model";

class UserController {
    // add
    public async post (req: Request, res: Response, next: NextFunction): Promise <any> {
        const result = await UserModel.add(req.body)
        res.status(200).json(result)
    }

    // Get
    public async getAll (req: Request, res: Response, next: NextFunction): Promise <any> {
        const result = await UserModel.getAll()
        res.status(200).json(result)
    }

    public async getOne (req: Request, res: Response, next: NextFunction): Promise <any> {
        const result = await UserModel.getOne(req.params.id)
        res.status(200).json(result)
    }

    // Update
    public async put (req: Request, res: Response, next: NextFunction): Promise <any> {
        const result = await UserModel.update(req.params.id, req.body)
        res.status(200).json(result)
    }

    // Delete
    public async delete (req: Request, res: Response, next: NextFunction): Promise <any> {
        const result = await UserModel.delete(req.params.id)
        res.status(200).json(result)
    }
}

export default new UserController();