import Header from "./components/layout/header";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Services from "./components/sections/services";
import FeaturedProjects from "./components/sections/featured-projects";
import OurApproach from "./components/sections/our-approach";
import WhyKrishna from "./components/sections/why-krishna";
import Testimonials from "./components/sections/testimonials";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import ScrollReveal from "./components/layout/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollReveal />
      <Header />
      <Hero />
       <About />
       <Services />
      <FeaturedProjects />
      <OurApproach />
      <WhyKrishna />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}