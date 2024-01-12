import express from "express";

import  { ServiceController } from "../controllers/serviceController"

const router = express.Router();
const serviceController = new ServiceController();

router.get('/', serviceController.getAll);
router.post('/', serviceController.create);

export default router;