import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import css from "./Header.module.css"
const LowerHeader = () => {
  return (
    <div className={css.Lower__Header}>
      <ul>
        <li>
            
          <p>
            <MdOutlineMenu />
            All
          </p>
        </li>
        <li>Black Friday deals</li>
        <li>medical care</li>
        <li>Best sellers</li>
        <li>Prime</li>
        <li>Amazon basis</li>
        <li>Groceires</li>
        <li>New Releases</li>
        <li>Music</li>
        <li>Customer Service</li>
        <li>Amazon home</li>
        <li>registry</li>
        <li>Pharmacy</li>
        <li>Gift cards</li>
        <li>Books</li>
        <li>Smart home</li>
        <li>Fashion</li>
        <li>
          {/* <h1>Shop black friday week</h1> */}
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
