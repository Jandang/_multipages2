/* eslint-disable react/prop-types */

import { Outlet } from 'react-router';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css'; 

function Layout({ tab, setTab, products, carts, setToken }) {
    return ( <div className='layout-container'>
        <Header />
        <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
        <Outlet />
        <Footer />
    </div> );
}

export default Layout;