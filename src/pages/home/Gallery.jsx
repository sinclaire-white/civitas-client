const Gallery = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-base-100">
      <div className="max-w-screen-xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
          Event <span className="text-primary-focus">Highlights</span>
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-primary">
          Relive the moments and see the impact we've made together through our
          diverse community events.
        </p>
      </div>

      <div className="grid max-w-screen-xl grid-cols-2 gap-4 mx-auto sm:grid-cols-4 lg:grid-cols-6">
        {/* Large Image */}
        <div className="col-span-2 overflow-hidden shadow-lg sm:col-span-4 lg:col-span-4 rounded-xl">
          <img
            src="https://i.ibb.co/DgrnSV1q/aneta-pawlik-OTMVrxbl-Fqg-unsplash.jpg"
            alt="Community Cleanup Event"
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-[450px] transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          />
        </div>

        {/* Smaller Images */}
        <div className="grid grid-cols-2 col-span-2 gap-4 sm:col-span-2 lg:col-span-2">
          {[
            {
              src: "https://i.ibb.co/xKshc3HY/noah-buscher-x8-ZStuk-S2-PM-unsplash.jpg",
              alt: "Local Festival",
            },
            {
              src: "https://i.ibb.co/yBRDSJw3/vitor-monthay-Ek-Ed-Har-UPTs-unsplash.jpg",
              alt: "Charity Run",
            },
            {
              src: "https://i.ibb.co/5xfMWg5c/ocg-saving-the-ocean-EPPS6-W5-Ld-Xs-unsplash.jpg",
              alt: "Ocean Cleanup Initiative",
            },
            {
              src: "https://i.ibb.co/TB2LsG1x/melissa-walker-horn-76-HIo-I5-Ni1-E-unsplash.jpg",
              alt: "Volunteer Meeting",
            },
          ].map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="object-cover w-full h-full rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}
        </div>

        {/* Bottom Horizontal Images */}
        <div className="grid grid-cols-2 col-span-2 gap-4 sm:col-span-4 lg:col-span-6">
          {[
            {
              src: "https://i.ibb.co/kgcsDrFk/carmen-laezza-Lme3a-QRAi-C8-unsplash.jpg",
              alt: "Community Workshop",
            },
            {
              src: "https://i.ibb.co/d0qKQFQY/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg",
              alt: "Food Drive",
            },
          ].map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="object-cover w-full rounded-xl shadow-md cursor-pointer h-36 sm:h-48 transform transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
