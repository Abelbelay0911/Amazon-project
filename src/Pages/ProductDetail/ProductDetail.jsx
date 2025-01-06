import React, { useEffect, useState } from 'react';
import { productUrl } from '../../Api/Api'
import axios from 'axios';
import Productlist from '../../Component/Product/Productlist';
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading';

// import css from "ProductDetail.module.css";
const ProductDetail = () => {
 const [singleProduct, setProduct] = useState({});
const [loading, setloading] = useState(true);
 const { productDetail } = useParams();
 console.log(useParams());


 useEffect(() => {
   axios
     .get(`${productUrl}/products/${productDetail}`)
     .then((res) => {
       setProduct(res.data);
       setloading(false)
       console.log(res.data);
       setloading(false);
     })
     .catch((err) => {
       console.log(err);
     });
 }, []);

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Productlist
            Item={singleProduct}
            flex={true}
            Desc={true}
            AddCart={true}
          />
        )}
      </div>
    );
}

export default ProductDetail;
