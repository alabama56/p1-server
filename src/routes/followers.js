"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const followers_ctrl_1 = require("../controllers/followers.ctrl");
const router = express_1.Router();
router
    .post('/', followers_ctrl_1.create)
    .delete('/', followers_ctrl_1.destroy);
exports.default = router;
