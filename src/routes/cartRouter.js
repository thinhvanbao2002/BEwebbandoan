import express from "express";
import cartController from "../controllers/cartController.js";

const router = express.Router();

router.get('/get', cartController.getCart);

router.post('/add', cartController.createCart);

router.delete('/delete/:id', cartController.deleteCart);

export default router;