"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const followers_ctrl_1 = require("../controllers/followers.ctrl");
const router = express_1.Router();
router
    .post('/', followers_ctrl_1.create)
    .put('/', followers_ctrl_1.destroy)
    .get('/:id', followers_ctrl_1.all);
exports.default = router;
