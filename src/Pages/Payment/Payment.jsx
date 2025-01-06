import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import { dataContext } from "../../Component/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";

import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import Currency from "../../Component/Product/Currency/Currency";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";

import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action";
import Productlist from "../../Component/Product/Productlist";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(dataContext); //useContext hook to grab basket data from DataContext
  console.log(user); //see on console at this line
  // to get the total item added in the basket
  const totalitem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);  

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0); // calculates the total amount

  // Two hooks copied from useElements hook snipet of stripe docmentation; hooks should be within a component/function
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  //state for spinner when payment is being processed; initally set false
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true); 
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
  

      const clientSecret = response.data?.clientSecret;
 
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
    console.log(db); 
      await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
  
      dispatch({ type: Type.EMPTY_BASKET });

      setProcessing(false); 
    
 navigate("/orders", { state: { msg: "placed a new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

  };

  return (
    <>
      {/* header title  */}
      <div className={classes.payment_header}>Checkout ({totalitem}) items</div>
      {/* payment method section  */}
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 vite react drive </div>
            <div>Nashville, TN</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <Productlist Item={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* error handling */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order | <Currency amount={total} />
                    </span>
                  </div>
                  {/* type= "submit" indicates form will be submitted when this button is clicked -Onsubmit-handle Payment fn called */}


                  <button className={classes.pay_button} type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
