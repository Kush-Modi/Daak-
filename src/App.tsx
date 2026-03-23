import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { InfoCard } from './sections/InfoCard';
import { About } from './sections/About';
import { MenuHighlights } from './sections/MenuHighlights';
import { Gallery } from './sections/Gallery';
import { Location } from './sections/Location';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-cafe-50 selection:bg-mustard selection:text-cafe-900">
      <Navbar />
      <Hero />
      <InfoCard />
      <div id="vibe">
        <About />
      </div>
      <div id="menu">
        <MenuHighlights />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
