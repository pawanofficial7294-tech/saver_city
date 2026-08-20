import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';

// About
import About from '../pages/About/About';
import Chairman from '../pages/About/Chairman';
import MissionVision from '../pages/About/MissionVision';
import WhySaveraCity from '../pages/About/WhySaveraCity';

// Projects
import Projects from '../pages/Projects/Projects';
import ResidentialProjects from '../pages/Projects/ResidentialProjects';
import CommercialProjects from '../pages/Projects/CommercialProjects';
import OngoingProjects from '../pages/Projects/OngoingProjects';
import CompletedProjects from '../pages/Projects/CompletedProjects';
import ProjectDetails from '../pages/Projects/ProjectDetails';

// Blog
import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetails';

// Other
import Contact from '../pages/Contact/Contact';
import Careers from '../pages/Careers/Careers';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<About />} />
      <Route path="/about/chairman" element={<Chairman />} />
      <Route path="/about/mission-vision" element={<MissionVision />} />
      <Route path="/why-savera-city" element={<WhySaveraCity />} />

      {/* Projects */}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/residential" element={<ResidentialProjects />} />
      <Route path="/projects/commercial" element={<CommercialProjects />} />
      <Route path="/projects/ongoing" element={<OngoingProjects />} />
      <Route path="/projects/completed" element={<CompletedProjects />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />

      {/* Other */}
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
