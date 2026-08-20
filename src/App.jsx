import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import Modal from './components/common/Modal';
import EnquiryForm from './components/forms/EnquiryForm';
import SiteVisitForm from './components/forms/SiteVisitForm';
import BrochureForm from './components/forms/BrochureForm';
import LayoutMapModal from './components/common/LayoutMapModal';
import AppRoutes from './routes/AppRoutes';

const AppContent = () => {
  const {
    enquiryModalOpen, closeEnquiryModal, activeProject,
    siteVisitModalOpen, closeSiteVisitModal,
    brochureModalOpen, closeBrochureModal,
    layoutMapModalOpen, closeLayoutMapModal
  } = useApp();

  return (
    <div className="app-root">
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
      <FloatingActions />

      {/* Global Modals */}
      <Modal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        title={activeProject ? `Enquire about ${activeProject.name}` : 'Property Enquiry'}
      >
        <EnquiryForm defaultProject={activeProject?.name || ''} />
      </Modal>

      <Modal
        isOpen={siteVisitModalOpen}
        onClose={closeSiteVisitModal}
        title={activeProject ? `Book Site Visit - ${activeProject.name}` : 'Book a Site Visit'}
      >
        <SiteVisitForm defaultProject={activeProject?.name || ''} />
      </Modal>

      <Modal
        isOpen={brochureModalOpen}
        onClose={closeBrochureModal}
        title={activeProject ? `Download Brochure - ${activeProject.name}` : 'Request Brochure'}
      >
        <BrochureForm defaultProject={activeProject?.name || ''} />
      </Modal>

      <LayoutMapModal
        isOpen={layoutMapModalOpen}
        onClose={closeLayoutMapModal}
      />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
