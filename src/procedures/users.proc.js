"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const MODEL_NAME = 'User';
exports.default = MODEL_NAME;
_a = base_proc_1.crud(MODEL_NAME), exports.all = _a.all, exports.create = _a.create, exports.read = _a.read, exports.update = _a.update, exports.destroy = _a.destroy;
var _a;
