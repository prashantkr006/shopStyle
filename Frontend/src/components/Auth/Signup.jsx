import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Loading from "../Loading";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField } from "@material-ui/core";

import { signUp } from "../../redux/actions/AuthActions";

import Img1 from "../images/cart1.gif";
import Img2 from "../images/authImages/registergirl1.gif";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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

const SignUp = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    dial_code: "+91",
    phone: "",
    gender: "",
    address: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    // setUser({
    //   first_name: "",
    //   last_name: "",
    //   dial_code: "+91",
    //   phone: "",
    //   gender: "",
    //   email: "",
    //   address: "",
    //   password: "",
    // });
    localStorage.setItem("loggedOut", true);
  };

  if (auth.email) return <Navigate to="/" />;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ display: "flex" }}>
          <img src={Img1} alt="404 Not Found." className="auth-img" />
          <form
            noValidate
            autoComplete="off"
            className="signup-form"
            onSubmit={handleSubmit}
            style={{ textAlign: "center" }}
          >
            <img alt="404 Not Found" src={Img2} style={{ width: "40%" }} />
            <Typography
              variant="h5"
              style={{ textAlign: "center", fontWeight: "600" }}
            >
              SignUp
            </Typography>
            <TextField
              className={classes.spacing}
              id="enter-first-name"
              label="Enter First Name"
              variant="filled"
              fullWidth
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              style={{ backgroundColor: "white" }}
            />
            <TextField
              className={classes.spacing}
              id="enter-last-name"
              label="Enter Last Name"
              variant="filled"
              fullWidth
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
            <TextField
              className={classes.spacing}
              id="enter-phone"
              label="Enter Phone Number"
              variant="filled"
              fullWidth
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <TextField
              className={classes.spacing}
              id="enter-address"
              label="Enter Your Address"
              variant="filled"
              fullWidth
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            <FormControl component="fieldset" style={{ marginTop: "1%" }}>
              <FormLabel component="legend" style={{ fontWeight: "400" }}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  defaultChecked
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              className={classes.spacing}
              id="enter-email"
              label="Enter Email"
              variant="filled"
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              className={classes.spacing}
              id="enter-password"
              type="password"
              label="Enter Password"
              variant="filled"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              style={{ marginTop: "20px", width: "100%" }}
              className="btn btn-warning"
              type="submit"
            >
              SignUp
            </button>
            <h6>
              Already have an account? <Link to="/login">Login.</Link>
            </h6>
            {/* <Button
            variant="outlined"
            color="primary"
            className={classes.spacing}
            type="submit"
          >
            SignUp
          </Button> */}
          </form>
        </div>
      )}
    </>
  );
};

export default SignUp;
