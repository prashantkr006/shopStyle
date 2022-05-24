import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";
import Loading from "../Loading";
import { signIn } from "../../redux/actions/AuthActions";

import Img1 from "../images/delhivery3.gif";
import Img2 from "../images/authImages/lockani2.gif";

import "./Auth.css";

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

const Login = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
    localStorage.setItem("loggedOut", true);
  };

  if (auth.email) return <Navigate to="/" />;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={Img1} alt="404 Not Found." className="auth-login-img" />
          <form
            noValidate
            autoComplete="off"
            className="signup-form"
            onSubmit={handleSubmit}
            style={{ paddingTop: "1%" }}
          >
            <div style={{ textAlign: "center" }}>
              <img alt="404 Not Found" src={Img2} style={{ width: "32%" }} />
            </div>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "2rem",
              }}
            >
              LOGIN
            </Typography>

            <TextField
              className={classes.spacing}
              id="enter-email"
              label="Enter Email"
              variant="filled"
              fullWidth
              value={creds.email}
              onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            />
            <TextField
              className={classes.spacing}
              id="enter-password"
              type="password"
              label="Enter Password"
              variant="filled"
              fullWidth
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            />
            <div style={{ textAlign: "end" }}>
              <Link
                to="/sendotptoemail"
                style={{ fontSize: "1.1rem", textDecoration: "none" }}
              >
                {" "}
                ForgotPassword?{" "}
              </Link>
            </div>
            <button
              style={{ marginTop: "20px", width: "100%" }}
              className="btn btn-warning"
              type="submit"
            >
              LOGIN
            </button>
            <div style={{ textAlign: "center" }}>
              <h6 id="login-redirect-to-signup">
                New to ShopKeeper? <Link to="/signup">SignUp</Link>
              </h6>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
