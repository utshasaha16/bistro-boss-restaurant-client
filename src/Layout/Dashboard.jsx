import { FaAd, FaHome } from "react-icons/fa";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { LuSquareMenu } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/deshboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/resevation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/cart">
              <FaCartShopping></FaCartShopping>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/review">
              <FaAd></FaAd>
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/booking">
              <FaList></FaList>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <LuSquareMenu></LuSquareMenu>
            Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
