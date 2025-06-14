import { NavLink } from "react-router";


const Register = () => {



// onSubmit={handleSignUp}
// onClick={handleGoogleSignUp}
// {passwordError && <p className="text-red-500">{passwordError}</p>}


    return (
        <div className="h-screen mt-40">
            <form>
          <fieldset className="p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box w-xs">
            <h2 className="mb-5 text-5xl font-semibold text-center">Sign Up</h2>
            <label className="font-bold label">Name</label>
            <input type="text" className="input" placeholder="Name" name="name" required />
            <label className="font-bold label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
            />
            <label className="font-bold label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="font-bold label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            
            <button className="mt-4 btn btn-neutral text-secondary hover:bg-base-100">
              Sign Up
            </button>
              <div className="divider divider-neutral">Or</div>
            <button
              type="button"
              className="bg-black btn text-secondary btn-neutral hover:bg-base-100"
              
            >
             Register with Google
            </button>
            <p className="mt-2 ml-2">
              Already registered?
              <NavLink to={"/login"} className={"underline ml-1"}>
                Login Now
              </NavLink>
            </p>
          </fieldset>
        </form>
        </div>
    );
};

export default Register;