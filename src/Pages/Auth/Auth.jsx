import React, { useContext, useState } from "react";
import css from "./Signup.module.css";
import { Link, useNavigate , useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { dataContext } from "../../Component/DataProvider/DataProvider";
import { Type } from "../../Utility/action";
import { ClipLoader } from "react-spinners";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(dataContext);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();
const navStateData = useLocation();
console.log(navStateData);

 const handleSignUp = async () => {
   if (!email || !password) {
     setError("Please provide both email and password.");
     return;
   }

   try {
     setLoading({ ...loading, signUp: true });
     const userCredential = await createUserWithEmailAndPassword(
       auth,
       email,
       password
     );
     const user = userCredential.user;

     // Dispatch the full user object, including `uid`
     dispatch({
       type: Type.ADD_USER,
       user: {
         uid: user.uid,
         email: user.email,
         displayName: user.displayName || "User", // You can use `displayName` if available
       },
     });

     setLoading({ ...loading, signUp: false });
     navigate(navStateData?.state?.redirect || "/"); // Redirect after successful sign-up
   } catch (error) {
     setError(error.message);
     setLoading({ ...loading, signUp: false });
   }
 };

 const handleSignIn = async () => {
   if (!email || !password) {
     setError("Please provide both email and password.");
     return;
   }

   try {
     setLoading({ ...loading, signIn: true });
     const userCredential = await signInWithEmailAndPassword(
       auth,
       email,
       password
     );
     const user = userCredential.user;

     // Dispatch the full user object, including `uid`
     dispatch({
       type: Type.ADD_USER,
       user: {
         uid: user.uid,
         email: user.email,
         displayName: user.displayName || "User", // You can use `displayName` if available
       },
     });

     setLoading({ ...loading, signIn: false });
     navigate(navStateData?.state?.redirect || "/"); // Redirect after successful sign-in
   } catch (error) {
     setError(error.message);
     setLoading({ ...loading, signIn: false });
   }
 };



  return (
    <section className={css.login_continer}>
      <Link to={"/"}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp"
          alt="Amazon Logo"
        />
      </Link>
      <div className={css.sign_in}>
        <h3>Sign In</h3>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <div>
          <div>
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="signIn"
            onClick={handleSignIn}
            className={css.login_button}
            disabled={loading.signIn}
          >
            {loading.signIn ? <ClipLoader color="#000" size={18} /> : "Sign In"}
          </button>
          <p>
            By continuing, you agree to "Amazon's Fake clone" Conditions of Use
            and Privacy Notice.
          </p>
        </div>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}

        <h5>Buying for work?</h5>
        <a href="">Shop on Amazon Business</a>
      </div>
      <div className={css.divider}> New to Amazon?</div>
      <button
        name="signUp"
        onClick={handleSignUp}
        className={css.create_account}
        disabled={loading.signUp}
      >
        {loading.signUp ? (
          <ClipLoader color="#000" size={18} />
        ) : (
          "Create your Amazon account"
        )}
      </button>
    </section>
  );
};

export default Auth;

// import React, { useContext, useState } from 'react';
// import css from "./Signup.module.css"
// import { Link, useNavigate } from 'react-router-dom';
// import  {auth} from "../../Utility/firebase"

// import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
// import { dataContext } from '../../Component/DataProvider/DataProvider';
// import { Type } from '../../Utility/action';
// import { ClipLoader } from 'react-spinners';
// export  const Signup = (userInfo) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [{ user }, dispatch] = useContext(dataContext);
//   const [loading, setLoading] = useState({ signIn: false, signup: false });
//   const navigate = useNavigate();
//   // console.log(user);
//   const handleSignUp = async () => {
//     dispatch({
//       type: Type.ADD_USER,
//       user: {email}
//     });

//     try {
//       setLoading({ ...loading, signUp: true });
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Handle successful sign up
//       console.log(auth, email, password);
//       console.log(email);

//       setLoading({ ...loading, signUp: false });
//       console.log(api.getCurrentUser().email);
//       navigate("/");
//     } catch (error) {
//       setError(error.message);
//       setLoading({ ...loading, signUp: false });
//       // Handle sign up errors
//     }
//   };

//   const handleSignIn = async () => {
//     //  alert("signed in");
//     //  console.log("signed in");

//     try {
//       setLoading({ ...loading, signIn: true });
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log(auth, email, password);
//       setLoading({ ...loading, signIn: false });
//       console.log("signInWithEmailAndPassword");
//       navigate("/");
//       console.log({user} );
//       console.log(email);
//       // Handle successful sign in
//     } catch (error) {
//       setError(error.message);
//       setLoading({ ...loading, signIn: false });
//       // Handle sign in errors
//     }
//   };

//   // const authHundler= async(e)=> {
//   //   e.preventDefault()
//   //   console.log(e.target.name);
//   //   if (e.target.name == "signIn") {
//   //     signInWithEmailAndPassword(auth, email, password)
//   //       .then((userInfo) => {
//   //         console.log(userInfo);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   }else{
//   //     createUserWithEmailAndPassword(auth, email, password)
//   //       .then((userInfo) => {
//   //         console.log(userInfo);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   }
//   // }
//   return (
//     <section className={css.login_continer}>
//       <Link to={"/"}>
//         <img
//           src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp"
//           alt=""
//         />
//       </Link>
//       <div className={css.sign_in}>
//         <h3>Sign In</h3>
//         <div>
//           <div>
//             <label htmlFor="email">Email or mobile phone number</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             />
//           </div>
//           <button
//             name="signIn"
//             onClick={handleSignIn}
//             className={css.login_button}
//           >
//             {loading.signIn ? <ClipLoader color="#000" size={18} /> : "Sign In"}
//           </button>
//           <p>
//             By continuing, you agree to "Amazon's Fake clone" Conditions of Use
//             and Privacy Notice.
//           </p>
//         </div>
//         {error && (
//           <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//         )}

//         <h5>Buying for work?</h5>
//         <a href="">Shop on Amazon Business</a>
//       </div>
//       <div className={css.divider}> New to Amazon?</div>
//       <button
//         name="signUp"
//         onClick={handleSignUp}
//         className={css.create_account}
//       >
//         {loading.signUp ? (
//           <ClipLoader color="#000" size={18} />
//         ) : (
//           "Create your Amazon account"
//         )}
//       </button>
//     </section>
//   );
// };

// export default Signup;
