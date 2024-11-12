import React from "react";
import "./Gallery.css";
// import gallery from "../../data/data.json";
import gallery from "./GalleryData/galleryData";

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
    dispatch(calculateTotal(product));
    let path = `/shoppingCart`;
    route(path);
  };
  return (
    <>
      <div className="prouducts pt-5 text-center">
        <h2 className="text-uppercase">Our Gallery</h2>
        <div className="container ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit
            nesciunt odio dolorum illum damet consectetur adipisicing elit. Eum
            velit nesciunt odio dolorum illum dolor aliquid optio dignissimos
          </p>
          <div className="products-content row" id="products-content">
            {/* //styling */}
            {gallery &&
              gallery.map((product) => {
                return (
               <div className="col-md-6 col-sm-12 box">
                   <div className="product-card " key={product.id}>
                    <img src={product.url} alt="product img"className="img-fluid" />
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
