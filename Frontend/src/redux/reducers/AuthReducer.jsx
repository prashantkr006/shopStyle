import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const initialState = {
  token: localStorage.getItem("token"),
  first_name: null,
  last_name: null,
  dial_code: "+91",
  phone: null,
  gender: null,
  email: null,
};

const AuthReducer = (state = initialState, action) => {
  // const navigate = useNavigate();

  switch (action.type) {
    case "SIGN_UP":
    case "SIGN_IN":
    case "USER_LOADED":
      const user = jwtDecode(action.token);
      toast.success(`Hello, ${user.first_name}`, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
      // toast(`Hello, ${user.first_name}`, {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      return {
        ...initialState,
        token: action.token,
        first_name: user.first_name,
        last_name: user.last_name,
        dial_code: "+91",
        phone: user.phone,
        gender: user.gender,
        email: user.email,
      };
    case "OTP_PASSWORD":
      toast.success(`OTP Successfully Sent!`, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
      // navigate.push({
      //   pathname: "/resetpassword",
      // });
      <Navigate to="/resetpassword" />;
      // console.log(action);
      return action.message;

    case "OTP_ORDER":
      toast.success(`OTP Successfully Sent!`, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
      // navigate.push({
      //   pathname: "/resetpassword",
      // });
      <Navigate to="/confirmorder" />;
      // console.log(action);
      return action.message;

    case "ORDER_CONFIRM":
      toast.success("Order Successfully Placed!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      return action.message;

    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast.success("Successfully Logged Out!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return {
        token: null,
        first_name: null,
        last_name: null,
        dial_code: "+91",
        phone: null,
        gender: null,
        email: null,
      };
    case "NEW_PASSWORD":
      toast.success("Password Successfully Updated!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      return action.message;

    default:
      return state;
  }
};

export default AuthReducer;
