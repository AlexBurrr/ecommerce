import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//DESC      FETCH ALL PRODUCTS
//ROUTE     GET /api/products
//access    public
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.send(products);
	})
);

//DESC      FETCH single PRODUCT
//ROUTE     GET /api/products  /:id
//access    public
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).json({ message: "product not found" });
		}
	})
);

export default router;
