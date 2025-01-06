import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { dataContext } from "../../Component/DataProvider/DataProvider";
import Productlist from "../../Component/Product/Productlist";
import Alert from "@mui/material/Alert";
import Alertpage from "../../Component/Alertpage";
const Orders = () => {
  const [{ user }, dispatch] = useContext(dataContext);
  const [orders, setOrders] = useState([]);

  // Debugging the user state
  useEffect(() => {
    console.log("User object in Orders component:", user); // Log the full user object
    if (user?.uid) {
      console.log("User UID:", user.uid); // Log the user UID to verify
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(
          (snapshot) => {
            if (snapshot.empty) {
              console.log("No orders found");
              setOrders([]);
            } else {
              setOrders(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
            }
          },
          (error) => {
            console.error("Error fetching orders: ", error);
          }
        );
    } else {
      console.log("No user found, clearing orders.");
      setOrders([]);
    }
  }, [user]); 

  return (
    <>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          {orders?.length > 0 && (
            <div>
             <hr /> <Alertpage />
              
            </div>
          )}

          <h2>Your Orders</h2>

          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet</div>
          )}

          <div>
            {orders?.map((eachOrder) => (
              <div key={eachOrder.id}>
                <hr />
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <Productlist flex={true} Item={order} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
