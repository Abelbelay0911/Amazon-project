import React from 'react';
import css from "./Category.module.css";
import { Link } from 'react-router-dom';
const Category = (data) => {
  console.log(data);
  
    
    return (
      <>
        <div className={css.single__category}>
          <Link to={`/category/${data.name}`}>
            <span className={css.title}>
              <h3>
                {data?.title} <br />
              </h3>
            </span>
            <div className={css.img}>
              <img src={data?.img} />
            </div>

            <h4> shop</h4>
          </Link>
        </div>
      </>
    );
}

export default Category;
