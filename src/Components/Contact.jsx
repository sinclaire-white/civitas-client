const Contact = () => {
  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-primary">
          Contact Us
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="w-full max-w-md">
            <h2 className="mb-4 text-xl font-bold">Get in Touch</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full input input-bordered"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full input input-bordered"
              />
              <textarea
                placeholder="Your Message"
                className="w-full textarea textarea-bordered"
                rows="5"
              ></textarea>
              <button className="w-full text-white btn bg-primary">Send Message</button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
