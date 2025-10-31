import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-24 bg-black text-gray-300 overflow-hidden">
      {/* Solid Black Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow bg-clip-text text-transparent">
              GDG on Campus
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering Ontario Tech students to learn, connect, and build with
            Google technologies.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              What is Google Developer Groups on Campus?
            </h3>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              GDG on Campus is a student-led developer community that fosters
              innovation, collaboration, and learning through Google
              technologies.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Whether you're new to programming or already an experienced
              developer, our community welcomes all who are curious and
              passionate about tech.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { text: "Machine Learning", color: "gdg-blue" },
                { text: "Cloud Computing", color: "gdg-green" },
                { text: "Mobile Development", color: "gdg-yellow" },
                { text: "Web Development", color: "gdg-red" },
              ].map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-${tag.color}/10 text-${tag.color} border border-${tag.color}/40 transition-all duration-300`}
                >
                  {tag.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-black border border-gray-800 p-8 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(66,133,244,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                Ontario Tech University
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Located in Oshawa, Ontario, Ontario Tech University is a hub for
                innovation and technology. Our GDG chapter brings together
                students from all disciplines to collaborate, learn, and grow.
              </p>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Hands-on coding workshops",
                  "Networking with industry experts",
                  "Access to Google Cloud credits",
                  "Collaborative project opportunities",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gdg-green rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-100 mb-12">
            Our Mission
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                emoji: "🎓",
                color: "gdg-blue",
                title: "Learn",
                text: "Develop technical skills through workshops and projects powered by Google.",
              },
              {
                emoji: "🤝",
                color: "gdg-green",
                title: "Connect",
                text: "Meet other passionate students, mentors, and industry professionals.",
              },
              {
                emoji: "🚀",
                color: "gdg-yellow",
                title: "Build",
                text: "Turn your innovative ideas into real-world impact through teamwork.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  boxShadow: "0 0 20px rgba(255,255,255,0.05)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-${item.color}/10 text-${item.color} text-3xl`}
                >
                  {item.emoji}
                </div>
                <h4 className="text-xl font-semibold text-gray-100 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
