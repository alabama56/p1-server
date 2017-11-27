"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const base_proc_2 = require("./base.proc");
const MODEL_NAME = 'User';
exports.default = MODEL_NAME;
exports.getUserByEmail = (...args) => {
    return base_proc_1.row(`${base_proc_2.SQL_GET}${MODEL_NAME}${base_proc_2.BY}${base_proc_2.EMAIL}`, args);
};
_a = base_proc_1.crud(MODEL_NAME), exports.all = _a.all, exports.create = _a.create, exports.read = _a.read, exports.update = _a.update, exports.destroy = _a.destroy;
var _a;
