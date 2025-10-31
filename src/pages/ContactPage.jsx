import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-20 pb-16 bg-gdg-dark-bg text-gdg-dark-text">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gdg-blue to-gdg-green mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">Have questions, want to partner, or need info about our events? Send us a message and we’ll get back to you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="name">Name</label>
                  <input id="name" type="text" className="w-full rounded-xl bg-gdg-black text-white border border-white/10 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gdg-blue" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="w-full rounded-xl bg-gdg-black text-white border border-white/10 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gdg-blue" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="subject">Subject</label>
                  <input id="subject" type="text" className="w-full rounded-xl bg-gdg-black text-white border border-white/10 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gdg-blue" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="message">Message</label>
                  <textarea id="message" rows="5" className="w-full rounded-xl bg-gdg-black text-white border border-white/10 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gdg-blue" placeholder="Write your message..." />
                </div>
                <button type="button" className="w-full bg-gdg-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">Send</button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">General</h3>
                <p className="text-gray-300">For general inquiries, partnerships, or sponsorships.</p>
                <div className="mt-3 text-gray-300">Email: <span className="text-white">gdg.ontariotech@example.com</span></div>
              </div>
              <div className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Socials</h3>
                <p className="text-gray-300">Join our community and stay updated.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {['Discord','Instagram','LinkedIn'].map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full bg-gdg-black text-gray-200 border border-white/10 text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gdg-dark-surface rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Ontario Tech University, Oshawa, Ontario</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage


