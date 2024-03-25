import React from "react";
import Layout from "../Layouts/Layout";
import heroSection from "../Assets/images/heroSection.png";

function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero my-5">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row text-center justify-content-center align-items-center">
            <div className="col-md-7 content-Right">
              <h4>Explore the latest in Tech Industries</h4>
              <h2>Your Destination for Cutting-Edage Gadge</h2>
              <p>
                Welcome to eCommerceStore, your ultimate destination for
                cutting-edge gadgets! Explores the latest in tech innovaton and
                style with us. Shop now and discover a world of possibilities!
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={heroSection}
                alt=""
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End's Here */}
    </Layout>
  );
}

export default Home;
