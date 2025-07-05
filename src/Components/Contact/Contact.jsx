import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

// Animation configs
const stagger = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 50 }
  }),
};

const CONTACT_CARDS = [
  {
    icon: <FaEnvelope className="text-cyan-500 text-3xl mb-2" />,
    label: "Email",
    value: "monisharema97@gmail.com",
    href: "mailto:monisharema97@gmail.com",
    subtext: "I respond within 1 business day.",
  },
  {
    icon: <FaLinkedin className="text-cyan-500 text-3xl mb-2" />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/monisha-rema-web-developer/",
    href: "https://www.linkedin.com/in/monisha-rema-web-developer/",
    subtext: "Connect professionally.",
  },
  {
    icon: <FaGithub className="text-cyan-500 text-3xl mb-2" />,
    label: "GitHub",
    value: "github.com/monisharema",
    href: "https://github.com/monisharema",
    subtext: "See my latest code.",
  },
  {
    icon: <FaPhoneAlt className="text-cyan-500 text-3xl mb-2" />,
    label: "Phone",
    value: "+974 3329 6248",
    href: "tel:+97433296248",
    subtext: "Available working hours.",
  },
];

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setMessage("");

    emailjs
      .sendForm("service_hm923pf", "template_y31ztm6", form.current, {
        publicKey: "FDOVSfwE7WfC55Huh",
      })
      .then(
        () => {
          setSending(false);
          setMessage("Message sent! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          setSending(false);
          setMessage("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 min-h-[80vh] overflow-hidden flex flex-col justify-center bg-[#00000080] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://www.tetratecheurope.com/wp-content/uploads/2024/05/Contact-Us-1.jpg)`,
      }}
    >
      {/* Animated Background Blob (Framer Motion) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.24, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 via-blue-600 to-fuchsia-500 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-0 z-0 pointer-events-none"
        style={{ opacity: 0.18 }}
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1280px] mx-auto px-4"
        >
          <div className="rounded-3xl bg-gray-900/50 shadow-2xl ring-1 ring-cyan-600/20 backdrop-blur-md p-5 lg:p-14 relative z-10">
            {/* Content Layout */}
            <div className="flex gap-10 flex-col-reverse lg:flex-row items-center justify-between">
              {/* Contact Cards */}
              <motion.div
                className="flex-1 w-full grid grid-cols-2 gap-6 mt-10 lg:mt-0"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                {CONTACT_CARDS.map(({ icon, label, href, subtext }, i) => (
                  <motion.div
                    key={i}
                    variants={stagger}
                    custom={i}
                   
                    className="flex flex-col justify-between items-center h-48 bg-[#19202b] rounded-2xl shadow border-2 border-cyan-700/10 px-4 py-5 hover:border-cyan-400/50 transition-all duration-200"
                    style={{ minWidth: "0" }}
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.08 }}
                      className="flex flex-col items-center"
                    >
                      {icon}
                      <div className="font-bold text-white mb-1">{label}</div>
                      <div className="text-xs text-gray-400 mt-2 text-center">{subtext}</div>
                    </motion.div>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-4 text-center block px-4 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-semibold shadow hover:from-cyan-600 hover:to-blue-800 transition-all duration-200"
                      style={{ minWidth: "70px" }}
                    >
                      Go
                    </a>
                  </motion.div>
                ))}
              </motion.div>
              {/* Contact Form */}
              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <h2 className="text-center lg:text-start text-4xl lg:text-5xl font-bold text-white mb-2 mt-10 lg:mt-0">
                  Let’s Connect
                </h2>
                <p className="text-center lg:text-start text-gray-300 mb-5 max-w-sm mx-auto lg:mx-0">
                  Reach out for collaboration, opportunities, or just to say hi.<br />
                  I respond quickly to all messages.
                </p>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  autoComplete="off"
                  className="space-y-5 mt-10"
                >
                  <div className="flex flex-col lg:flex-row gap-5">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="flex-1 px-4 py-3 rounded-lg border border-cyan-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg border border-cyan-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-cyan-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-lg font-semibold shadow-lg shadow-cyan-500/10 transition-all duration-200 ${
                      sending
                        ? "bg-cyan-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    }`}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </motion.button>
                  {message && (
                    <div className="text-center text-cyan-400 mt-3">{message}</div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
