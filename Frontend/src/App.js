import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./redux/actions/AuthActions";
//Components for routes
import Loading from "./components/Loading";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Categories from "./components/Categories";
import Adidas from "./components/CategoriesComponents/Adidas";
import Reebok from "./components/CategoriesComponents/Reebok";
import Basics from "./components/CategoriesComponents/Basics";
import Casuals from "./components/CategoriesComponents/Casuals";
import Classics from "./components/CategoriesComponents/Classics";
import Festive from "./components/CategoriesComponents/Festive";
import KidsCasuals from "./components/CategoriesComponents/KidsCasuals";
import Moody from "./components/CategoriesComponents/Moody";
import Nike from "./components/CategoriesComponents/Nike";
import Puma from "./components/CategoriesComponents/Puma";
import SportsWear from "./components/CategoriesComponents/SportsWear";
import Traditional from "./components/CategoriesComponents/Traditional";
import Western from "./components/CategoriesComponents/Western";
import Winter from "./components/CategoriesComponents/Winter";
import SideBar from "./components/SideBar";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import OrderSuccess from "./components/OrderSuccess";
import SendOtpToEmail from "./components/Auth/SendOtpToEmail";
import ResetPassword from "./components/Auth/ResetPassword";
import ConfirmOrder from "./components/Auth/ConfirmOrder";
import Accessories from "./components/CategoriesComponents/Accessories";
import Bag from "./components/CategoriesComponents/Bag";
import Beauty from "./components/CategoriesComponents/Beauty";
import House from "./components/CategoriesComponents/Housee";
import Jewelry from "./components/CategoriesComponents/Jewelry";
function App() {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <ToastContainer />
          <div>
            <div
              style={{
                width: "100%",
                position: "sticky",
                top: "0",
                zIndex: "100",
              }}
            >
              <NavBar />
            </div>
            <div>
              <SideBar />
            </div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/categories" element={<Categories />} />

              {/* Caterories router */}
              <Route path="/Adidas" exact element={<Adidas />} />
              <Route path="/Reebok" exact element={<Reebok />} />
              <Route path="/Basics" exact element={<Basics />} />
              <Route path="/Casuals" exact element={<Casuals />} />
              <Route path="/Classics" exact element={<Classics />} />
              <Route path="/Festive" exact element={<Festive />} />
              <Route path="/KidsCasuals" exact element={<KidsCasuals />} />
              <Route path="/Moody" exact element={<Moody />} />
              <Route path="/Nike" exact element={<Nike />} />
              <Route path="/Puma" exact element={<Puma />} />
              <Route path="/SportsWear" exact element={<SportsWear />} />
              <Route path="/Traditional" exact element={<Traditional />} />
              <Route path="/Western" exact element={<Western />} />
              <Route path="/Winter" exact element={<Winter />} />

              {/* Other Categories Items Route */}
              <Route path="/accessories" exact element={<Accessories />} />
              <Route path="/bag" exact element={<Bag />} />
              <Route path="/beauty" exact element={<Beauty />} />
              <Route path="/house" exact element={<House />} />
              <Route path="/jewelry" exact element={<Jewelry />} />

              {/* Authentication routes */}
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/ordersuccess" exact element={<OrderSuccess />} />
              <Route
                path="/sendotptoemail"
                exact
                element={<SendOtpToEmail />}
              />
              <Route path="/resetpassword" exact element={<ResetPassword />} />
              <Route path="/confirmorder" exact element={<ConfirmOrder />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
