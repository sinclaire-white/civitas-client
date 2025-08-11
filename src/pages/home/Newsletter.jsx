import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle subscribe (hook to API or toast)
    setEmail("");
  };

  return (
    <section className="py-12">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative p-8 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-primary to-secondary md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold">Don't Miss Out! Your Community Awaits.</h2>
            <p className="mb-8 text-lg opacity-90">
              Unlock exclusive event invites and volunteer opportunities. Be the first to know what's happening in your area.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email address"
                className="w-full text-black sm:flex-1 input input-bordered bg-white/90"
                aria-label="Email"
              />
              <button type="submit" className="w-full transition-transform duration-300 btn sm:w-auto btn-primary hover:btn-accent hover:scale-105 hover:text-primary">
                Subscribe Now
              </button>
            </form>

            <p className="mt-4 text-sm opacity-80">No spam, ever. Just meaningful updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
