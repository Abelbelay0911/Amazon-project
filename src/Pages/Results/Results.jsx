import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/Api';
import Productlist from '../../Component/Product/Productlist';
import css from "./Results.module.css"
import Loading from '../../Component/Loading/Loading';
// import css from "Result.module.css"

const Results = () => {
 const [results, setResults] = useState([]);
 const [loading, setloading] = useState(true);
    const { categoryName } = useParams();
    console.log(useParams());
    console.log(categoryName);
    
 useEffect(() => {
 axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
        setResults(res.data);
        setloading(false);
     console.log(res.data);
setloading(false);

 }).catch((err)=>{
console.log(err);
 })    
 }, []);

    return (
      <div>
        <>
          {loading ? (
            <Loading />
          ) : (
            <section>
              <h1>Results</h1>
              <p className={css.h3}>Category /{categoryName}</p>

              <div className={css.product__container}>
                {results?.map((singleItem, i) => {
                  return (
                    <Productlist Item={singleItem} key={i} AddCart={true} />
                  );
                })}
              </div>
            </section>
          )}
        </>
      </div>
    );
}

export default Results;
