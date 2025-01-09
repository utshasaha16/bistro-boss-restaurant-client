import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/deshboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/deshboard/userHome">Dashboard</Link>
        </li>
      )}

      {/* <li>
       <Link to="/secret">Secret</Link>
       </li> */}

      <li className="">
        <Link to="/deshboard/cart">
          <button className="btn btn-sm ">
            <FaCartShopping className="mr-2"></FaCartShopping>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogOut} className="p-2 rounded-lg btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/logIn">Login</Link>
          </li>
        </>
      )}
    </>
  );
  // const navEndOption = (
  //   <>
  //     <li className="">
  //       <Link to="/deshboard/cart">
  //         <button className="btn btn-sm ">
  //           <FaCartShopping className="mr-2"></FaCartShopping>
  //           <div className="badge badge-secondary">+{cart.length}</div>
  //         </button>
  //       </Link>
  //     </li>
  //     {user ? (
  //       <>
  //         {/* <span>{user?.displayName}</span> */}
  //         <button onClick={handleLogOut} className="btn rounded-lg btn-ghost">
  //           LogOut
  //         </button>
  //       </>
  //     ) : (
  //       <>
  //         <li>
  //           <Link to="/logIn">Login</Link>
  //         </li>
  //       </>
  //     )}
  //   </>
  // );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            BISTRO BOSS
            <span>Restaurant</span>
          </a>
        </div>
        <div className="navbar-center hidden md:flex ">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
