import { NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../providers/AuthContext";
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

  const loggedInNavLinks = (
    <>
      <li><NavLink to="/create-events">Create Event</NavLink></li>
      <li><NavLink to="/manage-events">Manage Events</NavLink></li>
      <li><NavLink to="/join-events">Join Events</NavLink></li>
      <li><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
      
    </>
  );

  const loggedOutNavLinks = (
    <>
      <li><NavLink to="/upcoming-events">Upcoming Events</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/faq">FAQ</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-base-100/80 backdrop-blur-sm border-base-200">
      <nav className="max-w-screen-xl px-4 mx-auto navbar">
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

        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {user ? loggedInNavLinks : loggedOutNavLinks}
          </ul>
        </div>

        <div className="gap-2 navbar-end">
          <ThemeToggle />

          {!user ? (
            <>
              {/* Mobile Dropdown (Logged Out) */}
              <div className="dropdown dropdown-end lg:hidden">
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
                <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  {loggedOutNavLinks}
                  <li className="mt-2"><NavLink to={"/register"}><button className="w-full text-white btn btn-info">Register</button></NavLink></li>
                  <li><NavLink to={"/login"}><button className="w-full text-white btn btn-primary">Login</button></NavLink></li>
                </ul>
              </div>

              {/* Desktop Buttons (Logged Out) */}
              <div className="hidden gap-2 lg:flex">
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
            <>
              {/* Mobile Dropdown (Logged In) */}
              <div className="dropdown dropdown-end lg:hidden">
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
                <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  {loggedInNavLinks}
                  <li className="mt-2"><NavLink to={"/dashboard"}>My Profile</NavLink></li>
                  <li>
                    <button onClick={handleLogOut} className="w-full text-red-500 btn btn-outline">
                      Log out
                    </button>
                  </li>
                </ul>
              </div>

              {/* Desktop User Dropdown */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="hidden btn btn-ghost btn-circle avatar lg:flex">
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
                <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li><NavLink to={"/dashboard"}>My Profile</NavLink></li>
                  <li className="mt-2">
                    <button
                      onClick={handleLogOut}
                      className="text-red-500 btn btn-outline"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;