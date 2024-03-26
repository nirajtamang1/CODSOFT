import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";

//Create product
router.post("/", createProduct);

//Get ALL product
router.get("/", getAllProduct);

//Get Single Product
router.get("/:id", getSingleProduct);

//Update Product
router.put("/:id", updateProduct);

//Delete Product
router.delete("/:id", deleteProduct)



export default router;
