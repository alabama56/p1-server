import { Request, Response, NextFunction } from "express";
import procedures from "../procedures/followers.proc";
import { json } from "body-parser";

export const create = (req: Request, res: Response, next: NextFunction) => {
    procedures.create(req.body.follower_id, req.body.following_id)
        .then((sets) => {
            res.json(sets);
        })
}

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    procedures.destroy(req.body.follower_id, req.body.following_id)
        .then((sets) => {
            res.json(sets);
        })
}



