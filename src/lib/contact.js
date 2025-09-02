// services/emailService.js
import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
};

// Validate that all required environment variables are present
const validateConfig = () => {
  const requiredVars = [
    'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 
    'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('Missing required EmailJS environment variables:', missingVars);
    throw new Error(`Missing EmailJS configuration: ${missingVars.join(', ')}`);
  }
};

// Validate configuration on module load
validateConfig();

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.publicKey);
};

/**
 * Send contact form email
 * @param {Object} formData - The form data to send
 * @param {string} formData.user_name - User's name
 * @param {string} formData.user_email - User's email
 * @param {string} formData.message - User's message
 * @returns {Promise} EmailJS send promise
 */
export const sendContactEmail = async (formData) => {
  try {
    // Debug: Log configuration (remove in production)
    console.log('EmailJS Config:', {
      serviceId: EMAIL_CONFIG.serviceId ? '✓ Set' : '✗ Missing',
      templateId: EMAIL_CONFIG.templateId ? '✓ Set' : '✗ Missing',
      publicKey: EMAIL_CONFIG.publicKey ? '✓ Set' : '✗ Missing'
    });

    // Validate required fields
    if (!formData.user_name || !formData.user_email || !formData.message) {
      throw new Error('All fields are required');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      throw new Error('Invalid email format');
    }

    // Debug: Log form data (remove in production)
    console.log('Sending email with data:', {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message.substring(0, 50) + '...'
    });

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        user_name: formData.user_name,
        user_email: formData.user_email,
        message: formData.message,
        to_name: 'Your Name/Company', // Optional: recipient name
        reply_to: formData.user_email
      },
      EMAIL_CONFIG.publicKey
    );

    return {
      success: true,
      data: response,
      message: 'Email sent successfully!'
    };

  } catch (error) {
    console.error('EmailJS Error:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      status: error.status,
      text: error.text
    });
    
    return {
      success: false,
      error: error.message || error.text || 'Failed to send email',
      message: 'Failed to send message. Please try again later.'
    };
  }
};

/**
 * Send custom email with template parameters
 * @param {Object} templateParams - Template parameters
 * @param {string} templateId - Optional template ID (uses default if not provided)
 * @returns {Promise} EmailJS send promise
 */
export const sendCustomEmail = async (templateParams, templateId = null) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      templateId || EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return {
      success: true,
      data: response,
      message: 'Email sent successfully!'
    };

  } catch (error) {
    console.error('EmailJS Error:', error);
    
    return {
      success: false,
      error: error.message || 'Failed to send email',
      message: 'Failed to send email. Please try again later.'
    };
  }
};

/**
 * Update EmailJS configuration
 * @param {Object} newConfig - New configuration object
 */
export const updateEmailConfig = (newConfig) => {
  Object.assign(EMAIL_CONFIG, newConfig);
  if (newConfig.publicKey) {
    emailjs.init(newConfig.publicKey);
  }
};

// Initialize EmailJS when the service is imported
initEmailJS();