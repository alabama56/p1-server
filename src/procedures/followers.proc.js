"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const base_proc_2 = require("./base.proc");
const utils_mw_1 = require("../middleware/utils.mw");
const MODEL_NAME = 'Follower';
const additional_getFollowers = (MODEL_NAME) => {
    return (...args) => {
        return base_proc_1.rows(`${base_proc_2.SQL_GET}${utils_mw_1.pluralize(MODEL_NAME)}`, args);
    };
};
const additionalProcedures = {
    getFollowers: additional_getFollowers(MODEL_NAME),
};
_a = base_proc_1.crud(MODEL_NAME, additionalProcedures), exports.create = _a.create, exports.destroy = _a.destroy, exports.getFollowers = _a.getFollowers;
var _a;
