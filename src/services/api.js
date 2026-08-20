/* API Client wrapper */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.saveracity.com/api';

/**
 * Generic fetch client with standard headers and error handling
 * @param {string} endpoint - API path (e.g. '/projects')
 * @param {object} options - Fetch options (method, headers, body)
 * @returns {Promise<any>}
 */
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`[API Call Failed: ${endpoint}] Falling back to local data. Error:`, error.message);
    throw error;
  }
};
