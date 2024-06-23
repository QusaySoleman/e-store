import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("shoppingCartProducts")
    ? JSON.parse(localStorage.getItem("shoppingCartProducts"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedProduct = state.cartItems.findIndex((prod) => {
        return prod.id === action.payload.id;
      });
      if (existedProduct !== -1) {
        state.cartItems[existedProduct].oneProductQuantity += 1;
      } else {
        const newProductToAdd = {
          ...action.payload,
          oneProductQuantity: 1,
        };
        state.cartItems.push(newProductToAdd);
      }
      localStorage.setItem(
        "shoppingCartProducts",
        JSON.stringify(state.cartItems)
      );
    },

    removeFromCart(state, action) {
      const newCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = newCart;
      localStorage.setItem(
        "shoppingCartProducts",
        JSON.stringify(state.cartItems)
      );
    },
    decreaseItems(state, action) {
      const existedProduct = state.cartItems.findIndex((prod) => {
        return prod.id === action.payload.id;
      });
      if (
        existedProduct !== -1 &&
        state.cartItems[existedProduct].oneProductQuantity > 1
      ) {
        state.cartItems[existedProduct].oneProductQuantity -= 1;
      } else if (
        existedProduct !== -1 &&
        state.cartItems[existedProduct].oneProductQuantity === 1
      ) {
        const newCart = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = newCart;
      }
      localStorage.setItem(
        "shoppingCartProducts",
        JSON.stringify(state.cartItems)
      );
    },
    delteAllProductsFromCart(state, action) {
      state.cartItems = [];
      localStorage.setItem(
        "shoppingCartProducts",
        JSON.stringify(state.cartItems)
      );
      window.location.pathname = "/shoppingCart";
    },
    calculateTotal(state, action) {
      const existedProduct = state.cartItems.findIndex((prod) => {
        return prod.id === action.payload.id;
      });
      let subTotalForOneProduct = 0;
      if (existedProduct !== -1) {
        
        //new
        // 1-get quantity for each product(add To cart)
        // console.log(state.cartItems[existedProduct].oneProductQuantity);
        let productQuantity =
          state.cartItems[existedProduct].oneProductQuantity;
        //2-get price for each product(add To cart)
        // console.log(state.cartItems[existedProduct].price);
        let oneProductPrice = state.cartItems[existedProduct].price;
        // 3-claculate subtotal for one product
        subTotalForOneProduct = productQuantity * oneProductPrice;
        console.log(subTotalForOneProduct);
        //problem
        // state.subTotalForOneProduct = subTotalForOneProduct;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseItems,
  delteAllProductsFromCart,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
