import { NavLink } from "react-router"; 
import { motion } from "framer-motion";

const Banner = () => {
  const bannerImage = "https://i.ibb.co/0p7NdfgD/Gemini-Generated-Image-5nt40g5nt40g5nt4-1.png";

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <div className="flex items-center w-full max-w-screen-xl p-10 mx-auto overflow-hidden bg-primary rounded-2xl"> 
      
      <div className="container h-full px-4 mx-auto"> 
       
        <div className="flex flex-col items-center h-full sm:flex-row sm:justify-between"> 
          
          <div className="flex flex-col justify-center w-full h-full py-8 text-center sm:w-1/2 sm:text-left sm:py-0"> 
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl md:mb-6"
            >
              Your Impact, <br className="sm:hidden" />
              <span className="text-accent">Starts Here.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-xl mx-auto mb-8 text-base leading-relaxed text-gray-200 sm:text-lg lg:text-xl md:mb-10 sm:mx-0"
            >
              From local cleanups to global movements, find and create events that resonate with your passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start"
            >
              <NavLink to={"/create-event"}>
                <button className="w-full px-8 text-lg font-semibold transition-transform duration-300 shadow-xl text-primary btn btn-accent btn-lg hover:scale-105 sm:w-auto">
                  Create Event
                </button>
              </NavLink>
              <NavLink to={"/upcoming-events"}>
                <button className="w-full px-8 text-lg font-semibold transition-transform duration-300 shadow-xl btn btn-lg hover:scale-105 sm:w-auto">
                  Find Events
                </button>
              </NavLink>
            </motion.div>
          </div>

          <div className="flex items-center justify-center w-full h-full sm:w-1/2">
            <img
              src={bannerImage}
              alt="Inspiring community event"
              className="object-cover w-full h-full shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;