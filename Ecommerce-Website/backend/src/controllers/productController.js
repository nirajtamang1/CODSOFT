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

// Get Sinle Product
export const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).send({
      message: "Success true",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while getting single product",
    });
  }
};
