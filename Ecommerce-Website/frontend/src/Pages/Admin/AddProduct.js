import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      let product = { name, description, price };
      const { data } = await axios.post(
        "http://localhost:8080/product",
        product
      );
      if (data?.success == true) {
        alert(`${data?.products?.name} has been created Successfully `);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={addProduct}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="50"
          maxLength="200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default AddProduct;
