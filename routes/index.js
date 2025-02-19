import { Router } from 'express';
import categoryRoutes from './api/categoryRoutes.js'; // Explicitly specify the .js file extension
import productRoutes from './api/productRoutes.js'; // Explicitly specify the .js file extension
import tagRoutes from './api/tagRoutes.js'; // Explicitly specify the .js file extension
import userRoutes from './api/userRoutes.js'; // Explicitly specify the .js file extension

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/users', userRoutes);

export default router;
