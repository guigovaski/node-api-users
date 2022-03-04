import { Router } from 'express';

import * as apiRoutes from '../controllers/apiController'; 

const router = Router();

router.get('/users', apiRoutes.getAllUsers);
router.post('/user', apiRoutes.createUser);
router.get('/user/:id', apiRoutes.getOneUser);
router.put('/user/:id', apiRoutes.updateUser);
router.delete('/user/:id', apiRoutes.deleteUser);

export default router;