"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const create = (follower_id, following_id) => {
    return base_proc_1.empty('spInsertFollower', [follower_id, following_id]);
};
const destroy = (follower_id, following_id) => {
    return base_proc_1.empty('spDeleteFollower', [follower_id, following_id]);
};
exports.default = {
    create,
    destroy
};
