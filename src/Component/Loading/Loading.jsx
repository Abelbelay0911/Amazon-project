import React from 'react';
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from "react-spinners";
function Loading() {
  return (
    <div style={{ alignItems: "center", display: "flex", marginLeft: "50%", marginTop: "5%", marginBottom:"5%", color:  "green"}}>
      {/* <CircleLoader /> */}
      {/* <ClimbingBoxLoader /> */}
      {/* <BounceLoader /> */}
      {/* <BeatLoader /> */}
      {/* <BarLoader /> */}
      <ClipLoader />
      <br />
      <h3 style={{ paddingLeft: "40px"}}> Loading...</h3>
    </div>
  );
}
export default Loading;
