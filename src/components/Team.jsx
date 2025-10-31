import { motion } from "framer-motion";
import imgAlyesha from "../assets/Alyesha.jpg";
import imgMaryam from "../assets/IMG_20240321_180044_280 - Maryam Baz.jpg";
import imgMichael from "../assets/Michael.jpg";
import imgViet from "../assets/IMG_5999 - Viet Nguyen bao.jpeg";
import imgSanhith from "../assets/20250215_172136 - Sanhith Amarathunge.jpg";
import imgUmad from "../assets/IMG_1466 - Umad Akram.jpg";
import imgOwen from "../assets/Owen.jpg";
import imgHaseeb from "../assets/Haseeb.jpeg";
import imgAakanksha from "../assets/Aakanksha.jpg";
import imgDhruv from "../assets/IMG_1071 - Dhruv Thakar.jpeg";

const Team = () => {
  const presidentAndOneVp = [
    {
      id: 1,
      name: "Alyesha Singh",
      role: "President",
      image: imgAlyesha,
      bio: "I play 2 instruments and currently learning a third!",
      year: "4th Year",
      program: "Computer Science",
      color: "gdg-blue",
    },
    {
      id: 4,
      name: "Michael Ispahani",
      role: "Vice President",
      image: imgMichael,
      bio: "I spend more time on productivity apps than being productive 😅",
      year: "4th Year",
      program: "Computer Science",
      color: "gdg-red",
    },
  ];

  const vps = [
    {
      id: 2,
      name: "Dhruv Thakar",
      role: "VP of Events",
      image: imgDhruv,
      bio: "Pineapple should not be on pizza 🍕",
      year: "2nd Year",
      program: "Computer Science",
      color: "gdg-green",
    },
    {
      id: 3,
      name: "Maryam Baz",
      role: "VP of Communications",
      image: imgMaryam,
      bio: "I love exploring new ways to do old things, and nature walks!",
      year: "3rd Year",
      program: "Computer Science - Data Science",
      color: "gdg-yellow",
    },
  ];

  const technical = [
    {
      id: 5,
      name: "Viet Nguyen",
      role: "Technical Director",
      image: imgViet,
      bio: "Started coding to solve problems, now I just create them more efficiently 🤦‍♂️",
      year: "4th Year",
      program: "Software Engineering",
      color: "gdg-red",
    },
    {
      id: 6,
      name: "Sanhith Amarathunge",
      role: "Technical Director",
      image: imgSanhith,
      bio: "I love music 🎵",
      year: "4th Year",
      program: "Computer Science",
      color: "gdg-red",
    },
    {
      id: 7,
      name: "Umad Akram",
      role: "Technical Lead",
      image: imgUmad,
      bio: "I love music — my favorite artist is Playboi Carti 🎧",
      year: "3rd Year",
      program: "Computer Science",
      color: "gdg-red",
    },
    {
      id: 8,
      name: "Owen Chung",
      role: "Technical Lead",
      image: imgOwen,
      bio: "I like to involve myself with the Esports scene at Ontario Tech! Some of my favourite games are Street Fighter and Pokémon 🎮",
      year: "4th Year",
      program: "Computer Science",
      color: "gdg-red",
    },
  ];

  const marketing = [
    {
      id: 9,
      name: "Haseeb Khan",
      role: "Marketing Director",
      image: imgHaseeb,
      bio: "My favourite artist is The Weeknd 🎶",
      year: "2nd Year",
      program: "Software Engineering",
      color: "gdg-blue",
    },
    {
      id: 10,
      name: "Aakanksha Parekh",
      role: "Marketing Director",
      image: imgAakanksha,
      bio: "I love true crime, poetry, and bingeing The Office & Modern Family 📺",
      year: "4th Year",
      program: "Computer Science - Data Science Specialization",
      color: "gdg-blue",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      "gdg-blue": "bg-gdg-blue text-white",
      "gdg-green": "bg-gdg-green text-white",
      "gdg-yellow": "bg-gdg-yellow text-black",
      "gdg-red": "bg-gdg-red text-white",
    };
    return colors[color] || "bg-gray-500 text-white";
  };

  const Section = ({ title, members }) => (
    <div className="mb-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow"
      >
        {title}
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex justify-center flex-wrap gap-8"
      >
        {members.map((member) => (
          <motion.div
            key={member.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow p-[2px] w-[300px]"
          >
            <div className="bg-gdg-dark-surface rounded-2xl overflow-hidden h-full">
              <div className="relative group">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(
                    member.color
                  )}`}
                >
                  {member.role}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  {member.year} • {member.program}
                </p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gdg-blue via-gdg-green to-gdg-yellow">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our passionate student team is dedicated to growing the developer
            community at Ontario Tech.
          </p>
        </motion.div>

        {/* Centered President & VP */}
        <Section
          title="President & Vice President"
          members={presidentAndOneVp}
        />

        {/* Centered VPs */}
        <Section title="Vice Presidents" members={vps} />

        {/* Centered Technical Team */}
        <Section title="Technical Team" members={technical} />

        {/* Centered Marketing Team */}
        <Section title="Marketing Team" members={marketing} />

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gdg-blue to-gdg-green rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-xl mb-6 opacity-90">
              We're always looking for passionate students to help us grow our
              community.
            </p>
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gdg-blue px-8 py-4 rounded-xl font-medium hover:bg-gdg-off-white transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Apply to Join
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
