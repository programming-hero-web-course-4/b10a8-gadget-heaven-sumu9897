import { useEffect } from 'react';
import Banner from '../components/Banner'
import Products from "../components/Products";

const Home = () => {
    useEffect(() => {
        document.title = 'Gadget Haven / Home';
    }, []);

    return (
        <div>
            <div className='relative'>
            <Banner/>
            </div>
            <Products></Products>
            
        </div>
    );
};

export default Home;