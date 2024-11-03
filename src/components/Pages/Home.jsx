import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'Gadget Haven / Home';
    }, []);

    return (
        <div>
            Home
        </div>
    );
};

export default Home;