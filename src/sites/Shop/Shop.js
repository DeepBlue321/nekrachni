import React from "react";
import "./Shop.css";
import Footer from "../../compoments/Footer/Footer";

const Shop = ({ money, charityList }) => {
  return (
    <div>
      <div className="shop__header">
        <h2>Uplatnění penízků</h2>
        <img src="" alt="" />
        <p>{money} penízků</p>
      </div>

      <ul>
        <li>Charita</li>
        <li>Charita</li>
        <li>Charita</li>
        <li>Charita</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Shop;
