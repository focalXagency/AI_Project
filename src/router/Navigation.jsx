import React, { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import News from '../pages/News'
import BlogOpen from '../pages/BlogOpen'
import Podcasts from '../pages/Podcasts'
import Resources from '../pages/Resources'
import Contact from '../pages/Contact'
import NavBar from '../components/NavBar/NavBar'
import BePart from '../components/BePart/BePart'
import Footer from '../components/Footer/Footer'

function Navigation() {


    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<Outlet />}>
                    <Route path="news" element={<News />} />
                    <Route path=":id" element={<BlogOpen />} />
                </Route>
                <Route path="podcast" element={<Podcasts />} />
                <Route path="resources" element={<Resources />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <BePart />
            <Footer />
        </div>
    )
}

export default Navigation