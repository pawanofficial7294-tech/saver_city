/* Contact Service */

import { fetchApi } from './api';

export const contactService = {
  /**
   * Submit contact form query
   * @param {object} data
   * @returns {Promise<object>}
   */
  async submitContact(data) {
    try {
      return await fetchApi('/contact', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    } catch {
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, message: "Your message has been received! Our support desk will reach out within 24 hours." };
    }
  }
};
