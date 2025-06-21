
import Banner from './Banner';
import Newsletter from './Newsletter';
import Gallery from './Gallery';
import Feature from './Feature';

const Home = () => {
    return (
        <div className="bg-base-100"> 
        <Banner></Banner>
        <Feature></Feature>
        <Gallery></Gallery>
        <Newsletter></Newsletter>
        </div>
    );
};

export default Home;