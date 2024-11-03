import { useEffect } from 'react';

const Statistics = () => {
    useEffect(() => {
        document.title = 'Gadget Haven / Statistics';
    }, []);
    return (
        <div>
            Statics
        </div>
    );
};

export default Statistics;