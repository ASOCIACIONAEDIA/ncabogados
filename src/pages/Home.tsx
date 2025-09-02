import Hero from '../components/Hero';
import Services from '../components/Services';
import SuccessCases from '../components/SuccessCases';
import Stats from '../components/Stats';
import ContactSection from '../components/ContactSection';
import FirmSection from '../components/FirmSection';
import { NewsCarousel } from '../components/NewsCarousel';
import { ProcessSection } from '../components/ProcessSection';
import { AIChatSection } from '../components/AIChatSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AIChatSection />
      <Stats />
      <Services />
      <FirmSection />
      <ProcessSection />
      <SuccessCases />
      <NewsCarousel />
      <ContactSection />
    </div>
  );
};

export default Home;