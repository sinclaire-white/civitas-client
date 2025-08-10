import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { logOut, user } = use(AuthContext);

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
    <header className="sticky top-0 z-50 border-b bg-base-100/80 backdrop-blur-sm border-base-200">
      <nav className="max-w-screen-xl px-4 mx-auto navbar">
        
        {/* Logo */}
        <div className="navbar-start">
          <NavLink to={"/"} className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/QF2hrC2b/Civitas-logo-2.png"
              alt="Civitas Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <span className="hidden text-2xl font-bold md:block text-primary">
              Civitas
            </span>
          </NavLink>
        </div>

        {/* Center Links */}
        <div className="navbar-center">
          <NavLink
            to={"/upcoming-events"}
            className="text-sm font-medium text-primary md:text-base lg:text-lg"
          >
            Upcoming Events
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="gap-2 navbar-end">
          <ThemeToggle />

          {!user ? (
            <>
              {/* Mobile Dropdown */}
              <div className="dropdown dropdown-end sm:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to={"/register"}
                      className="w-full text-white btn btn-primary"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/login"}
                      className="w-full text-white btn btn-primary"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden gap-2 sm:flex">
                <NavLink to={"/register"}>
                  <button className="text-white btn btn-info btn-sm md:btn-md">
                    Register
                  </button>
                </NavLink>
                <NavLink to={"/login"}>
                  <button className="text-white btn btn-primary btn-sm md:btn-md">
                    Login
                  </button>
                </NavLink>
              </div>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 overflow-hidden rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      user?.photo ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                </div>
              </label>
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
      </nav>
    </header>
  );
};

export default Header;
