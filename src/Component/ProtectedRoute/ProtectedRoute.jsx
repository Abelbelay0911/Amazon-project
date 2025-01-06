import React, { useContext, useEffect } from "react";
import { dataContext } from "../DataProvider/DataProvider";
import { useNavigate } from "react-router-dom"; 


function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate(); // store it in navigate variable; note a hook always w/in a function
  const [{ user, Dispatch }] = useContext(dataContext);
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg , redirect } });

      
    }
  }, [user]); 

  return (
  
    children
  );
}

export default ProtectedRoute;
