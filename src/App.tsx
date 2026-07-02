import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/sections/Hero';
import { TrustRibbon } from './components/sections/TrustRibbon';
import { Services } from './components/sections/Services';
import { FeaturedWork } from './components/sections/FeaturedWork';
import { WorkingProcess } from './components/sections/WorkingProcess';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        {/* Render newly implemented Hero Section */}
        <Hero />

        {/* Render newly implemented Trust Ribbon */}
        <TrustRibbon />

        {/* Render newly implemented Services Section */}
        <Services />

        {/* Render newly implemented Featured Work Section */}
        <FeaturedWork />

        {/* Render newly implemented Working Process Section */}
        <WorkingProcess />

        {/* Render newly implemented About Section */}
        <About />

        {/* Render newly implemented Testimonials Section */}
        <Testimonials />

        {/* Render newly implemented FAQ Section */}
        <FAQ />

        {/* Render newly implemented Contact Section */}
        <Contact />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
