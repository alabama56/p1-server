import { Router } from "express";
import users from "./users";
import chirps from "./chirps";
import followers from './followers'


const router: Router = Router();

router
    .use('/users', users)
    .use('/chirps', chirps)
    .use('/followers', followers)

export default router;