"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const base_proc_2 = require("./base.proc");
const utils_mw_1 = require("../middleware/utils.mw");
const MODEL_NAME = 'Follower';
exports.getFollowers = (...args) => {
    return base_proc_1.rows(`${base_proc_2.SQL_GET}${utils_mw_1.pluralize(MODEL_NAME)}`, args);
};
_a = base_proc_1.crud(MODEL_NAME), exports.create = _a.create, exports.destroy = _a.destroy;
var _a;
