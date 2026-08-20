/* Formatting utility functions */

/**
 * Formats a number to Indian currency system (e.g. 5000000 -> ₹50 Lakh)
 * @param {number} value - The numeric value in Rupees
 * @returns {string} - Formatted currency string
 */
export const formatCurrencyIndian = (value) => {
  if (!value) return '';
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)} Lakh`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format date to standard readable format
 * @param {string|Date} dateStr - Date string or object
 * @returns {string} - Formatted date (e.g., Aug 10, 2026)
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Limit characters and append ellipsis
 * @param {string} text - Input text
 * @param {number} limit - Max characters
 * @returns {string} - Truncated text
 */
export const truncateText = (text, limit = 100) => {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.slice(0, limit) + '...';
};
