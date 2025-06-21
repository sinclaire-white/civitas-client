import React, { use } from "react";
import { NavLink, useLocation, useNavigate } from "react-router"; 
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  console.log('location in sign in page', location);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Please check your credentials.",
        });
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message || "Something went wrong with Google login.",
        });
      });
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen p-4 bg-base-100">
      
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl"> 
        <h2 className="mb-8 text-4xl font-semibold text-center text-primary">
          Login to Civitas
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="font-bold label text-base-content">Email</label>
            <input
              type="email"
              className="w-full input input-bordered" 
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="font-bold label text-base-content">Password</label>
            <input
              type="password"
              className="w-full input input-bordered" 
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary hover:text-black hover:bg-base-100" 
          >
            Login
          </button>
        </form>

        <div className="divider divider-neutral text-base-content">Or</div>

        <button 
          onClick={handleLoginWithGoogle}
          
          className="w-full btn btn-primary hover:text-black hover:bg-base-100">
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
             
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        
        <p className="mt-6 text-center text-base-content">
          Haven't registered yet?{" "}
          <NavLink to={"/register"} className={"underline text-primary hover:text-info"}>
            Register Now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;