import { Router } from 'express';
import fotoController from '../controllers/FotoController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', fotoController.store);
export default router;
