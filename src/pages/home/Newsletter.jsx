const Newsletter = () => {
  return (
    <div
      className="hero bg-cover bg-center h-[300px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8gZKDgCq/chang-duong-Sj0i-Mtq-Z4w.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="px-4 text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h3 className="mb-4 text-4xl font-extrabold">Subscribe</h3>
          <p className="mb-6 text-sm font-bold">
            Get updates on the latest events and opportunities.
          </p>
          <form className="flex items-center justify-center w-full ">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-2 text-black border rounded-l-md border-primary focus:outline-none"
            />
            <button className="px-6 py-2 text-white cursor-pointer bg-primary rounded-r-md hover:bg-black">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
