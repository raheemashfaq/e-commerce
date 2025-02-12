import "./Checkout.css";
import React from "react";
import { Button } from "@mui/material";

const Checkout = () => {
  // const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                {/* <p>${getTotalCartAmount()}</p> */}
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                {/* <p>${getTotalCartAmount() === 0 ? 0 : 2}</p> */}
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total </b>
                <b>
                  {/* ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} */}
                </b>
              </div>
            </div>
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: "5px", bgcolor: "#009F7F" }}
            >
              PROCEED TO Payment
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
