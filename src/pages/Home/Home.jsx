import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import StatsSection from '../../components/sections/StatsSection';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import PlotInventorySection from '../../components/property/PlotInventorySection';
import PlotSizeCalculator from '../../components/property/PlotSizeCalculator';
import LocationConnectivitySection from '../../components/property/LocationConnectivitySection';
import AmenitiesGallerySection from '../../components/property/AmenitiesGallerySection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Testimonials from '../../components/sections/Testimonials';
import EnquirySection from '../../components/sections/EnquirySection';
import BrochureSection from '../../components/sections/BrochureSection';

const Home = () => {
  return (
    <main>
      {/* 1. HOME PAGE (The Gateway) */}
      <HeroSection />

      {/* 2. ABOUT & STATS */}
      <AboutSection />
      <StatsSection />

      {/* 3. FEATURED TOWNSHIPS */}
      <FeaturedProjects />

      {/* 4. PLOT OPTIONS & PRICING (Inventory & Master Layout Map) */}
      <PlotInventorySection />

      {/* 5. OFFICIAL PLOT AREA CHART (SA, SB, SC, SD, SE, SF, SG & Blueprint Calculator) */}
      <PlotSizeCalculator />

      {/* 6. LOCATION & CONNECTIVITY (Interactive Map & Landmarks) */}
      <LocationConnectivitySection />

      {/* 7. AMENITIES & GALLERY (Lifestyle Photos) */}
      <AmenitiesGallerySection />

      {/* 8. WHY CHOOSE US & TESTIMONIALS */}
      <WhyChooseUs />
      <Testimonials />

      {/* 9. CONTACT US & SITE VISIT (Conversion Form) */}
      <EnquirySection />
      <BrochureSection />
    </main>
  );
};

export default Home;
