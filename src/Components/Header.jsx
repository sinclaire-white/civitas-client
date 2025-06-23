import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { use } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { logOut, user } = use(AuthContext);

  // Log out functionality
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-sm"
    >
      <div className="navbar bg-base-100">
        {/* Logo */}
        <div className="navbar-start">
          <NavLink to={"/"}>
            <div className="flex items-center gap-2">
              <img
                src={"https://i.ibb.co/QF2hrC2b/Civitas-logo-2.png"}
                alt="Civitas Logo"
                className="w-12 h-12 md:w-16 md:h-16"
              />   
              <motion.p
                className="hidden text-3xl font-bold md:block text-primary"
                whileHover={{ scale: 1.1 }}
              >
                Civitas
              </motion.p>
            </div>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center">
          <NavLink to={"/upcoming-events"} className={'text-primary text-sm font-medium md:text-md lg:text-lg'}>
           
              Upcoming Events
           
          </NavLink>
        </div>

        {/* User Profile / Login */}
        <div className="navbar-end">
          <div>
            <ThemeToggle></ThemeToggle>
          </div>
          {!user ? (

<>

<div className="dropdown dropdown-end sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
         
                 <li><button className="w-full text-white btn btn-primary hover:bg-white hover:text-black"><NavLink to={"/register"}>Register</NavLink></button></li>
              
              <li>
                <button className="w-full text-white btn btn-primary hover:bg-white hover:text-black"><NavLink to={"/login"}>Login</NavLink></button>
              </li>
      </ul>
    
  </div>




<motion.div
              className="hidden gap-2 sm:flex md:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <NavLink to={"/register"}>
                <button className="text-white btn btn-info hover:bg-white hover:text-black btn-sm md:btn-md">Register</button>
              </NavLink>
              <NavLink to={"/login"}>
                <button className="text-white btn btn-primary hover:bg-white hover:text-black btn-sm md:btn-md">Login</button>
              </NavLink>
            </motion.div>


</>


            
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <motion.div
                  className="w-10 rounded-full"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    alt="User Avatar"
                    src={user?.photoURL || user?.photo || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  />
                </motion.div>
              </div>
              <ul
                tabIndex={0}
                className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to={"/create-events"}>Create Event</NavLink>
                </li>
                <li>
                  <NavLink to={"/manage-events"}>Manage Events</NavLink>
                </li>
                <li>
                  <NavLink to={"/join-events"}>Join Events</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="text-red-500 btn btn-outline"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;