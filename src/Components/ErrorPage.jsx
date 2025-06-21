import { NavLink } from "react-router"; // Corrected import for NavLink
import ErrorAnimation from '../assets/Errrrr.json';
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-200"> {/* Centering container, added background, padding */}
      <div className="w-full max-w-md mx-auto"> {/* Lottie container with max-width */}
        <Lottie 
          animationData={ErrorAnimation} 
          loop={true} // Add loop for continuous animation, common for error pages
          autoplay={true} // Ensure it plays automatically
          className="w-full h-full" // Make Lottie take full width/height of its parent
        />
      </div>
      
      <div className="mt-8 text-center"> {/* Added top margin for separation */}
        <NavLink to="/" className="flex items-center gap-2 normal-case btn btn-lg btn-outline btn-primary hover:bg-black"> {/* DaisyUI button styling */}
          <FaArrowLeft />
          <p>Go Back Home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;