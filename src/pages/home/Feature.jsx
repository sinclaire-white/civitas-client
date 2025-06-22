import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Feature = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05, 
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", 
      transition: {
        duration: 0.2,
      },
    },
  };

  // Animation variants for the overall section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <motion.div
      className="px-4 py-16 md:px-8 lg:px-16 bg-base-100" 
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
      variants={sectionVariants}
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center"> {/* Center and limit width */}
        <motion.h2
          className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="mt-4 text-base leading-relaxed opacity-50 text-primary sm:text-lg" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the key features that make Civitus the ideal platform for
          creating, joining, and managing impactful events in your community.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3"> {/* More responsive grid, larger gap, max-width */}
        {/* Feature Card 1: Create Events */}
        <motion.div
          className="flex flex-col items-center justify-between p-8 text-center bg-white border border-gray-100 rounded-lg shadow-xl" // Better card styling
          variants={cardVariants}
          whileHover="hover"
        >
          <i className="mb-4 text-5xl icon text-primary">🎉</i> {/* Larger icon, primary color */}
          <h3 className="mb-2 text-2xl font-bold text-gray-800">Create Events</h3>
          <p className="flex-grow mt-2 text-gray-700">Organize events to make an impact in your community. Plan, invite, and manage effortlessly.</p>
          <NavLink to={'/create-events'} className="w-full mt-6">
            <button className="text-lg font-semibold transition duration-300 transform rounded-full btn btn-primary btn-outline btn-block hover:scale-105"> {/* Styled button */}
              Start Creating
            </button>
          </NavLink>
        </motion.div>

        {/* Feature Card 2: Join Events */}
        <motion.div
          className="flex flex-col items-center justify-between p-8 text-center bg-white border border-gray-100 rounded-lg shadow-xl"
          variants={cardVariants}
          whileHover="hover"
        >
          <i className="mb-4 text-5xl icon text-secondary">📅</i> {/* Larger icon, secondary color */}
          <h3 className="mb-2 text-2xl font-bold text-gray-800">Join Events</h3>
          <p className="flex-grow mt-2 text-gray-700">Explore and join events happening around you. Find causes you care about and participate.</p>
          <NavLink to={'/upcoming-events'} className="w-full mt-6">
            <button className="text-lg font-semibold transition duration-300 transform rounded-full btn btn-secondary btn-outline btn-block hover:scale-105">
              Browse Events
            </button>
          </NavLink>
        </motion.div>

        {/* Feature Card 3: Manage Events */}
        <motion.div
          className="flex flex-col items-center justify-between p-8 text-center bg-white border border-gray-100 rounded-lg shadow-xl"
          variants={cardVariants}
          whileHover="hover"
        >
          <i className="mb-4 text-5xl icon text-accent">⚙️</i> {/* Larger icon, accent color */}
          <h3 className="mb-2 text-2xl font-bold text-gray-800">Manage Events</h3>
          <p className="flex-grow mt-2 text-gray-700">Edit or track events you’ve created or joined. Stay organized with your community efforts.</p>
          <NavLink to={'/manage-events'} className="w-full mt-6">
            <button className="text-lg font-semibold transition duration-300 transform rounded-full btn btn-accent btn-outline btn-block hover:scale-105">
              Manage My Events
            </button>
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feature;