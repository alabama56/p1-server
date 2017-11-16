import { Router } from "express";
import { all, allByUser, create, update, read, destroy, allByFollower } from "../controllers/chirps.ctrl";




const router = Router();

router
   .get("/", all)
   .get("/user/:id", allByUser)
   .get("/subs/:id", allByFollower)
   .get("/:id", read)
   .post("/", create)
   .put("/", update)
   .delete("/:id", destroy);

export default router;