import Banner from './Banner';
import Feature from './Feature';
import RecentEvents from './RecentEvents';
import Gallery from './Gallery';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Banner />

      <section className="py-12"><div className="max-w-screen-xl px-4 mx-auto"><Feature /></div></section>
      <section className="py-12"><div className="max-w-screen-xl px-4 mx-auto"><RecentEvents /></div></section>
      <section className="py-12"><div className="max-w-screen-xl px-4 mx-auto"><Gallery /></div></section>
      <section className="py-12"><div className="max-w-screen-xl px-4 mx-auto"><Newsletter /></div></section>
    </div>
  );
};

export default Home;
