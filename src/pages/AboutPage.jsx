import { motion } from 'framer-motion'
import About from '../components/About'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20">
        <About />

        {/* Extra: Fast Facts / Metrics */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ label: 'Active Members', value: '150+' },
              { label: 'Workshops / Year', value: '20+' },
              { label: 'Hackathons Hosted', value: '3+' },
              { label: 'Industry Mentors', value: '15+' }].map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-black rounded-2xl p-6 text-center border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-extrabold text-gdg-blue mb-1">{item.value}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-white mb-8">What We Offer</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[{ title: 'Hands-on Workshops',
                  desc: 'Deep-dives into Firebase, Cloud, Android, Web, and ML with guided labs.'
                }, {
                  title: 'Project Incubation',
                  desc: 'Form teams, get mentorship, and ship portfolio-ready projects across tracks.'
                }, {
                  title: 'Career Readiness',
                  desc: 'Mock interviews, resume reviews, and recruiter sessions with tech partners.'
                }].map((c, i) => (
                <motion.div
                  key={c.title}
                  className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{c.title}</h4>
                  <p className="text-gray-300">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs & Tracks */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-100 mb-8">Programs & Tracks</h3>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                {[ 'Web (React, Next.js)', 'Mobile (Android, Flutter)', 'Cloud (GCP, Firebase)', 'AI/ML (TensorFlow, Vertex AI)'].map((t) => (
                  <div key={t} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gdg-blue mt-2"></div>
                    <p className="text-gray-300">{t}</p>
                  </div>
                ))}
              </div>
              <div className="bg-black rounded-2xl p-6 border border-gray-800">
                <h4 className="text-lg font-semibold text-gray-100 mb-2">Semester Flow</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Kickoff + onboarding</li>
                  <li>Weekly workshops and labs</li>
                  <li>Mid-term project showcase</li>
                  <li>End-of-term demo day</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['Firebase', 'GCP', 'Android', 'Flutter', 'React', 'Next.js', 'Node.js', 'TensorFlow', 'Vertex AI'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-black text-gray-300 border border-gray-800 text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-white mb-8">How to Join</h3>
            <ol className="grid md:grid-cols-3 gap-6">
              {[ 'Follow our socials and join the Discord', 'Attend a kickoff or weekly workshop', 'Join a track and start building' ].map((step, i) => (
                <li key={step} className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10">
                  <div className="text-gdg-blue font-extrabold text-2xl mb-2">0{i+1}</div>
                  <p className="text-gray-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">FAQs</h3>
            <div className="space-y-4">
              {[{ q: 'Do I need prior experience?', a: 'No. We welcome beginners and provide step-by-step sessions.' },
                { q: 'Is there any membership fee?', a: 'No. Participation is free for students.' },
                { q: 'How often are events?', a: 'Typically weekly workshops, plus special events and hackathons.' }].map((f) => (
                <div key={f.q} className="border border-gray-800 rounded-2xl p-5">
                  <div className="font-semibold text-gray-100 mb-1">{f.q}</div>
                  <div className="text-gray-300">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conduct & Contact */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-black rounded-2xl p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Code of Conduct</h4>
              <p className="text-gray-300">We foster a welcoming, inclusive, and harassment-free experience for everyone. By participating, you agree to uphold respectful collaboration and professional behavior at all events and spaces.</p>
            </div>
            <div className="bg-black rounded-2xl p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-gray-100 mb-2">Contact</h4>
              <p className="text-gray-300">Questions or partnership inquiries? Reach out to the GDG On Campus leadership team via our Discord or email. Links available on the Join page.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default AboutPage


