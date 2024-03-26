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
      message: "Successfully Get All Product",
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while getting all product",
    });
  }
};

// Get Single Product
export const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).send({
      message: "Successfully Get single Product",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while getting single product",
    });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: "Successfully update single product",
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while updating product",
    });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "Successfully Delete Single product",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error while Deleting product",
    });
  }
};
