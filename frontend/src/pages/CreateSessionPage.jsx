import { motion } from 'framer-motion'

const gameModes = [
  {
    title: 'Quiz Battle Live',
    subtitle: 'Competitive live quiz format',
  },
  {
    title: 'Live Polls',
    subtitle: 'Instant audience voting',
  },
  {
    title: 'Word Cloud',
    subtitle: 'Capture reactions and ideas',
  },
  {
    title: 'Spin & Win',
    subtitle: 'Sponsor-friendly reward moment',
  },
]

export default function CreateSessionPage() {
  return (
    <div className="min-h-screen bg-[#08101f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/45">Organizer Studio</div>
          <h1 className="text-4xl md:text-5xl font-black mt-3">Create an unforgettable live session.</h1>
          <p className="mt-4 max-w-2xl text-white/65 text-lg">
            Choose a format, shape the audience experience, and make sponsors part of the show.
          </p>
        </div>

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Select a format</h2>
              <div className="text-sm text-white/45">Step 1 / 3</div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {gameModes.map((mode, idx) => (
                <motion.div
                  key={mode.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-[24px] p-5 border ${idx === 0 ? 'border-fuchsia-400/40 bg-gradient-to-br from-[#22103a] to-[#121b35]' : 'border-white/10 bg-white/[0.03]'}`}
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#ec4899] mb-5" />
                  <div className="text-xl font-bold">{mode.title}</div>
                  <div className="text-white/60 mt-2">{mode.subtitle}</div>
                  <button className="mt-5 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold">
                    Select
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#11162a] to-[#0a1121] p-6 shadow-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Live Preview</div>
            <div className="mt-3 text-2xl font-bold">Quiz Battle Live</div>
            <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0b1326] overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">Session Theme</div>
                  <div className="text-lg font-bold mt-1">Innovation Summit 2026</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">Sponsored</div>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-3xl bg-gradient-to-br from-[#2a0c55] via-[#2d1e7f] to-[#0f172a] min-h-[210px] border border-white/10 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="h-11 w-11 rounded-full bg-white/15 border border-white/20" />
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">Sponsor Media</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black leading-tight">Which team will dominate the leaderboard?</div>
                    <div className="mt-3 text-white/65 text-sm">Fast join • Branded transitions • Ranking excitement • Reward finale</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['Logo sponsor', 'Countdown lobby', 'Live rankings', 'Reward scene'].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4 text-sm text-white/75 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
