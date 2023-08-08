import Express from "express";
import {getProducts , getProductsById , createProduct , updateProduct , deleteProduct} from "../controllers/productController.js";

const router = Express.Router();

router.get('/products' , getProducts);
router.get('/product/:id' , getProductsById);
router.post('/products' , createProduct);
router.patch('/product/:id' , updateProduct);
router.delete('/product/:id' , deleteProduct);

export default router;