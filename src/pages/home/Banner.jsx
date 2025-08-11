import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Banner = () => {
  const bannerImage =
    "https://i.ibb.co/0p7NdfgD/Gemini-Generated-Image-5nt40g5nt40g5nt4-1.png";

  return (
    <section className="py-12 bg-primary">
      <div className="flex flex-col-reverse items-center max-w-screen-xl gap-8 px-4 mx-auto overflow-hidden sm:px-6 lg:px-8 sm:flex-row">
        
        {/* Left Content */}
        <div className="text-center sm:w-1/2 sm:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Your Impact, <br className="sm:hidden" />
            <span className="text-accent">Starts Here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-xl mx-auto mb-8 text-base leading-relaxed text-gray-200 sm:mx-0 md:text-lg lg:text-xl"
          >
            From local cleanups to global movements, find and create events that
            resonate with your passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-center max-w-md gap-4 mx-auto sm:flex-row sm:justify-start sm:mx-0"
          >
            <NavLink to={"/create-events"}>
              <button className="w-full px-8 font-semibold transition-transform duration-300 shadow-xl btn btn-accent btn-lg sm:w-auto hover:scale-105 text-primary">
                Create Event
              </button>
            </NavLink>
            <NavLink to={"/upcoming-events"}>
              <button className="w-full px-8 font-semibold transition-transform duration-300 shadow-xl btn btn-lg sm:w-auto hover:scale-105">
                Find Events
              </button>
            </NavLink>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full sm:w-1/2">
          <img
            src={bannerImage}
            alt="Inspiring community event"
            className="object-cover w-full max-w-md shadow-2xl rounded-3xl sm:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
