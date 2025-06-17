import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div>
      <div
        className="hero bg-cover bg-center h-[400px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/KzB7pN7g/hannah-busing-Zyx1b-K9mqm-A-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-8/12">
            <h1 className="mb-5 text-5xl font-extrabold text-black">
              Be the Change <br /> Join the Movement!
            </h1>
            <p className="mb-5 text-black">
              Empower communities, create impactful events, and connect with 
              like-minded changemakers. Let’s make a difference together!
            </p>
            <NavLink to={'/register'}><button className="btn">Register Now</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
