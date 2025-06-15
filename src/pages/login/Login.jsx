import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  // onSubmit={handleLogin}
  //  onClick={handleGoogleLogin}

  return (
    <div>
      <div className="h-screen mt-40">
        <form>
          <fieldset className="p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box w-2/4">
            <h2 className="mb-5 text-5xl font-semibold text-center">
              Login to Civitas
            </h2>
            <label className="font-bold label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
              required
            />

            <label className="font-bold label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
              required
            />

            <button
              type="submit"
              className="mt-4 btn btn-neutral text-secondary hover:bg-base-100"
            >
              Login
            </button>
            <div className="divider divider-neutral">Or</div>
            <button className="bg-black btn text-secondary btn-neutral hover:bg-base-100">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
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
            <p>
              Haven't registered yet?{" "}
              <NavLink to={"/register"} className={"underline "}>
                Register Now
              </NavLink>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
