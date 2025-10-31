import { motion } from "framer-motion";
import { useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 100,
      title: "Job Search Package",
      date: "2025-11-06",
      time: "4:00 PM - 5:00 PM",
      location: "SHA 248",
      description:
        "Interactive workshop on resume, LinkedIn, GitHub projects, and LeetCode strategies. Join via Google Meet: meet.google.com/eeo-hist-qop",
      type: "Workshop",
      color: "gdg-blue",
    },
  ];

  const pastEvents = [
    {
      id: 201,
      title: "React Workshop (Hands-on Web Development)",
      date: "2025-01-28",
      time: "12:00 PM - 2:00 PM",
      location: "SHA 362",
      description:
        "Hands-on React workshop focused on core web development skills. Attendees were asked to have Node.js installed.",
      type: "Workshop",
      color: "gdg-blue",
    },
    {
      id: 202,
      title: "Cook Up Your Coding Skills: React + Express Recipe App",
      date: "2025-03-06",
      time: "3:30 PM - 5:00 PM",
      location: "SHA 358",
      description:
        "Learn to build a recipe app using React and Express.js. Prerequisite: Node.js installed.",
      type: "Workshop",
      color: "gdg-yellow",
    },
    {
      id: 203,
      title: "React Workshop Part 2 – Backend Development",
      date: "2025-03-27",
      time: "3:30 PM - 5:30 PM",
      location: "SHA 358",
      description:
        "Part 2 of our React series covering backend to complete the recipe app. Frontend code available on our public GitHub.",
      type: "Workshop",
      color: "gdg-green",
    },
    {
      id: 204,
      title: "Building a Portfolio",
      date: "2025-09-30",
      time: "4:00 PM - 5:30 PM",
      location: "SHA 361",
      description:
        "Gain tools and guidance to build a standout portfolio showcasing skills, projects, and personal brand.",
      type: "Workshop",
      color: "gdg-red",
    },
    {
      id: 101,
      title: "Web Development with Alpine.js (with Raymond Camden)",
      date: "2024-03-22",
      time: "5:00 PM - 6:00 PM",
      location: "Online",
      description:
        "Embark on a journey into Web Development with Alpine.js. Optimize your dev skills in an immersive session featuring special guest Raymond Camden.",
      type: "Workshop",
      color: "gdg-blue",
    },
    {
      id: 102,
      title: "Building with AI: Google Gemini",
      date: "2024-11-12",
      time: "3:30 PM - 4:30 PM",
      location: "SHA 131",
      description:
        "Dive into AI with Google Gemini. Learn sentiment analysis tools and how to turn data into insights.",
      type: "Talk",
      color: "gdg-green",
    },
    {
      id: 4,
      title: "Android Development Workshop",
      date: "2025-01-20",
      time: "6:00 PM - 8:00 PM",
      location: "Ontario Tech University - UA 1200",
      description:
        "Learn how to build Android apps using Kotlin and Android Studio.",
      type: "Workshop",
      color: "gdg-green",
    },
    {
      id: 5,
      title: "Google Cloud Study Jam",
      date: "2025-01-10",
      time: "10:00 AM - 4:00 PM",
      location: "Ontario Tech University - Library",
      description:
        "Intensive study session covering Google Cloud fundamentals and certification prep.",
      type: "Study Jam",
      color: "gdg-blue",
    },
    {
      id: 6,
      title: "GDG Meet & Greet",
      date: "2025-01-05",
      time: "5:00 PM - 7:00 PM",
      location: "Ontario Tech University - Student Centre",
      description:
        "Welcome back event for the winter semester with networking and pizza.",
      type: "Social",
      color: "gdg-red",
    },
  ];

  const potentialEvents = [
    {
      id: 301,
      title: "AI & Machine Learning Bootcamp",
      date: "TBD",
      time: "TBD",
      location: "SHA 200",
      description:
        "An intensive bootcamp on AI & ML fundamentals, tools, and applications. Stay tuned for registration details!",
      type: "Workshop",
      color: "gdg-yellow",
    },
    {
      id: 302,
      title: "Hackathon 101",
      date: "TBD",
      time: "TBD",
      location: "Online",
      description:
        "Learn the basics of hackathons, team collaboration, and building your first project.",
      type: "Hackathon",
      color: "gdg-blue",
    },
  ];

  const formatDate = (dateString) => {
    if (!dateString || dateString === "TBD") return "TBD";
    const parts = dateString.split("-").map(Number);
    if (parts.length !== 3) return "TBD";
    const [year, month, day] = parts;
    const date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) return "TBD";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getEventColor = (color) => {
    const colors = {
      "gdg-blue": "bg-gdg-blue",
      "gdg-green": "bg-gdg-green",
      "gdg-yellow": "bg-gdg-yellow",
      "gdg-red": "bg-gdg-red",
    };
    return colors[color] || "bg-gray-500";
  };

  const getEventTextColor = (color) => {
    const colors = {
      "gdg-blue": "text-gdg-blue",
      "gdg-green": "text-gdg-green",
      "gdg-yellow": "text-gdg-yellow",
      "gdg-red": "text-gdg-red",
    };
    return colors[color] || "text-gray-500";
  };

  return (
    <section className="py-20 bg-gdg-dark-bg text-gdg-dark-text">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gdg-blue">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for workshops, hackathons, study jams, and networking events
            designed to help you grow as a developer.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gdg-dark-surface rounded-2xl p-2 shadow-lg border border-white/10">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gdg-blue text-white shadow-lg"
                  : "text-gray-300 hover:text-gdg-blue"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("potential")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "potential"
                  ? "bg-gdg-blue text-white shadow-lg"
                  : "text-gray-300 hover:text-gdg-blue"
              }`}
            >
              Coming Soon
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-gdg-blue text-white shadow-lg"
                  : "text-gray-300 hover:text-gdg-blue"
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(activeTab === "upcoming"
            ? upcomingEvents
            : activeTab === "past"
            ? pastEvents
            : potentialEvents
          ).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gdg-dark-surface rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className={`h-2 ${getEventColor(event.color)}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getEventColor(
                      event.color
                    )} bg-opacity-20 ${getEventTextColor(event.color)}`}
                  >
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-400 font-mono">
                    {formatDate(event.date)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-gdg-blue">🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gdg-green">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <button
                  className={`w-full mt-6 py-3 rounded-xl font-medium transition-all duration-300 ${getEventColor(
                    event.color
                  )} text-white hover:opacity-90 transform hover:scale-105`}
                >
                  {activeTab === "upcoming"
                    ? "Register Now"
                    : activeTab === "past"
                    ? "View Details"
                    : "Stay Tuned"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gdg-dark-surface rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest events and announcements by joining
              our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gdg-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                Join Our Discord
              </button>
              <button className="bg-gdg-green hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                Follow on Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
