"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures = require("../procedures/followers.proc");
exports.create = (req, res, next) => {
    procedures.create(req.body.follower_id, req.body.following_id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    procedures.destroy(req.body.follower_id, req.body.following_id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.all = (req, res, next) => {
    procedures.all(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
