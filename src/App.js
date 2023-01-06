import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/LogIn/Login";
import SignUp from "./pages/LogIn/SignUp";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Products from "./pages/Home/Products/Products";
import Purchase from "./pages/Purchase/Purchase";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/AddReview";
import { ToastContainer } from "react-toastify";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import AddProduct from "./pages/Dashboard/AddProduct";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import RequireAdmin from "./pages/LogIn/RequireAdmin";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAdmin>
              <Purchase />
            </RequireAdmin>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="my-order" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="add-product" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manage-orders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="manage-products" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
