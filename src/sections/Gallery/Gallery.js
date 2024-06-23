import React from "react";
import "./Gallery.css";
import gallery from "../../data/data.json";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "./redux/cartSlice";
const Gallery = () => {
  const dispatch = useDispatch();
  const route = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //new
    dispatch(calculateTotal(product))
    let path = `/shoppingCart`;
    route(path);
  };
  return (
    <>
      <div className="prouducts pt-5 text-center">
        <h2 className="text-uppercase">Our Gallery</h2>
        <div className="container-fluid">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
            nesciunt odio dolorum illum damet consectetur adipisicing elit. Eum
            velit nesciunt odio dolorum illum dolor aliquid optio dignissimos
          </p>
          <div className="products-content" id="products-content">
            {gallery.gallery.map((product) => {
              return (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt="product" />
                  <p>Name : {product.name}</p>
                  <p>Price : {product.price}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      handleAddToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
