import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  loginUser,
} from '../../controllers/user-controller.js';

const router = Router();

// Define routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/login', loginUser);

export default router;
