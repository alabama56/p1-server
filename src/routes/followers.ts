import { Router } from 'express';
import { create, destroy } from '../controllers/followers.ctrl';

const router = Router();

router
    .post('/', create )
    .delete('/', destroy)


export default router