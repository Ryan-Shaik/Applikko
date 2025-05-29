import './App.css';
import HeroSection from './components/HeroSection';
import ProductBenefits from './components/ProductBenefits';
import IngredientsHighlight from './components/IngredientsHighlight';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <ProductBenefits />
      <IngredientsHighlight />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;