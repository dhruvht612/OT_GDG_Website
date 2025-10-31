import { motion } from 'framer-motion'
import Events from '../components/Events'

const EventsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20">
        <Events />
      </div>
    </motion.div>
  )
}

export default EventsPage

