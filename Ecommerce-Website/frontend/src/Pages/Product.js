import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { useEffect } from "react";
import heroSection from "../Assets/images/heroSection.png";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState();
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/product");
      if (data.success == true) {
        // console.log("All Product get Successfully");
        // console.log(data);
        setProduct(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const buyProduct = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      {/* Product Section Starts From Here */}
      <section className="container">
        {/* {JSON.stringify(product)} */}
        <h1 className="text-center my-5">Product</h1>
        <div className="card-group my-3">
          {product?.map((pro) => (
            <div className="card mx-2" key={pro._id}>
              <img
                className="card-img-top"
                src={heroSection}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{pro.name}</h5>
                <p className="card-text">{pro.description}</p>
              </div>
              <button onClick={() => buyProduct(pro._id)}>Buy</button>
            </div>
          ))}
        </div>
      </section>
      {/* Product Section End here  */}
    </Layout>
  );
}

export default Product;
