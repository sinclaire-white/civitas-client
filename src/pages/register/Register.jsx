import { NavLink, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );

    try {
      const result = await createUser(email, password);
      // Optionally save user info
      Swal.fire("Welcome!", `Account created for ${name}`, "success");
      console.log("User created:", result.user);
      navigate("/login");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      await signInWithGoogle();
      Swal.fire("Welcome!", "You have registered with Google!", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Register to Civitas
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full input input-bordered"
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="w-full input input-bordered"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full input input-bordered"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full input input-bordered"
          required
        />
        <button className="w-full btn btn-primary hover:text-black hover:bg-base-100">Register</button>
        <div className="divider divider-neutral">OR</div>
        <button 
            onClick={handleRegisterWithGoogle}
            className="w-full text-white btn btn-primary hover:text-black hover:bg-base-100">
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
        <p className="text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/login" className={"underline text-primary hover:text-info"}>
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
