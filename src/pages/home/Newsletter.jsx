import React from 'react';

const Newsletter = () => {
  return (
   <div className='p-4 md:p-6 lg:p-8'>
     <div className="relative p-6 px-4 py-20 mx-auto mb-12 overflow-hidden text-white sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary rounded-2xl md:rounded-3xl lg:rounded-4xl md:p-8 lg:p-12 max-w-7xl"> 
      
      <div className="absolute top-0 left-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full opacity-10 mix-blend-overlay"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-white rounded-full opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Don't Miss Out! <span className="block lg:inline-block">Your Community Awaits.</span>
        </h2>
        
        {/* Subtitle/Inspiring Text */}
        <p className="max-w-3xl mx-auto mb-10 text-lg font-light sm:text-xl md:text-2xl opacity-90">
          Unlock exclusive event invites, volunteer opportunities, and heartwarming success stories. 
          Be the first to know what’s brewing to make a difference right here in Bangladesh!
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col items-center justify-center max-w-lg gap-4 mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="Your Best Email Address"
            
            className="w-full text-gray-800 input input-bordered input-lg sm:flex-1 focus:outline-none focus:border-info focus:ring-1 focus:ring-info"
            aria-label="Enter your email to subscribe to the newsletter"
          />
          <button
            type="submit"
            
            className="w-full px-8 transition-transform duration-300 ease-out shadow-xl btn btn-accent btn-lg hover:scale-105 sm:w-auto"
          >
            Subscribe Now
          </button>
        </form>

        {/* Small text */}
        <p className="mt-6 text-sm opacity-70">
          No spam, ever. Just good vibes and meaningful connections.
        </p>
      </div>
    </div>
   </div>
  );
};

export default Newsletter;