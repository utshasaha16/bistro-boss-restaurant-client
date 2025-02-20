import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("logIn") || location.pathname.includes("signUp");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
