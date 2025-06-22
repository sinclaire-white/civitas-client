const Gallery = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-primary sm:text-5xl">
          Event <span className="text-primary-focus">Highlights</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-primary">
          Relive the moments and see the impact we've made together through our diverse community events.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-4 lg:grid-cols-6 md:gap-4 max-w-7xl">
        {/* Large Image */}
        <div className="col-span-2 sm:col-span-4 lg:col-span-4">
          <img
            src="https://i.ibb.co/DgrnSV1q/aneta-pawlik-OTMVrxbl-Fqg-unsplash.jpg"
            alt="Community Cleanup Event"
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-[450px] rounded-xl shadow-lg transform hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer"
          />
        </div>

        {/* Top Right Small Images */}
        
        <div className="grid grid-cols-2 col-span-2 gap-3 sm:col-span-2 lg:col-span-2 md:gap-4">
          <img
            src="https://i.ibb.co/xKshc3HY/noah-buscher-x8-ZStuk-S2-PM-unsplash.jpg"
            alt="Local Festival"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer rounded-xl hover:scale-102"
          />
          <img
            src="https://i.ibb.co/yBRDSJw3/vitor-monthay-Ek-Ed-Har-UPTs-unsplash.jpg"
            alt="Charity Run"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer rounded-xl hover:scale-102"
          />
          <img
            src="https://i.ibb.co/5xfMWg5c/ocg-saving-the-ocean-EPPS6-W5-Ld-Xs-unsplash.jpg"
            alt="Ocean Cleanup Initiative"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer rounded-xl hover:scale-102"
          />
          <img
            src="https://i.ibb.co/TB2LsG1x/melissa-walker-horn-76-HIo-I5-Ni1-E-unsplash.jpg"
            alt="Volunteer Meeting"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer rounded-xl hover:scale-102"
          />
        </div>

        {/* Bottom Horizontal Images */}
        
        <div className="grid grid-cols-2 col-span-2 gap-3 sm:col-span-4 lg:col-span-6 md:gap-4">
          <img
            src="https://i.ibb.co/kgcsDrFk/carmen-laezza-Lme3a-QRAi-C8-unsplash.jpg"
            alt="Community Workshop"
            className="object-cover w-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer h-36 sm:h-48 rounded-xl hover:scale-102"
          />
          <img
            src="https://i.ibb.co/d0qKQFQY/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg"
            alt="Food Drive"
            className="object-cover w-full transition-transform duration-300 ease-in-out transform shadow-md cursor-pointer h-36 sm:h-48 rounded-xl hover:scale-102"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;