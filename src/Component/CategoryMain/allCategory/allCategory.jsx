import React from "react";

import { menu } from "../CategoryData/Category";
import css from "../Category/Category.module.css";
import Category from "../Category/Category";
const AllCategory = () => {
  return (
    <div className={css.category__container}>
      {menu?.map(({ img, title,  name }, i) => {
        return (
          <Category key={i} img={img} name={name} title={title}  />
        );
      })}
    </div>
  );
};

export default AllCategory;
