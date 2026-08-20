/* Client-side form validation helpers */

/**
 * Validates whether string is a valid email
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a standard Indian phone number (10 digits, optionally starting with +91 or 0)
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  return phoneRegex.test(cleanPhone);
};

/**
 * Checks for empty or whitespace-only strings
 * @param {string} str
 * @returns {boolean}
 */
export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};

/**
 * Full form validator helper
 * @param {object} data - Form data
 * @param {object} rules - Validation rules (e.g. { name: 'required', email: 'email', phone: 'phone' })
 * @returns {object} - Object containing errors ({ name: 'Name is required' })
 */
export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const value = data[field];
    const ruleList = rules[field].split('|');
    
    for (const rule of ruleList) {
      if (rule === 'required' && (!value || (typeof value === 'string' && value.trim() === ''))) {
        errors[field] = 'This field is required';
        break;
      }
      
      if (value && rule === 'email' && !isValidEmail(value)) {
        errors[field] = 'Please enter a valid email address';
        break;
      }
      
      if (value && rule === 'phone' && !isValidPhone(value)) {
        errors[field] = 'Please enter a valid 10-digit phone number';
        break;
      }
    }
  });
  
  return errors;
};
