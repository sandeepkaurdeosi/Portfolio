import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5'; // Import close icon from react-icons

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      navigate('/'); // Redirect to homepage after successful submission
    } catch (error) {
      console.error("Form submission error:", error);
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate('/'); // Redirect to homepage when close icon is clicked
  };

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-6 relative">
        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#00796b] hover:text-[#004d40] transition"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-4xl font-extrabold text-[#00796b] text-center mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-[#004d40] mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`bg-[#00796b] text-white py-2 px-4 rounded-lg transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#004d40]'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-[#004d40] mb-6">Contact Details</h3>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> sandeepdeosi7@gmail.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +91 9501475016
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Social Media:</strong>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sandeep-kaur-deosi"
                className="text-[#00796b] hover:text-[#004d40] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sandeepkaurdeosi"
                className="text-[#00796b] hover:text-[#004d40] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
