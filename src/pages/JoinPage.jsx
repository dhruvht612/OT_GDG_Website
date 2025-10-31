import { motion } from 'framer-motion'
import Join from '../components/Join'

const JoinPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pt-20">
        <Join />
      </div>
    </motion.div>
  )
}

export default JoinPage

