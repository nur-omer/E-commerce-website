import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportIcon from "@mui/icons-material/Support";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <div className="title">
              <div className="icon">
                <CategoryIcon />
              </div>
              <h3>Categories</h3>
            </div>
            <span>New Arrivals</span>
            <span>Accessories</span>
            <span>Children</span>
            <span>Women</span>
            <span>Men</span>
          </div>
          <div className="item">
            <div className="title">
              <div className="icon">
                <AccountBalanceIcon />
              </div>
              <h3>Payment options</h3>
            </div>
            <img src="/assets/stripe.png" alt="stripe" />
            <img src="/assets/paypal.png" alt="pypal" />
            <img src="/assets/card.png" alt="mastercard" />
          </div>
          <div className="item">
            <div className="title">
              <div className="icon">
                <LocalShippingIcon />
              </div>
              <h3>We send with</h3>
            </div>
            <span>Postnord</span>
            <span>Instabox</span>
            <span>Bring</span>
            <span>DHL</span>
          </div>
          <div className="item">
            <div className="title">
              <div className="icon">
                <SupportIcon />
              </div>
              <h3>Help & Support</h3>
            </div>
            <span>Costomer Service</span>
            <span>Delivery</span>
            <span>Returns</span>
            <span>Payment</span>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="logo">
              <DiamondOutlinedIcon className="logoIcon" />
              <span className="logo">Diamond</span>
            </div>
          </div>
          <div className="item">
            <span>diamond@info.se</span>
          </div>
          <div className="item">
            <span>0700000000</span>
          </div>
          <Link to="/" className="item">
            <ArrowCircleUpOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
