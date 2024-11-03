import { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Gadget Haven / Dashboard';
      }, []);
    return (
        <div>
            Dashboard
        </div>
    );
};

export default Dashboard;