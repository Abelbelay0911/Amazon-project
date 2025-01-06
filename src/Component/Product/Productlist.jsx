import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import Currency from './Currency/Currency';
import css from "./Product.module.css";
import { Link } from 'react-router-dom';
import  {Type} from "../../Utility/action"
import { dataContext } from '../DataProvider/DataProvider';
const Productlist = ({Item, flex,Desc, AddCart}) => {
  // console.log(Item);
  
  const { title, price, image, rating,description, id } = Item;
  const [state, dispatch]=useContext(dataContext)


  // console.log(state);
 
  
  
  const addToCart=()=>{
    dispatch({
      type: Type.ADD_TO_CART,
      item:  { title, price, image, rating, description, id }
    });
  }
  return (
    <div
      className={`${css.items__container} ${flex ? css.flex__container : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div className={css.ItemInfo}>
        <h3>{title}</h3>
        <div style={{ maxWidth: "600px" }}>
          {Desc && description.substring(0, 200)}
        </div>
        <div className={css.rating}>
          <Rating value={rating?.rate} precision={0.1} />

          <small>{rating?.count}</small>
        </div>

        <div>
          <Currency amount={price} />
        </div>

        <div>
          {AddCart && (
            <button className={css.button_77} onClick={addToCart}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productlist;
