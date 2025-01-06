import css from "./Header.module.css"
// import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { dataContext } from "../DataProvider/DataProvider";
// import Cart from "../../Pages/Cart/Cart";

function Header() {

   const [ {user,  basket}, dispatch] = useContext(dataContext);
const totalCart = basket?.reduce((amount, item)=>{
  return item.amount + amount
},0)
   console.log(user?.email);
   console.log(user);
   
  return (
    <section className={css.fixed}>
      <section>
        <div className={css.header__continer}>
          {/* logo */}
          <div className={css.logo__continer}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </Link>
          </div>
          {/* delivery */}
          <div className={css.delivery}>
            <p>Deliver to</p>
            <span>
              <SlLocationPin />
              Update Location
            </span>
          </div>

          <div className={css.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <FaSearch size={25} />
            {/* icon */}
          </div>

          <div className={css.order__continer}>
            <Link to="#" className={css.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* <IoMdArrowDropdown /> */}

            <Link to={ "/auth"  }>
              <div>
                {user ? (
                  <div className="user-info">
                    <h6>Welcome, {user.email?.split("@")[0]}</h6>
                  </div>
                ) : (
                  <div className="auth-links">
                    <p>Hello, Sign In </p>
                    <span>Account & Lists</span>
                  </div>
                )}
              </div>
            </Link>
            <Link to="/orders">
              <p>Returns </p>
              <span>& Orders</span>
            </Link>

            {/* cart */}
            <Link to="/Cart" className={css.cart}>
              <PiShoppingCartSimpleLight size={35} />
              <span>
                <h5 style={{ color: "orange" }}>{totalCart}</h5>
              </span>
            </Link>
            <h4 className={css.cart_text}>Cart</h4>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}
export default Header;
// export default Header;
// import css from "./Header.module.css";
// import { FaSearch } from "react-icons/fa";
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
// import { SlLocationPin } from "react-icons/sl";
// import LowerHeader from "./LowerHeader";
// import { Link } from "react-router-dom";
// import { useContext, useState } from "react";
// import { dataContext } from "../DataProvider/DataProvider";
// import Cart from "../../Pages/Cart/Cart";

// function Header() {
//   const [{ user, basket }, dispatch] = useContext(dataContext);
//   const [searchTerm, setSearchTerm] = useState(""); // Added state for search input

//   const totalCartItems = basket?.reduce(
//     (amount, item) => amount + item.amount,
//     0
//   ); // Total items in cart
//   console.log({ email });

//   // Handle search term change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     // Here you can trigger a search function to filter products based on searchTerm
//   };

//   return (
//     <section className={css.fixed}>
//       <section>
//         <div className={css.header__continer}>
//           {/* logo */}
//           <div className={css.logo__continer}>
//             <Link to="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="amazon logo"
//               />
//             </Link>
//           </div>

//           {/* delivery */}
//           <div className={css.delivery}>
//             <p>Deliver to</p>
//             <span>
//               <SlLocationPin />
//               Update Location
//             </span>
//           </div>

//           {/* search */}
//           <div className={css.search}>
//             <select>
//               <option value="">All</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search products"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             <FaSearch size={25} />
//           </div>

//           <div className={css.order__continer}>
//             {/* Language Selector */}
//             <Link to="#" className={css.language}>
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
//                 alt="USA Flag"
//               />
//               <select>
//                 <option value="">EN</option>
//               </select>
//             </Link>

//             {/* Account */}
//             <Link to="/auth">
//               <div>
//                 {user? (
//                   <p>Hello, {user?.email?.split("@")[0]}</p>
//                 ) : (
//                   <p>Hello, sign in</p>
//                 )}
//                 <span>Account & Lists</span>
//               </div>
//             </Link>

//             {/* Orders */}
//             <Link to="/orders">
//               <p>Returns </p>
//               <span>& Orders</span>
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className={css.cart}>
//               <PiShoppingCartSimpleLight size={35} />
//               <span>
//                 <h5 style={{ color: "orange" }}>{totalCartItems}</h5>
//               </span>
//             </Link>
//             <h4 className={css.cart_text}>Cart</h4>
//           </div>
//         </div>
//       </section>

//       <LowerHeader />
//     </section>
//   );
// }

// export default Header;
