import { motion } from 'framer-motion'

export default function JoinSessionPage({ onBackClick }) {
  return (
    <div className="min-h-screen bg-[#08101f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <button
          onClick={onBackClick}
          className="mb-8 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Player Entry</div>
            <h1 className="text-4xl md:text-5xl font-black mt-3">Join a live session in seconds.</h1>
            <p className="mt-4 text-white/65 text-lg max-w-xl">
              Enter the session code, scan the QR, and jump straight into the experience.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
              <label className="block text-sm text-white/55 mb-3">Session Code</label>
              <input
                type="text"
                placeholder="EX: EVTX26"
                className="w-full rounded-2xl bg-[#0a1324] border border-white/10 px-5 py-4 text-xl tracking-[0.25em] uppercase outline-none"
              />
              <button className="mt-5 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] font-semibold shadow-[0_0_35px_rgba(124,58,237,0.3)]">
                Join Session
              </button>
              <div className="mt-4 text-center text-white/45 text-sm">or scan a QR code on the event screen</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#11162a] to-[#091120] p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Example Session</div>
            <div className="mt-3 text-3xl font-black">Innovation Summit Quiz</div>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0d1326] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/45 uppercase tracking-[0.25em]">Live now</div>
                  <div className="mt-2 text-xl font-bold">Sponsored Audience Challenge</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 text-xs font-semibold">
                  Open
                </div>
              </div>

              <div className="mt-6 rounded-3xl min-h-[220px] bg-gradient-to-br from-[#31135f] via-[#3d1f7a] to-[#121b35] border border-white/10 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                  <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">Join by Code</div>
                </div>
                <div>
                  <div className="text-3xl font-black leading-tight">Ready to compete live with the audience?</div>
                  <div className="mt-3 text-white/70 text-sm">Fast access • Mobile first • Live ranking • Reward moments</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
