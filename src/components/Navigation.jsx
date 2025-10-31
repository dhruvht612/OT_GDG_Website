import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Join", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gdg-dark-surface shadow-lg backdrop-blur-md bg-opacity-95"
          : "bg-gdg-dark-surface bg-opacity-90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gdg-blue rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div className="w-10 h-10 bg-gdg-green rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <div className="w-10 h-10 bg-gdg-yellow rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">GDG On Campus</h1>
                <p className="text-sm text-gray-300">Ontario Tech</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-gdg-blue"
                      : "text-gray-200 hover:text-gdg-blue"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}

            {/* Search Button */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-200 hover:text-gdg-blue transition"
              >
                <Search className="w-5 h-5" />
              </button>
              {searchOpen && (
                <motion.input
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 200 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  className="absolute right-0 top-8 bg-gdg-dark-surface border border-gray-700 rounded-xl px-3 py-2 text-gray-200 w-48 focus:outline-none focus:border-gdg-blue"
                />
              )}
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-gray-200 hover:text-gdg-blue transition">
                {language}
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute right-0 mt-2 bg-gdg-dark-surface border border-gray-700 rounded-lg shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <button
                  onClick={() => setLanguage("EN")}
                  className="block w-full px-4 py-2 text-left hover:bg-gdg-black text-gray-200"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("FR")}
                  className="block w-full px-4 py-2 text-left hover:bg-gdg-black text-gray-200"
                >
                  FR
                </button>
              </div>
            </div>

            {/* Join Button */}
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gdg-blue hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                } text-white`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                } text-white`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                } text-white`}
              ></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-gdg-dark-surface rounded-2xl mt-2 shadow-lg">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`block w-full text-left px-6 py-3 transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-gdg-blue bg-gdg-black"
                      : "text-gray-200 hover:bg-gdg-black hover:text-gdg-blue"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}

            {/* Search in Mobile */}
            <div className="px-6">
              <div className="flex items-center bg-gdg-black rounded-xl border border-gray-700 px-3 py-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-gray-200 ml-2 w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Language Switcher */}
            <div className="px-6">
              <div className="flex justify-between items-center text-gray-300">
                <span>Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-gdg-black border border-gray-700 rounded-lg px-2 py-1 text-gray-200"
                >
                  <option value="EN">EN</option>
                  <option value="FR">FR</option>
                </select>
              </div>
            </div>

            <div className="px-6 pt-4 border-t border-gray-200">
              <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-gdg-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
