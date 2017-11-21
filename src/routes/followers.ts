import { Router } from 'express';
import { create, destroy, all} from '../controllers/followers.ctrl';

const router = Router();

router
    .post('/', create )
    .delete('/', destroy)
    .get('/:id', all)


export default router