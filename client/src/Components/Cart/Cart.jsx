import React from "react";
import "./Cart.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totolPrice = () => {
    let totol = 0;
    products.forEach((item) => {
      totol += item.quantity * item.price;
    });
    return totol.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51MPv1fHjPkoVIni3ewgZLt25Me5AwFq1iy5leyorZUkYcs4jkZlbZpTgRw9xdENl5Uz4Hr4sfFUNBfMgZZElW90o00W6x8encU"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className="item" key={item.id}>
          <div className="details">
            <div className="image">
              <img src={item.img} alt="product" />
            </div>

            <div className="info">
              <div className="title">
                <h3>{item?.title}</h3>
                <p>{item?.description?.substring(0, 40)}</p>
              </div>
              <div className="priceInfo">
                <DeleteForeverIcon
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                />
                <span>
                  {item.quantity} x {item?.price} kr
                </span>
                <h4>{item.quantity * item.price} kr</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>{totolPrice()} kr</span>
      </div>
      <button className="chechout" onClick={handlePayment}>
        Proceed to checkout
      </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset cart
      </span>
    </div>
  );
}

export default Cart;
