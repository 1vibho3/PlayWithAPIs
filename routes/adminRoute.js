import express from 'express';
const router = express.Router();
import {deleteUser} from '../controllers/adminController.js'
import { authenticateUser, authorizeAdmin } from '../middleware/auth.js';

router.delete('/', authenticateUser, authorizeAdmin, deleteUser);

export default router;