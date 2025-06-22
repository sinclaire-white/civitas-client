import { NavLink } from "react-router"; // Corrected import for NavLink
import ErrorAnimation from '../assets/Errrrr.json';
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-200"> 
      <div className="w-full max-w-md mx-auto"> 
        <Lottie 
          animationData={ErrorAnimation} 
          loop={true} 
          autoplay={true} 
          className="w-full h-full" 
        />
      </div>
      
      <div className="mt-8 text-center"> 
        <NavLink to="/" className="flex items-center gap-2 normal-case btn btn-lg btn-outline btn-primary hover:bg-black"> 
          <FaArrowLeft />
          <p>Go Back Home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;