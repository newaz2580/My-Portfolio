import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    // TODO: Connect to backend/email service
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Info */}
        <div className="text-gray-700 dark:text-gray-300 space-y-8 order-1 md:order-1">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-8">Contact Info</h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <span>Bangladesh, Dhaka</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <span>
              Phone / WhatsApp:{" "}
              <a href="tel:+8801687678113" className="hover:underline">
                01687678113
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <span>
              Email:{" "}
              <a href="mailto:newaz2796@gmail.com" className="hover:underline">
                newaz2796@gmail.com
              </a>
            </span>
          </div>

          <div className="flex gap-6 text-3xl mt-8">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/newaz2580"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-300 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="order-2 md:order-2">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-8 text-center md:text-left">Get In Touch</h2>
          {submitted ? (
            <p className="text-green-600 dark:text-green-400 font-semibold text-lg text-center md:text-left">
              Thanks for your message! I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto md:mx-0">
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
