import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Title from "./Title";
import { animations } from "../utils/animations";
import contactImg from "../assets/contactImg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const contactInfo = {
    name: "John Doe",
    role: "Full Stack Developer",
    bio: "Let's create something remarkable together. Reach out for collaborations, opportunities, or just to say hello!",
    phone: "+1 (555) 123-4567",
    email: "john.doe@devport.com",
    socials: [
      { icon: <FaFacebookF />, link: "#" },
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedinIn />, link: "#" },
    ],
  };

  const validateForm = () => {
    const { name, phone, email, subject, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!name.trim()) return "Name is required";
    if (!phoneRegex.test(phone)) return "Valid phone number required";
    if (!emailRegex.test(email)) return "Valid email required";
    if (!subject.trim()) return "Subject is required";
    if (!message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    // Simulate API call
    setStatus({
      type: "success",
      message: `Thank you ${formData.name}, your message has been sent!`,
    });
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Get in Touch"
          des="Let's Build Something Great"
          align="center"
        />

        <motion.div
          initial={animations.fadeIn.initial}
          whileInView={animations.fadeIn.animate}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mt-12"
        >
          {/* Contact Info Card */}
          <motion.div
            {...animations.scrollSlideLeft}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 p-8 lg:col-span-1"
          >
            <div className="flex flex-col gap-8">
              <img
                src={contactImg}
                alt="Contact"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-200">
                  {contactInfo.name}
                </h3>
                <p className="text-slate-400">{contactInfo.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {contactInfo.bio}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-slate-400">
                    <FaPhoneAlt className="text-blue-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <FaRegEnvelope className="text-blue-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <h4 className="text-sm text-slate-400 mb-4">
                    CONNECT WITH ME
                  </h4>
                  <div className="flex gap-4">
                    {contactInfo.socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        whileHover={animations.hoverScale}
                        className="p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-300 hover:text-white transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            {...animations.scrollSlideRight}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700/50 p-8 space-y-6"
          >
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status.type === "error"
                    ? "bg-red-400/10 border border-red-400/20"
                    : "bg-green-400/10 border border-green-400/20"
                }`}
              >
                <p
                  className={`text-sm ${
                    status.type === "error" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {status.message}
                </p>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400">Phone Number *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="+1 555 123 4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Email Address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="john.doe@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 focus:outline-none focus:border-blue-400 transition-colors"
                placeholder="Let's discuss your project..."
              />
            </div>

            <motion.button
              whileHover={animations.hoverScale}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-400/90 text-white rounded-lg hover:bg-blue-400 transition-colors"
            >
              <FiSend className="text-lg" />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
