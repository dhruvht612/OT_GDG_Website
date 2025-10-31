import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialLinks = [
    {
      name: "Discord",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      ),
      color: "hover:text-indigo-400",
      link: "https://discord.gg/2dzmhaNr",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
        </svg>
      ),
      color: "hover:text-pink-400",
      link: "https://www.instagram.com/otu_gdg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" />
        </svg>
      ),
      color: "hover:text-blue-400",
      link: "https://www.linkedin.com/company/otu-gddon/posts/?feedView=all",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Join Us", href: "#join" },
  ];

  const resources = [
    { name: "Google Cloud", href: "https://cloud.google.com" },
    { name: "Android Dev", href: "https://developer.android.com" },
    { name: "TensorFlow", href: "https://tensorflow.org" },
    { name: "Firebase", href: "https://firebase.google.com" },
  ];

  return (
    <footer className="relative bg-gdg-black text-white overflow-hidden">
      {/* Top GDG gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow"></div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
              {["blue", "green", "yellow"].map((color, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  className={`w-12 h-12 bg-gdg-${color} rounded-xl flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-xl">
                    {"GDG"[i]}
                  </span>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-bold">GDG On Campus</h3>
            <p className="text-gray-400 mb-4">Ontario Tech University</p>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              Empowering Ontario Tech students to learn, connect, and build with
              Google technologies.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`hover-glow w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.15 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" items={quickLinks} delay={0.2} />
          {/* Resources */}
          <FooterColumn title="Resources" items={resources} delay={0.4} />
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="text-lg font-bold mb-3">Stay Updated</h4>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-gdg-blue hover:bg-gdg-green rounded-r-lg text-white font-medium transition">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GDG On Campus Ontario Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Code of Conduct
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top */}
      {showTop && (
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-gdg-blue text-white p-3 rounded-full shadow-lg hover:bg-gdg-green transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

const FooterColumn = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
  >
    <h4 className="text-lg font-bold mb-6">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {item.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Footer;
