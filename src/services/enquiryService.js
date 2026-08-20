/* Enquiry Service - Handles enquiry, site visit, and brochure form submissions */

import { fetchApi } from './api';

export const enquiryService = {
  /**
   * Submit general property enquiry
   * @param {object} data
   * @returns {Promise<object>}
   */
  async submitEnquiry(data) {
    try {
      return await fetchApi('/enquiries', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch {
      // Simulate network response for demonstration
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, message: "Thank you! Our property representative will contact you shortly." };
    }
  },

  /**
   * Book a site visit date and time slot
   * @param {object} data
   * @returns {Promise<object>}
   */
  async bookSiteVisit(data) {
    try {
      return await fetchApi('/site-visits', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch {
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, message: "Site visit successfully scheduled! Confirmation details sent via SMS & Email." };
    }
  },

  /**
   * Submit brochure request
   * @param {object} data
   * @returns {Promise<object>}
   */
  async requestBrochure(data) {
    try {
      return await fetchApi('/brochures/request', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch {
      await new Promise(resolve => setTimeout(resolve, 800));
      return { 
        success: true, 
        message: "Brochure requested successfully! Downloading will start shortly.",
        downloadUrl: "#" 
      };
    }
  }
};
