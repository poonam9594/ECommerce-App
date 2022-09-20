import React, { useState } from "react";
import product_data from "../data/product_data";
import { useCart } from "react-use-cart";

const List = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { addItem } = useCart();
  let productData = product_data.map((item, index) => (
    <div className="col-1 col-sm-6 col-lg-4 mb_80" key={item.id}>
      <div className="card">
        <div
          className="card_img"
          onClick={() => setSelectedIndex(index)}
          onMouseOut={() => setSelectedIndex(-1)}
        >
          <img src={item.thumb} alt="not found" />
        </div>
        <div className="card_body">
          <h2>{item.product_name}</h2>
          
          <div className="price_section">
                
                <div className="price">
                  <span>{item.currency}</span>
                  <h3>{item.price}</h3>
                </div>
              </div>
          {selectedIndex === index ? (
            
            <div>
                <p>{item.description}</p>
                <div className="sizes">
                  <span>{item.sizes.S}</span>
                  <span>{item.sizes.M}</span>
                  <span>{item.sizes.L}</span>
                  <span>{item.sizes.XL}</span>
                </div>
                <div className="price">Available Quantity : {item.quantity}</div>
            
              <div className="cta_group">
                <button className="button_act" onClick={() => addItem(item)}>
                  Add to Cart 
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ));
  return <div className="row">{productData}</div>;
};

export default List;
