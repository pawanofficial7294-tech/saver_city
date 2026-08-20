import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state ('light' | 'dark')
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('savera_theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('savera_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Modal states
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [layoutMapModalOpen, setLayoutMapModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Layout states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Actions
  const openEnquiryModal = (project = null) => {
    setSelectedProject(project);
    setEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
  };

  const openSiteVisitModal = (project = null) => {
    setSelectedProject(project);
    setSiteVisitModalOpen(true);
  };

  const closeSiteVisitModal = () => {
    setSiteVisitModalOpen(false);
  };

  const openBrochureModal = (project = null) => {
    setSelectedProject(project);
    setBrochureModalOpen(true);
  };

  const closeBrochureModal = () => {
    setBrochureModalOpen(false);
  };

  const openLayoutMapModal = () => {
    setLayoutMapModalOpen(true);
  };

  const closeLayoutMapModal = () => {
    setLayoutMapModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        enquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        siteVisitModalOpen,
        openSiteVisitModal,
        closeSiteVisitModal,
        brochureModalOpen,
        openBrochureModal,
        closeBrochureModal,
        layoutMapModalOpen,
        openLayoutMapModal,
        closeLayoutMapModal,
        selectedProject,
        mobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        notification,
        showNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
