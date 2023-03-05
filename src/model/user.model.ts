import { Request, Response, NextFunction } from "express";
import { User } from "../entities/user.entity";
import PgDataSource from "../config/pg.data.source";

class UserModel {
    // add
    static async add (params: any): Promise <any> {
        const user = PgDataSource.getRepository(User).create(params)
        return await PgDataSource.getRepository(User).save(user)
    }

    // get
    static async getAll (): Promise <any> {
        return await PgDataSource.getRepository(User).find()
    }

    static async getOne (user_id: any): Promise <any> {
        return await PgDataSource.getRepository(User).findOneBy({ id: user_id})
    }


    // Update
    static async update (user_id: any, user_edit: any): Promise <any> {
        const user = await PgDataSource.getRepository(User).findOneBy({ id: user_id})

        if(user){
            PgDataSource.getRepository(User).merge(user, user_edit)
            return await PgDataSource.getRepository(User).save(user)
        }
        return []
    }

    // Delete
    static async delete (user_id: any): Promise <any> {
        return await PgDataSource.getRepository(User).delete({ id: user_id})
    }

}

export default UserModel;