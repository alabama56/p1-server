"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows("spGetUsers");
};
const read = (id) => {
    return base_proc_1.row("spGetUser", [id]);
};
const destroy = (id) => {
    return base_proc_1.empty("spDeleteUser", [id]);
};
const create = (name, username, email, password, age, tagline, pro_img, background_img) => {
    return base_proc_1.row("spInsertUser", [name, username, email, password, age, tagline, pro_img, background_img]);
};
const update = (id, name, username, email, password, age, tagline, pro_img, background_img) => {
    return base_proc_1.empty("spUpdateUser", [id, name, username, email, password, age, tagline, pro_img, background_img]);
};
exports.default = {
    all,
    read,
    destroy,
    create,
    update
};
