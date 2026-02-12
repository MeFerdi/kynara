import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Marquee from '../components/Marquee';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        // Reset scroll when navigating back to home
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <Services />
            <Marquee />
            <Approach />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
