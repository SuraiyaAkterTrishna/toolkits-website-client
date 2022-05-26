import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navber from './pages/Shared/Navber/Navber';
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Home/Products/Products";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
    <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
    </>
  );
}

export default App;
