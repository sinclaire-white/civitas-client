const Gallery = () => {
  return (
    <div className="py-10">
      <h2 className="mb-8 text-3xl font-bold text-center">Event Gallery</h2>
      <div className="grid max-w-4xl grid-cols-3 gap-2 mx-auto md:gap-4">
        {/* Large Image */}
        <div className="col-span-3 row-span-2 md:col-span-2">
          <img
            src="https://i.ibb.co/DgrnSV1q/aneta-pawlik-OTMVrxbl-Fqg-unsplash.jpg"
            alt="Event 1"
            className="object-cover w-full h-[400px] rounded-lg hover:scale-105 transition-transform"
          />
        </div>
        {/* Small Images */}
        <div className="grid grid-cols-2 col-span-3 grid-rows-2 gap-2 md:gap-4 md:col-span-1">
          <img
            src="https://i.ibb.co/xKshc3HY/noah-buscher-x8-ZStuk-S2-PM-unsplash.jpg"
            alt="Event 2"
            className="object-cover w-full h-[200px] rounded-lg hover:scale-105 transition-transform"
          />
          <img
            src="https://i.ibb.co/yBRDSJw3/vitor-monthay-Ek-Ed-Har-UPTs-unsplash.jpg"
            alt="Event 3"
            className="object-cover w-full h-[200px] rounded-lg hover:scale-105 transition-transform"
          />
          <img
            src="https://i.ibb.co/5xfMWg5c/ocg-saving-the-ocean-EPPS6-W5-Ld-Xs-unsplash.jpg"
            alt="Event 4"
            className="object-cover w-full h-[200px] rounded-lg hover:scale-105 transition-transform"
          />
          <img
            src="https://i.ibb.co/TB2LsG1x/melissa-walker-horn-76-HIo-I5-Ni1-E-unsplash.jpg"
            alt="Event 5"
            className="object-cover w-full h-[200px] rounded-lg hover:scale-105 transition-transform"
          />
        </div>
        {/* Two Horizontal Images */}
        <div className="flex col-span-3 gap-2 md:col-span-3 md:gap-4">
          <img
            src="https://i.ibb.co/kgcsDrFk/carmen-laezza-Lme3a-QRAi-C8-unsplash.jpg"
            alt="Event 6"
            className="flex-1 object-cover h-[150px] rounded-lg hover:scale-105 transition-transform"
          />
          <img
            src="https://i.ibb.co/d0qKQFQY/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg"
            alt="Event 7"
            className="flex-1 object-cover h-[150px] rounded-lg hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
