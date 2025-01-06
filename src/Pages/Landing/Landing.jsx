import React from 'react';
// import LayOut from '../../Component/LayOut/LayOut';
import CarouselImages from '../../Component/Carousel/Carousel';

import Category from '../../Component/CategoryMain/Category/Category';
import Product from '../../Component/Product/Product';
import AllCategory from '../../Component/CategoryMain/allCategory/allCategory';
// import Productlist from '../../Component/Product/Productlist';


const Landing = () => {
    return (
      <div>
        <CarouselImages />
         <AllCategory />
        <Product />
       
      </div>
    );
}

export default Landing;
