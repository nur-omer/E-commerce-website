import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ item }) {
  return (
    <Link className="link" to={`/Product/${item.id}`}>
      <div className="card">
        <div className="images">
          {item?.attributes.isNew && <span>New season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img.data.attributes.url
            }
            alt=""
            className="mainImage"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImage"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>
            {item?.oldPrice ||
              item?.attributes.price + item?.attributes.price * 0.5}{" "}
            kr
          </h3>
          <h3>{item.attributes.price} kr</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
