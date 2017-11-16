"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chirps_ctrl_1 = require("../controllers/chirps.ctrl");
const router = express_1.Router();
router
    .get("/", chirps_ctrl_1.all)
    .get("/user/:id", chirps_ctrl_1.allByUser)
    .get("/subs/:id", chirps_ctrl_1.allByFollower)
    .get("/:id", chirps_ctrl_1.read)
    .post("/", chirps_ctrl_1.create)
    .put("/", chirps_ctrl_1.update)
    .delete("/:id", chirps_ctrl_1.destroy);
exports.default = router;
