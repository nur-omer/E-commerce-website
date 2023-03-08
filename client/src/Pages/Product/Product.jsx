import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product() {
  const id = parseInt(useParams().id);

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading } = useFetch(`/products/${id}/?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=" "
                onClick={() => setSelectedImg("img")}
              />

              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <p>{data?.attributes?.description}</p>
            <div className="price">
              <span className="price">{data?.attributes?.price} kr</span>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              ></button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes?.title,
                    description: data?.attributes?.description,
                    price: data?.attributes?.price,
                    img:
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img?.data?.attributes?.url,
                    quantity,
                  })
                )
              }
            >
              <ShoppingCartOutlinedIcon />
              Add to cart
            </button>
            <div className="item">
              <div className="link">
                <FavoriteBorderIcon className="favorite" /> Add to wish list
              </div>
              <div className="link">
                <BalanceIcon className="balance" /> Add to compare
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
