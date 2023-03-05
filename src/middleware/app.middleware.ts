import express from 'express'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import { IServer } from "../interfaces/server.interface";

export default class Middleware {
    static init(server: IServer): void {

        server.app.use(express.static(path.join(__dirname, 'public')));
        server.app.use(cors())
        server.app.use(helmet())
        server.app.use(express.json())

        server.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With,' +
                ' Content-Type, Accept,' +
                ' Authorization,' +
                ' Access-Control-Allow-Credentials'
            );
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}