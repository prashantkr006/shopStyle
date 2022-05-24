import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import Loading from "../Loading";
import { NewPass } from "../../redux/actions/AuthActions";
import OtpInput from "react-otp-input";
import Img1 from "../images/teamAni5.gif";

import "./Auth.css";
import Countdown from "react-countdown";

import { toast } from "react-toastify";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const ResetPassword = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  //Counter Timer Code
  const Completionist = () => {
    toast.error("OTP Expired!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });

    <span>OTP Expired!</span>;
    return <Navigate to="/sendotptoemail" />;
  };

  const startDate = React.useRef(Date.now());

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <h1
          style={{
            backgroundColor: "azure",
            border: "1.5px solid rgb(189, 242, 254)",
          }}
        >
          <span style={{ color: "red" }}>{minutes}</span> :{" "}
          <span style={{ color: "red" }}>{seconds}</span>
          <span style={{ color: "grey", fontSize: "1.5rem" }}> s</span>
        </h1>
      );
    }
  };

  const classes = useStyles();
  const message = useSelector((state) => state);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    otp: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(NewPass(creds.otp, creds.password));
    setCreds({ otp: "", password: "" });
  };

  if (message.auth === "Password Successfully Updated!")
    return <Navigate to="/login" />;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={Img1} alt="404 Not Found." className="auth-login-img" />

          <form
            //noValidate
            autoComplete="off"
            className="signup-form"
            onSubmit={handleSubmit}
            style={{ paddingTop: "5%" }}
          >
            <Typography
              variant="h5"
              style={{ textAlign: "center", fontWeight: "600" }}
            >
              ENTER NEW PASSWORD
            </Typography>
            <div
              style={{
                textAlign: "left",
                marginTop: "10%",
                marginLeft: "2%",
              }}
            >
              <span>Enter Recieved OTP</span>
            </div>
            <OtpInput
              numInputs={6}
              autoComplete="off"
              readonly
              seperator={<span> {"  "}</span>}
              containerStyle={classes.spacing}
              inputStyle={
                window.innerWidth > 450
                  ? {
                      color: "black",
                      width: "3rem",
                      height: "3rem",
                      margin: "0 0.5rem",
                      fontSize: "2rem",
                      borderRadius: 4,
                      border: "1px solid rgba(0,0,0,0.3)",
                    }
                  : {
                      color: "black",
                      width: "2.3rem",
                      height: "2.3rem",
                      margin: "0 0.2rem",
                      fontSize: "1rem",
                      borderRadius: 4,
                      border: "1px solid rgba(0,0,0,0.3)",
                    }
              }
              //  type="number"
              id="enter-otp"
              //label="Enter Recieved OTP"
              // variant="filled"
              // fullWidth
              shouldAutoFocus={true}
              isInputNum={true}
              placeholder="------"
              value={creds.otp}
              onChange={(e) => setCreds({ ...creds, otp: e })}
              // autoComplete="off"
            />
            <TextField
              className={classes.spacing}
              id="enter-password"
              type="text"
              label="Enter New Password"
              variant="filled"
              fullWidth
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            />

            <button
              style={{ marginTop: "20px", width: "100%" }}
              className="btn btn-warning"
              type="submit"
            >
              UPDATE PASSWORD
            </button>
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              <h4>OTP Expires In ::</h4>
              <Countdown
                precision={1}
                date={startDate.current + 900000}
                renderer={renderer}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
