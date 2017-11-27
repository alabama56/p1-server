"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const base_proc_2 = require("./base.proc");
const utils_mw_1 = require("../middleware/utils.mw");
const users_proc_1 = require("./users.proc");
let MODEL_NAME = 'Chirp';
exports.getFollowing = (...args) => {
    return base_proc_1.rows(`${base_proc_2.SQL_GET}Following${utils_mw_1.pluralize(MODEL_NAME)}`, args);
};
exports.getByUser = (...args) => {
    return base_proc_1.rowsets(`${base_proc_2.SQL_GET}${utils_mw_1.pluralize(MODEL_NAME)}${base_proc_2.BY}${users_proc_1.default}`, args);
};
_a = base_proc_1.crud(MODEL_NAME), exports.all = _a.all, exports.create = _a.create, exports.read = _a.read, exports.update = _a.update, exports.destroy = _a.destroy;
var _a;
