import { useEffect } from 'react';
import Banner from '../Main/Banner'

const Home = () => {
    useEffect(() => {
        document.title = 'Gadget Haven / Home';
    }, []);

    return (
        <div>
            <div className='relative'>
            <Banner/>
            </div>
            
        </div>
    );
};

export default Home;