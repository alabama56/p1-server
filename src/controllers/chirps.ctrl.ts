import { Request, Response, NextFunction } from "express";
import { procedure } from "../config/db/index";
import procedures from "../procedures/chirps.proc";
import { json } from "body-parser";

export const all = (req: Request, res: Response, next: NextFunction) => {
    procedures.all()
        .then((sets) => {
            res.json(sets);
        })
}

export const allByUser = (req: Request, res: Response, next: NextFunction) => {
    procedures.allByUser(+req.params.id)
        .then((sets) => {
            const chirps = sets[0]
            const count = sets[1][0]
            res.json({
                body:chirps,
                ...count
            });
        })
}

export const allByFollower = (req: Request, res: Response, next: NextFunction) => {
    procedures.allByFollower(+req.params.id)
        .then((sets) => {
            res.json(sets);
        })
}

export const read = (req: Request, res: Response, next: NextFunction) => {
    procedures.read(+req.params.id)
        .then((sets) => {
            res.json(sets);
        })
}

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(+req.params.id)
        .then((sets) => {
            res.json(sets);
        })
}

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.user_id, req.body.message, req.body.img)
        .then((sets) => {
            res.json(sets);
        })
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    procedures.update(req.body.id, req.body.user_id, req.body.message, req.body.img)
    .then((sets) => {
        res.json(sets);
    })
}

