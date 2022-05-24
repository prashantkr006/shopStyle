import axios from "axios";
import { toast } from "react-toastify";

/// Register user actions
export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(
        // "https://intense-anchorage-09653.herokuapp.com/v1/auth/register",
        "https://shopkeeper007.herokuapp.com/v1/auth/register",
        user
      )
      .then((token) => {
        localStorage.setItem("token", token.data.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data.data,
        });
      })
      .catch((error) => {
        // console.log(error.response);
        // console.log(error.response.data.errors[0]);
        if (error.response.status === 409) {
          toast.error(error.response?.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(error.response?.data.errors[0], {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
};

///Login User Actions
export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post(
        //"https://intense-anchorage-09653.herokuapp.com/v1/auth/login"
        "https://shopkeeper007.herokuapp.com/v1/auth/login",
        // "http://192.168.43.120:4100/v1/auth/login",
        {
          email,
          password,
        }
      )
      .then((token) => {
        // console.log(token);
        localStorage.setItem("token", token.data.data.token);

        dispatch({
          type: "SIGN_IN",
          token: token.data.data.token,
        });
      })
      .catch((error) => {
        // console.log(error.response);

        if (error.response.status === 422) {
          toast.error(error.response?.data.errors[0], {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else {
          toast.error(error.response?.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  };
};

//Send OTP For Password Update
export const otpForPassword = (email) => {
  return (dispatch) => {
    axios
      .post("https://shopkeeper007.herokuapp.com/v1/auth/sendOtpToEmail", {
        email,
      })
      .then((res) => {
        console.log(res.data.message);
        dispatch({
          type: "OTP_PASSWORD",
          message: res.data.message,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

//New Password Action
export const NewPass = (otp, password) => {
  return (dispatch) => {
    axios
      .post(
        //"https://intense-anchorage-09653.herokuapp.com/v1/auth/login"
        "https://shopkeeper007.herokuapp.com/v1/auth/resetPasswordWithOtp",
        // "http://192.168.43.120:4100/v1/auth/login",
        {
          otp,
          password,
        }
      )
      .then((res) => {
        // console.log(token);

        dispatch({
          type: "NEW_PASSWORD",
          message: res.data.message,
        });
      })
      .catch((error) => {
        // console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
  };
};

//////////////////////////////////////////////////////////////////////////////////////////
//Send OTP For Order Confirm
export const otpForOrderConfirm = (email) => {
  return (dispatch) => {
    axios
      .post("https://shopkeeper007.herokuapp.com/v1/auth/otpfororder", {
        email,
      })
      .then((res) => {
        console.log(res.data.message);
        dispatch({
          type: "OTP_ORDER",
          message: res.data.message,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

//Order Confirm Action
export const confirmOrder = (otp) => {
  return (dispatch) => {
    axios
      .post(
        //"https://intense-anchorage-09653.herokuapp.com/v1/auth/login"
        "https://shopkeeper007.herokuapp.com/v1/auth/confirmorder",
        // "http://192.168.43.120:4100/v1/auth/login",
        {
          otp,
        }
      )
      .then((res) => {
        // console.log(token);
        console.log(res.data.message);
        dispatch({
          type: "ORDER_CONFIRM",
          message: res.data.message,
        });
      })
      .catch((error) => {
        // console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
  };
};

/// LogOut user action
export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
