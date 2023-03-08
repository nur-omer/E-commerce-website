import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/assets/men.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/2">
              Men
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/assets/shose.jpeg" alt="men" />
          <button>
            <Link className="link" to="/products/7">
              Shoes
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/assets/children.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/5">
              Children
            </Link>
          </button>
        </div>
      </div>
      <div className="col large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/assets/women.jpeg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/assets/outlet.jpeg" alt="" />
              <button>
                <Link className="link" to="/products/6">
                  Outlet
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="assets/accessories.jpeg" alt="" />
          <button>
            <Link className="link" to="/products/8">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
