import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import swaggerOptions from '../../helpers/apiSpecifications';
import authRoute from './authRoute';
import dmRoutes from './dmsRoute';

const router = Router();
const swaggerDoc = swaggerJsdoc(swaggerOptions);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
router.use('/auth', authRoute);
router.use('/dms', dmRoutes);
export default router;
