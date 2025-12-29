import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CredentialsBar from '../components/CredentialsBar';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import LearningPaths from '../components/LearningPaths';
import Instructor from '../components/Instructor';
import Testimonials from '../components/Testimonials';
import FreeResources from '../components/FreeResources';
import Pricing from '../components/Pricing';
import Consulting from '../components/Consulting';
import Footer from '../components/Footer';
import AllStructuredData from '../components/StructuredData';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AllStructuredData />
      <Navbar />
      <Hero />
      <CredentialsBar />
      <ProblemSection />
      <SolutionSection />
      <LearningPaths />
      <Instructor />
      <Testimonials />
      <FreeResources />
      <Pricing />
      <Consulting />
      <Footer />
    </main>
  );
}
