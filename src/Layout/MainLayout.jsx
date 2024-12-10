import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar.jsx';
import Footer from '../Shared/Footer.jsx';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;