import express from 'express';
import { loginController, logoutController } from '../controllers/loginController.js';
import { adminAuth } from '../middleware/auth.middleware.js';
import { adminDashboard } from '../controllers/adminDashboardController.js';

const route = express.Router();

route.post('/login', loginController);
route.post('/logout', logoutController);
route.get('/dashboard', adminAuth, adminDashboard);

export default route;