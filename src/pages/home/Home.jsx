import Banner from './Banner';
import Newsletter from './Newsletter';
import Gallery from './Gallery';
import Feature from './Feature';
import RecentEvents from './RecentEvents'; 

const Home = () => {
    return (
        <div className="bg-base-100">
            <Banner></Banner>
            <Feature></Feature>
            <RecentEvents></RecentEvents> 
            <Gallery></Gallery>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;