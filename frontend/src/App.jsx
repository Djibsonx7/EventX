import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          EventX
        </motion.h1>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl">
          Transform your audience into active participants with a premium live engagement platform designed for events, brands and conferences.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Quiz Battle Live',
            'Live Polls',
            'Word Cloud',
            'Spin & Win'
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-2">{item}</h2>
              <p className="text-gray-300">Interactive experience designed for live events.</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold">
            Create Session
          </button>
        </div>
      </div>
    </div>
  )
}
