"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chirps_proc_1 = require("../procedures/chirps.proc");
exports.all = (req, res, next) => {
    chirps_proc_1.default.all()
        .then((sets) => {
        res.json(sets);
    });
};
exports.allByUser = (req, res, next) => {
    chirps_proc_1.default.allByUser(+req.params.id)
        .then((sets) => {
        const chirps = sets[0];
        const count = sets[1][0];
        res.json(Object.assign({ body: chirps }, count));
    });
};
exports.allByFollower = (req, res, next) => {
    chirps_proc_1.default.allByFollower(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.read = (req, res, next) => {
    chirps_proc_1.default.read(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    chirps_proc_1.default.destroy(+req.params.id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.create = (req, res, next) => {
    chirps_proc_1.default.create(req.body.user_id, req.body.message, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
exports.update = (req, res, next) => {
    chirps_proc_1.default.update(req.body.id, req.body.user_id, req.body.message, req.body.img)
        .then((sets) => {
        res.json(sets);
    });
};
