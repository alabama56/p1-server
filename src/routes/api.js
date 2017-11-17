"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("./users");
const chirps_1 = require("./chirps");
const followers_1 = require("./followers");
const router = express_1.Router();
router
    .use('/users', users_1.default)
    .use('/chirps', chirps_1.default)
    .use('/followers', followers_1.default);
exports.default = router;
