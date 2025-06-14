import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ClientReviews from './components/ClientReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import FloatingElements from './components/FloatingElements';
import GradientMesh from './components/GradientMesh';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background layers */}
      <GradientMesh />
      <FloatingElements />
      <BackgroundEffects />
      
      {/* Main content */}
      <div className="relative z-10">
        <CustomCursor />
        <Header />
        <SocialSidebar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <ClientReviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;