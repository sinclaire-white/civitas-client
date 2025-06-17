import { use } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthContext";

const Register = () => {
  // onSubmit={handleSignUp}
  // onClick={handleGoogleSignUp}
  // {passwordError && <p className="text-red-500">{passwordError}</p>}

const {createUser, signInWithGoogle} = use(AuthContext);

const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );
    createUser(email, password)
    .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
  };




  const handleRegisterWithGoogle = (e) =>{
    e.preventDefault();
        signInWithGoogle()
        .then(() => navigate("/"))

  }








  return (
    <div className="h-screen mt-40">
      <form onSubmit={handleRegister}>
        <fieldset className="w-2/4 p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box">
          <h2 className="mb-5 text-5xl font-semibold text-center">
            Register to Civitas
          </h2>
          <label className="font-bold label">Name</label>
          <input
            type="text"
            className="w-full input"
            placeholder="Name"
            name="name"
            required
          />
          <label className="font-bold label">Photo URL</label>
          <input
            type="text"
            className="w-full input"
            placeholder="Photo URL"
            name="photo"
          />
          <label className="font-bold label">Email</label>
          <input
            type="email"
            className="w-full input"
            placeholder="Email"
            name="email"
            required
          />
          <label className="font-bold label">Password</label>
          <input
            type="password"
            className="w-full input"
            placeholder="Password"
            name="password"
            required
          />

          <button className="mt-4 bg-black btn text-secondary btn-neutral hover:bg-base-100 hover:text-black">
            Register
          </button>
          <div className=" divider divider-primary">Or</div>
          <button
          onClick={handleRegisterWithGoogle}
            type="button"
            className="bg-black btn text-secondary btn-neutral hover:bg-base-100 hover:text-black"
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
