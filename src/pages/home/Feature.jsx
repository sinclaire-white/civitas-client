const Feature = () => {
  return (
    <div className="px-4 py-16">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">What We Offer</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover the key features that make Civitus the ideal platform for 
          creating, joining, and managing impactful events in your community.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 features md:grid-cols-3">
        <div className="p-6 text-center shadow-lg card">
          <i className="mb-4 text-4xl icon text-primary">🎉</i>
          <h3 className="text-2xl font-bold">Create Events</h3>
          <p className="mt-2">Organize events to make an impact in your community.</p>
        </div>
        <div className="p-6 text-center shadow-lg card">
          <i className="mb-4 text-4xl icon text-secondary">📅</i>
          <h3 className="text-2xl font-bold">Join Events</h3>
          <p className="mt-2">Explore and join events happening around you.</p>
        </div>
        <div className="p-6 text-center shadow-lg card">
          <i className="mb-4 text-4xl icon text-accent">⚙️</i>
          <h3 className="text-2xl font-bold">Manage Events</h3>
          <p className="mt-2">Edit or track events you’ve created or joined.</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
