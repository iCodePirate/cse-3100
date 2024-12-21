import { useState } from 'react';
import './ContactUs.css'; // Import the CSS file for styles

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'message') {
      setMessageLength(value.length);
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setMessageLength(0);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section className="contact-us text-center mt-4">
      <h2 className="animated-title">Contact Us</h2>
      <p className="subheading">We would love to hear from you! Please fill out the form below.</p>

      {isSubmitted ? (
        <div className="thank-you-message fade-in">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form bounce-in">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <small className="error-message">{formErrors.name}</small>}
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <small className="error-message">{formErrors.email}</small>}
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <div className="char-counter">{messageLength}/500</div>
            {formErrors.message && <small className="error-message">{formErrors.message}</small>}
          </div>

          <button type="submit" className="btn-submit scale-up">Submit</button>
        </form>
      )}

      {/* Social Media Links */}
      <div className="social-media mt-4">
        <h4>Connect with us:</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_https://www.facebook.com/jamil.jim.946/" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="https://www.instagram.com/ipirate_jim/" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
