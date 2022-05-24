import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader" align="center">
      <Loader
        type="TailSpin"
        color="rgb(250 3 219 / 94%)"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;
