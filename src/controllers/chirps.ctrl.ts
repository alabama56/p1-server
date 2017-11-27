import { Request, Response, NextFunction } from "express";
import { procedure } from "../config/db/index";
import * as procedures from "../procedures/chirps.proc";
import { json } from "body-parser";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets: any) => {
            res.json(sets);
        })
}

export const allByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.getByUser(+req.params.id)
        .then((sets: any) => {
            const chirps = sets[0]
            const count = sets[1][0]
            res.json({
                body:chirps,
                ...count
            });
        })
}

export const allByFollower = (req: Request, res: Response, next: NextFunction) => {
    procedures.getFollowing(+req.params.id)
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
    procedures.create(req.body.user_id, req.body.message)
        .then((sets: any) => {
            res.json(sets);
        })
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(req.body.id, req.body.user_id, req.body.message)
    .then((sets: any) => {
        res.json(sets);
    })
}

