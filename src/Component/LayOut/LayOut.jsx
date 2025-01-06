import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router-dom';
// import Loading from '../Loading/Loading';



const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <Loading/> */}
      <Outlet />
      <Footer />
      {children}
    </div>
  );
};

export default LayOut;
