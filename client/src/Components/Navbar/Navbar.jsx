import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

import { useSelector } from "react-redux";

function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/5">
              Children
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              Outlet
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <span>Diam</span>
            <img src="/assets/diamond.gif" className="diamond" alt="logo" />
            <span>nd</span>
          </Link>
        </div>
        <div className="right">
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
