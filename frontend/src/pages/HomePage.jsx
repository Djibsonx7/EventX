import { motion } from 'framer-motion'

const modules = [
  'Quiz Battle Live',
  'Live Polls',
  'Word Cloud',
  'Spin & Win',
]

export default function HomePage({ onCreateClick, onJoinClick }) {
  return (
    <div className="min-h-screen bg-[#070816] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_35%),linear-gradient(180deg,#070816_0%,#0d1227_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-16">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-white/60">EventX</div>
            <h1 className="text-2xl font-bold mt-2">Live Audience Engagement Suite</h1>
          </div>
          <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur font-medium">
            Organizer Demo
          </button>
        </header>

        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black leading-[0.95]"
            >
              Turn your audience into the highlight of the event.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-white/70 max-w-2xl"
            >
              EventX helps brands, organizers, schools, and agencies run live interactive experiences that feel premium on stage and effortless on mobile.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={onCreateClick}
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] font-semibold shadow-[0_0_40px_rgba(124,58,237,0.35)]"
              >
                Create a Live Session
              </button>
              <button
                onClick={onJoinClick}
                className="px-7 py-4 rounded-2xl bg-white/8 border border-white/10 backdrop-blur font-semibold text-white/85"
              >
                Join with Code
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 shadow-2xl"
          >
            <div className="rounded-[26px] bg-[#0d1328] border border-white/10 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/45">Live Session</div>
                  <div className="text-lg font-bold mt-1">Brand Experience Night</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold border border-emerald-400/20">
                  Sponsor Ready
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-3xl bg-gradient-to-br from-[#3b0764] via-[#312e81] to-[#0f172a] min-h-[220px] p-6 flex flex-col justify-between border border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">Sponsored Round</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black leading-tight">How well do you know our partner brand?</div>
                    <div className="mt-3 text-white/70 text-sm">Players join via QR code • Rankings live on stage • Rewards powered by sponsors</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-24 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {modules.map((module, idx) => (
            <motion.div
              key={module}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              className="rounded-[28px] p-6 bg-white/[0.05] border border-white/10 backdrop-blur-lg"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7c3aed]/80 to-[#ec4899]/80 mb-6" />
              <h4 className="text-2xl font-bold">{module}</h4>
              <p className="mt-3 text-white/65">Interactive event format designed for live engagement.</p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  )
}
