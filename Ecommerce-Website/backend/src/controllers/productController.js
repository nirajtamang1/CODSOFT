import productModel from "../models/productModel.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const products = new productModel(req.body);
    console.log(products);
    await products.save();
    res.status(200).send({
      message: "Successfully",
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).send({
      error: "Error while saving the product",
    });
    console.log(error);
  }
};

// Get All Products
export const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send({
      message: "Successfully get all Product",
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while getting all product",
    });
  }
};

