import React, { useContext } from "react";
import css from "./Cart.module.css";
import { dataContext } from "../../Component/DataProvider/DataProvider";
import Productlist from "../../Component/Product/Productlist";
import Currency from "../../Component/Product/Currency/Currency";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";const Cart = () => {
    const [{basket, user},dispatch]= useContext(dataContext)
    const subtotal = basket.reduce((amount , item)=>{
     return item.price *item.amount + amount;
    },0)
    const increment= (item)=>{
      dispatch({
        type: Type.ADD_TO_CART, item
      })
    }
    const decrement=(id)=>{
     dispatch({
       type: Type.REMOVE_FROM_CART,
       id
     });
    }
    console.log(subtotal);
    
  return (
    <section className={css.cart_Continer}>
      <div className={css.cart_Component}>
        <h2>Hello there...</h2>
        <h3>your shopping basket</h3>
        <hr />
        {basket?.length == 0 ? (
          <h2>Your Amazon Cart is empty.</h2>
        ) : (
          basket?.map((item, i) => {
            return (
              <>
                <section className={css.item_number}>
                  <Productlist
                    Item={item}
                    flex={true}
                    Desc={true}
                    key={i}
                    AddCart={false}
                  />
                  <div className={css.button_container}>
                    <button onClick={() => increment(item)}>
                      <IoIosArrowUp size={"25px"} />
                    </button>
                    <h3>{item.amount}</h3>
                    <button onClick={() => decrement(item.id)}>
                      <IoIosArrowDown size={"25px"} />
                    </button>
                  </div>
                </section>
                <hr />
              </>
            );
          })
        )}
      </div>

      {basket?.length !== 0 && (
        <div className={css.subtotal}>
          <div>
            <p>Subtotal ( {basket?.length} ) items &nbsp; </p>
            <Currency amount={subtotal} />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a Gift </small>
          </span>
          <br />
          <Link to="/Payments">
            <button className={css.button_77}>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
