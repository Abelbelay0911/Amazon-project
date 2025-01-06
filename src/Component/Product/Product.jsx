import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Productlist from './Productlist';
import css from "./Product.module.css";
import Loading from '../Loading/Loading';
const Product = () => {
 const [products, setProducts]  = useState()
 const [loading, setloading] = useState(true);
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      setProducts(res.data);
       setloading(false);
    })
    .catch((err) => {
      console.log(err);
       setloading(false);
    });   
},[])
    return (
      <>
        {loading?(<Loading/>):( <section className={css.product__container}>
        {products?.map((singleItem, i) => {
          return <Productlist Item={singleItem} key={i} AddCart={true} />;
        })}
      </section>)}
      </>
  
    );
}
export default Product;
