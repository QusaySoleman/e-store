import React from "react";
import "./ShoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  decreaseItems,
  delteAllProductsFromCart,
  calculateTotal
} from "../redux/cartSlice";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const totalForOneProduct=useSelector((state)=>state.cart.cartItems.totalForOneProduct)
  console.log(totalForOneProduct)
  const dispatch = useDispatch();
  const hadleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleIncreaseItem = (item) => {
    dispatch(addToCart(item));
    dispatch(calculateTotal(item))
  };
  const handleDecreaseItem = (item) => {
    dispatch(decreaseItems(item));
    dispatch(calculateTotal(item))
  };

  const handleDeleteAll = (cart) => {
    dispatch(delteAllProductsFromCart());
  };
  const route = useNavigate();

  return (
    <div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="underline"></div>
        <div className="shopping-cart-container">
          {cart.cartItems.length !== 0 ? (
            <>
              <h4>Products details</h4>

              <div>
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <div className="shopping-cart-product" key={cartItem.id}>
                      <img src={cartItem.url} alt="product-img" className="img-fluid"/>
                      <button
                        className="button"
                        onClick={() => {
                          handleDecreaseItem(cartItem);
                        }}
                      >
                        -
                      </button>

                      <p>{cartItem.name}</p>
                      <button
                        className="button"
                        onClick={() => {
                          handleIncreaseItem(cartItem);
                        }}
                      >
                        +
                      </button>
                      <p>{cartItem.price}$</p>
                      {/* <p>{cartItem.totalForOneProduct}$</p> */}
                      <p>{cartItem.oneProductQuantity}</p>
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          hadleRemove(cartItem);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
              </div>
              <div className="total-price">
                <span>Total price:00$</span>
              </div>
              <div className="buttons">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    handleDeleteAll();
                  }}
                >
                  Delete All Products
                </button>

                <span
                  className="back-icon"
                  onClick={() => {
                    route("/gallery");
                    // window.location.pathname='/gallery'
                  }}
                >
                  <IoIosArrowRoundBack />
                </span>
              </div>
            </>
          ) : (
            <div className="no-products-header">
              <h3>No products</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
