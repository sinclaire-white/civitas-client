const About = () => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-primary">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-600">
          Civitus is a platform dedicated to organizing and promoting social
          development events. Our mission is to bring communities together and
          make a positive impact on society.
        </p>
        <div className="flex justify-center mt-10">
          <img
            src={"https://i.ibb.co/QF2hrC2b/Civitas-logo-2.png"}
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;