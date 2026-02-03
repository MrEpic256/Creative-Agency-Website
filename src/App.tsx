import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          
          <main>
            <Hero />
            <FeaturedWork />
            <Services />
            <About />
            <Team />
            <Process />
            <Testimonials />
            <Awards />
            <Contact />
          </main>
          
          <Footer />
          
          {/* Grain overlay */}
          <div className="grain-overlay" />
        </>
      )}
    </>
  );
}

export default App;
