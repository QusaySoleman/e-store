import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  let numberOfDifferentProd=cart.cartItems.length;
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Coffee Shop
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Signin">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shoppingCart">
                  <span className="basket">
                    <FaCartPlus />
                  </span>
                  <span className="counter">{numberOfDifferentProd}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
