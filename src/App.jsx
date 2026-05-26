import React from 'react';
import { NavbarDemo as Navbar } from './components/Navbar';
import Hero from './components/Hero';

import Features from './components/Features';
import Metrics from './components/Metrics';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main style={{ paddingTop: '0', minHeight: '200vh' }}>
                {/* <Hero />
                <Metrics />
                <Features />
                <HowItWorks />
                <Pricing />
                <Testimonials />
                <FAQ /> */}
            </main>
            <Footer />
        </div>
    );
}

export default App;
