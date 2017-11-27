"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procedures = require("../procedures/users.proc");
const hash_mw_1 = require("../middleware/hash.mw");
const lodash_1 = require("lodash");
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
        res.sendStatus(204);
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
    if (!lodash_1.isNil(req.body.password)) {
        req.body.password = hash_mw_1.hashSaltPassword(req.body.password);
    }
    procedures.update(+req.params.id, req.body.name, req.body.username, req.body.email, req.body.password, req.body.age, req.body.tagline, req.body.pro_img, req.body.background_img)
        .then((sets) => {
        res.sendStatus(204);
    });
};
exports.login = (req, res, next) => {
    procedures.getUserByEmail(req.body.email)
        .then((user) => {
        if (hash_mw_1.comparePassword(req.body.password, user.password)) {
            delete user.password;
            res.json(user);
        }
        else {
            throw new Error("Incorrect Password");
        }
    });
};
