import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";


const Header = () => {
  const { logOut, user } = use(AuthContext);


//   log out 
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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        {/* logo & name */}
        <div className="navbar-start">
          <NavLink to={"/"}>
            <div className="flex items-center gap-2">
              <img
                src={"https://i.ibb.co/QF2hrC2b/Civitas-logo-2.png"}
                alt=""
                className="h-20 w-20"
              />
              <p className="text-5xl">Civitas</p>
            </div>
          </NavLink>
        </div>
        {/* upcoming events */}
        <div className="navbar-center hidden lg:flex">
          <NavLink to={"/upcoming-events"}>
            <p className=" text-xl">Upcoming Events</p>
          </NavLink>
        </div>
        {/* avatan and others */}
        <div className="navbar-end">
          {!user ? (
            <div className="flex gap-2">
              <NavLink to={"/register"}>
                <button className="btn">Register</button>
              </NavLink>
              <NavLink to={"/login"}>
                <button className="btn">Login</button>
              </NavLink>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
