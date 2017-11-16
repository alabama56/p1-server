"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_proc_1 = require("../procedures/users.proc");
const hash_mw_1 = require("../middleware/hash.mw");
exports.all = (req, res, next) => {
    users_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    users_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    users_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    if (!req.body.password) {
        throw new Error("NEED PASSWORD");
    }
    req.body.password = hash_mw_1.hashSaltPassword(req.body.password);
    users_proc_1.default.create(req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    users_proc_1.default.update(+req.params.id, req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets) => {
        res.json(sets);
    });
};
