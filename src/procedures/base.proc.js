"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../config/db/index");
const utils_mw_1 = require("../middleware/utils.mw");
exports.prefix = "sp";
exports.SQL_GET = `${exports.prefix}Get`;
exports.SQL_INSERT = `${exports.prefix}Insert`;
exports.SQL_UPDATE = `${exports.prefix}Update`;
exports.SQL_DELETE = `${exports.prefix}Delete`;
exports.BY = 'By';
exports.ALL = 'all';
exports.CREATE = 'create';
exports.READ = 'read';
exports.UPDATE = 'update';
exports.DESTROY = 'destroy';
exports.rows = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((rows) => {
        return rows[0];
    });
};
exports.row = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then((row) => {
        return row[0][0];
    });
};
exports.empty = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args)
        .then(() => {
        return;
    });
};
exports.rowsets = (procedureName, args = []) => {
    return index_1.procedure(procedureName, args);
};
const all = (MODEL_NAME) => {
    return () => {
        return exports.rows(`${exports.SQL_GET}${MODEL_NAME}`);
    };
};
const read = (MODEL_NAME) => {
    return (...args) => {
        return exports.row(`${exports.SQL_GET}${MODEL_NAME}`, args);
    };
};
const destroy = (MODEL_NAME) => {
    return (...args) => {
        return exports.empty(`${exports.SQL_DELETE}${MODEL_NAME}`, args);
    };
};
const create = (MODEL_NAME) => {
    return (...args) => {
        return exports.row(`${exports.SQL_INSERT}${MODEL_NAME}`, args);
    };
};
const update = (MODEL_NAME) => {
    return (...args) => {
        return exports.empty(`${exports.SQL_UPDATE}${MODEL_NAME}`, args);
    };
};
exports.crud = (MODEL_NAME, additionalProcedures) => {
    return Object.assign({ all: all(utils_mw_1.pluralize(MODEL_NAME)), create: create(MODEL_NAME), read: read(MODEL_NAME), update: update(MODEL_NAME), destroy: destroy(MODEL_NAME) }, additionalProcedures);
};
