import React from 'react';
import "./footer.css"
const Footer = () => {
  return (
    <div>
   
      <footer>
        <a href="#" className="back-option">
          Back to top
        </a>

        <div className="footer-links">
          <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a> 
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Self-Publish with Us</a>
            <a>Host an Amazon Hub</a>
            <a>›See More Make Money with Us</a>
          </ul>
          <ul>
            <p>Amazon Payment Products</p>
            <a>Amazon Business Card</a>
            <a>Shop with Points</a>
            <a>Reload Your Balance</a>
            <a>Amazon Currency Converter</a>
          </ul>
          <ul>
            <p>Let Us Help You</p>
            <a>Amazon and COVID-19</a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>Shipping Rates & Policies</a>
            <a>Returns & Replacements</a>
            <a>Manage Your Content and Devices</a>
            <a>Amazon Assistant</a>
            <a>Help</a>
          </ul>
        </div>
        <div className="country-info">
          <div className="logo">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240326183545/amazon.png" />
          </div>
          <div className="options">
            <select>
              <option value="En">English</option>
            </select>
            <select>
              <option value="1">$ USD - U.S. Dollar</option>
            </select>

            <select>
              <option value="4">United states</option>
            </select>
          </div>
        </div>
        <div className="policies">
          <div className="pages">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a>
          </div>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
}
   export default Footer;