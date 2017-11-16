"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows("spGetChirps");
};
const allByUser = (id) => {
    return base_proc_1.rowsets("spGetChirpsByUser", [id]);
};
const allByFollower = (userid) => {
    return base_proc_1.rows("spGetFollowingChirps", [userid]);
};
const read = (id) => {
    return base_proc_1.row("spGetChirp", [id]);
};
const destroy = (id) => {
    return base_proc_1.empty("spDeleteChirp", [id]);
};
const create = (userid, message, img) => {
    return base_proc_1.row("spInsertChirp", [userid, message, img]);
};
const update = (id, userid, message, img) => {
    return base_proc_1.empty("spUpdateChirp", [id, userid, message, img]);
};
exports.default = {
    all,
    read,
    destroy,
    create,
    update,
    allByUser,
    allByFollower
};
// p_user_id INT,
// p_message VARCHAR(280),
// p_img VARCHAR(280) 
