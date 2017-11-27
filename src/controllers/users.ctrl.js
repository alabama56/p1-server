"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures = require("../procedures/users.proc");
const hash_mw_1 = require("../middleware/hash.mw");
exports.all = (req, res, next) => {
    procedures.all()
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
    if (!req.body.password) {
        throw new Error("NEED PASSWORD");
    }
    req.body.password = hash_mw_1.hashSaltPassword(req.body.password);
    procedures.create(req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    procedures.update(+req.params.id, req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets) => {
        res.sendStatus(204);
    });
};
