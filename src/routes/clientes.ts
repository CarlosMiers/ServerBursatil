import { Router } from "express";
import { getCliente, getTodos } from '../controllers/clientes';
import validateToken from './validate-token';

const router = Router();

router.post('/id',getCliente);
router.get('/', getTodos)

export default router;