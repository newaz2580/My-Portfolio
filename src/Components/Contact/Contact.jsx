import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
setSubmitting(true)
    emailjs
      .sendForm("service_g6n6hle", "template_knlgs1y", ref.current, {
        publicKey: "6wHKj8vUrg68le2-_",
      })
      .then(
        () => {
setSubmitting(false)

          console.log("SUCCESS!");

          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
setSubmitting(false)

          console.log("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold text-blue-800 dark:text-blue-400 mb-6">
            Contact Info
          </h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <span>Bangladesh, Dhaka</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <a href="tel:+8801687678113" className="hover:underline">
              01687678113
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <a href="mailto:newaz2796@gmail.com" className="hover:underline">
              newaz2796@gmail.com
            </a>
          </div>

          <div className="flex gap-6 text-3xl mt-8">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/newaz2580"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-newaz-b44113370/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div>
          <h2 className="text-5xl font-extrabold text-blue-800 dark:text-blue-400 mb-6 text-center md:text-left">
            Get In Touch
          </h2>

          {submitted ? (
            <p className="text-green-600 dark:text-green-400 font-semibold text-lg text-center md:text-left">
              Thanks for your message! I’ll get back to you soon.
            </p>
          ) : (
            <form
            ref={ref}
              onSubmit={handleSubmit}
              className="space-y-6 max-w-xl mx-auto md:mx-0"
            >
              <label className="block">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="block">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="block">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Message
                </span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-3 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </label>

              <button
              disabled={submitting}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
              >
                {submitting ? "Sending...": "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
