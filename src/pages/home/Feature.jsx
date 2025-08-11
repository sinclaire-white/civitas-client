import { NavLink } from "react-router";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

const Feature = () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
              What We Offer
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-base leading-relaxed text-muted-foreground">
              Discover the key features that make Civitus the ideal platform for creating,
              joining, and managing impactful events in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Create Events */}
            <motion.article
              className="flex flex-col items-center p-6 shadow-lg rounded-xl bg-base-100"
              variants={cardVariants}
              whileHover="hover"
            >
              <span className="mb-4 text-4xl">🎉</span>
              <h3 className="mb-2 text-2xl font-bold text-primary">Create Events</h3>
              <p className="flex-grow text-sm text-center text-muted-foreground">
                Organize events to make a real impact. Plan, invite, and manage effortlessly.
              </p>
              <NavLink to="/create-events" className="w-full mt-6">
                <button className="w-full transition-transform duration-300 btn btn-primary hover:btn-accent hover:scale-105">
                  Start Creating
                </button>
              </NavLink>
            </motion.article>

            {/* Join Events */}
            <motion.article
              className="flex flex-col items-center p-6 shadow-lg rounded-xl bg-base-100"
              variants={cardVariants}
              whileHover="hover"
            >
              <span className="mb-4 text-4xl">📅</span>
              <h3 className="mb-2 text-2xl font-bold text-primary">Join Events</h3>
              <p className="flex-grow text-sm text-center text-muted-foreground">
                Explore and join events happening around you. Find causes you care about.
              </p>
              <NavLink to="/upcoming-events" className="w-full mt-6">
                <button className="w-full transition-transform duration-300 btn btn-primary hover:btn-accent hover:scale-105">
                  Browse Events
                </button>
              </NavLink>
            </motion.article>

            {/* Manage Events */}
            <motion.article
              className="flex flex-col items-center p-6 shadow-lg rounded-xl bg-base-100"
              variants={cardVariants}
              whileHover="hover"
            >
              <span className="mb-4 text-4xl">⚙️</span>
              <h3 className="mb-2 text-2xl font-bold text-primary">Manage Events</h3>
              <p className="flex-grow text-sm text-center text-muted-foreground">
                Edit or track events you’ve created or joined. Stay organized with your efforts.
              </p>
              <NavLink to="/manage-events" className="w-full mt-6">
                <button className="w-full transition-transform duration-300 btn btn-primary hover:btn-accent hover:scale-105 hover:text-primary">
                  Manage My Events
                </button>
              </NavLink>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
