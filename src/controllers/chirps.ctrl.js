"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures = require("../procedures/chirps.proc");
exports.all = (req, res, next) => {
    procedures.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.allByUser = (req, res, next) => {
    procedures.GetByUser(+req.params.id)
        .then((sets) => {
        const chirps = sets[0];
        const count = sets[1][0];
        res.json(Object.assign({ body: chirps }, count));
    });
};
exports.allByFollower = (req, res, next) => {
    procedures.GetFollowing(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    procedures.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    procedures.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    procedures.create(req.body.user_id, req.body.message, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    procedures.update(req.body.id, req.body.user_id, req.body.message, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
