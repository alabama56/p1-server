import { Request, Response, NextFunction } from "express";
import { procedure } from "../config/db/index";
import * as procedures from "../procedures/users.proc";
import { json } from "body-parser";
import { hashSaltPassword, comparePassword } from "../middleware/hash.mw";
import { isNil } from "lodash"

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets: any) => {
            res.json(sets);
        })
}

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets: any) => {
            res.json(sets);
        })
}

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
        .then((sets: any) => {
            res.sendStatus(204);
        })
}

export const create = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.password) {
        throw new Error("NEED PASSWORD");
    }

    req.body.password = hashSaltPassword(req.body.password);

    procedures.create(req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets: any) => {
            res.json(sets);
        })
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    if(!isNil(req.body.password)){
        req.body.password = hashSaltPassword(req.body.password);
    }

    procedures.update(+req.params.id, req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
    .then((sets: any) => {
        res.sendStatus(204);
    })
}

export const login = (req: Request, res: Response, next: NextFunction) => {
    procedures.getUserByEmail(req.body.email)
        .then((user: any) => {
            if(comparePassword(req.body.password, user.password)){
                delete user.password
                
                res.json(user)
            }else {
                throw new Error("Incorrect Password")
            }
   
        })
}