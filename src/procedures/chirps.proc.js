"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const base_proc_2 = require("./base.proc");
const utils_mw_1 = require("../middleware/utils.mw");
const users_proc_1 = require("./users.proc");
let MODEL_NAME = 'Chirp';
const additional_GetFollowing = (MODEL_NAME) => {
    return (...args) => {
        return base_proc_1.rows(`${base_proc_2.SQL_GET}Following${MODEL_NAME}`, args);
    };
};
const additional_GetByUser = (MODEL_NAME) => {
    return (...args) => {
        return base_proc_1.rows(`${base_proc_2.SQL_GET}${MODEL_NAME}${base_proc_2.BY}${users_proc_1.default}`, args);
    };
};
const additionalProcedures = {
    GetFollowing: additional_GetFollowing(utils_mw_1.pluralize(MODEL_NAME)),
    GetByUser: additional_GetByUser(MODEL_NAME)
};
_a = base_proc_1.crud(MODEL_NAME, additionalProcedures), exports.all = _a.all, exports.create = _a.create, exports.read = _a.read, exports.update = _a.update, exports.destroy = _a.destroy, exports.GetFollowing = _a.GetFollowing, exports.GetByUser = _a.GetByUser;
var _a;
