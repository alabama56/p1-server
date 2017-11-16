"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const followers_proc_1 = require("../procedures/followers.proc");
exports.create = (req, res, next) => {
    followers_proc_1.default.create(req.body.follower_id, req.body.following_id)
        .then((sets) => {
        res.json(sets);
    });
};
exports.destroy = (req, res, next) => {
    followers_proc_1.default.destroy(req.body.follower_id, req.body.following_id)
        .then((sets) => {
        res.json(sets);
    });
};
