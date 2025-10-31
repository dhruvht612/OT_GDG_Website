import { motion } from 'framer-motion'
import Team from '../components/Team'

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20">
        <Team />
      </div>
    </motion.div>
  )
}

export default TeamPage

