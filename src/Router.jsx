import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import  { Auth } from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import LayOut from './Component/LayOut/LayOut';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
 const stripePromise = loadStripe(
   "pk_test_51Qbx6EIm5vXg7qbVKlFmRz7U32Emfx381RPxbiMXUhZsECGzedVqNXmBJYCNIEHKQpq8pNNKTBkEMOyy8UhCOsol00AZ9I9ONd"
 );
const Routering = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Landing />} />

          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productDetail" element={<ProductDetail />} />

          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you must log in to proceed Orders!"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Payments"
            element={
              <ProtectedRoute
                msg={"you must log in to proceed"}
                redirect={"/Payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Routering;
