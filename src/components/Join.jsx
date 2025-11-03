import { motion } from "framer-motion";

const Join = () => {
  const platforms = [
    {
      name: "Discord",
      description:
        "Join our Discord server for real-time discussions, announcements, and networking.",
      icon: "💬",
      color: "bg-indigo-500",
      link: "https://discord.gg/2dzmhaNr",
    },
    {
      name: "Instagram",
      description:
        "Follow us for event updates, behind-the-scenes content, and student spotlights.",
      icon: "📸",
      color: "bg-pink-500",
      link: "https://www.instagram.com/otu_gdg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "LinkedIn",
      description:
        "Connect with us professionally and stay updated with industry insights.",
      icon: "💼",
      color: "bg-blue-600",
      link: "https://www.linkedin.com/company/otu-gddon/posts/?feedView=all",
    },
    {
      name: "GitHub",
      description:
        "Explore our open-source projects and contribute to our codebase.",
      icon: "💻",
      color: "bg-gray-800",
      link: "https://github.com/OTU-GDG",
    },
  ];

  const benefits = [
    {
      icon: "🎓",
      title: "Free Learning Resources",
      description:
        "Access to Google Cloud credits, courses, and exclusive workshops",
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description:
        "Connect with peers, industry professionals, and potential employers",
    },
    {
      icon: "🚀",
      title: "Hands-on Projects",
      description:
        "Build real-world projects using cutting-edge Google technologies",
    },
    {
      icon: "🏆",
      title: "Certification Support",
      description:
        "Get help preparing for Google Cloud and other tech certifications",
    },
    {
      icon: "🎉",
      title: "Fun Events",
      description:
        "Hackathons, game nights, and social events throughout the year",
    },
    {
      icon: "💡",
      title: "Mentorship",
      description:
        "Get guidance from experienced developers and industry experts",
    },
  ];

  return (
    <section className="py-20 bg-gdg-dark relative overflow-hidden text-gray-30">
      {/* Background accents */}
      <div className="absolute -z-10 top-10 left-20 w-96 h-96 bg-gdg-blue/20 blur-3xl rounded-full mix-blend-screen animate-pulse" />
      <div className="absolute -z-10 bottom-0 right-20 w-80 h-80 bg-gdg-green/20 blur-3xl rounded-full mix-blend-screen animate-pulse" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gdg-blue via-gdg-yellow to-gdg-green mb-6">
            Join Our Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to take your tech journey to the next level? Join our vibrant
            community of students passionate about Google technologies.
          </p>
        </motion.div>

        {/* Benefits + Platforms */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Join GDG On Campus?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-[2px] rounded-2xl bg-gradient-to-r from-gdg-blue via-gdg-yellow to-gdg-green"
                >
                  <div className="bg-gdg-dark-surface p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gdg-dark-surface rounded-2xl p-8 shadow-lg border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl hover:-translate-y-1 hover:shadow-md hover:bg-gdg-dark transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-gdg-blue transition-colors duration-300">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- NEW SIGNUP SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Become a Member
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Fill out this short form to stay updated on upcoming GDG Ontario
            Tech events, workshops, and opportunities.
          </p>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gdg-blue">
            <iframe
              src="https://forms.gle/6UoXwiMZsDQs2eC47"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="GDG Ontario Tech Signup Form"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
        {/* --- END SIGNUP SECTION --- */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gdg-blue to-gdg-green rounded-2xl p-12 text-white shadow-lg">
            <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of Ontario Tech students who are already building
              amazing things with Google technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() =>
                  window.open("https://discord.gg/gdg-ontario-tech", "_blank")
                }
                className="bg-white text-gdg-blue px-8 py-4 rounded-xl font-medium hover:bg-gdg-off-white transition-all duration-300 transform hover:scale-105"
              >
                Join Discord Server
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://instagram.com/gdg_ontario_tech",
                    "_blank"
                  )
                }
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-gdg-blue transition-all duration-300 transform hover:scale-105"
              >
                Follow on Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;
