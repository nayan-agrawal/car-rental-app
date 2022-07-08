import Header from "./Components/Sections/Header";
import HeroSection from "./Components/Sections/HeroSection";
import GetStarted from "./Components/Sections/GetStarted";
import AboutSection from "./Components/Sections/AboutSection";
import FeaturesSection from "./Components/Sections/FeaturesSection";
import Footer from "./Components/Sections/Footer";
import BlogSection from "./Components/Sections/BlogSection";
import ContactSection from "./Components/Sections/ContactSection";
import NewsletterSection from "./Components/Sections/NewsletterSection";
import PricingSection from "./Components/Sections/PricingSection";
import ScreenshotSection from "./Components/Sections/ScreenshotSection";
import TeamsSection from "./Components/Sections/TeamsSection";
import TestimonialsSection from "./Components/Sections/TestimonialsSection";
import VideoSection from "./Components/Sections/VideoSection";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <GetStarted />
        <AboutSection />
        <FeaturesSection />
        <ScreenshotSection />
        <TestimonialsSection />
        {/* <PricingSection />
        <BlogSection />
        <NewsletterSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
