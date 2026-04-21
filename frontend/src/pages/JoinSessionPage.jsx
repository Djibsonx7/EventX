import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

export default function JoinSessionPage({
  sessionCode = 'EVX-4821',
  eventName = 'Innovation Summit Quiz',
  mode = 'Quiz Battle Live',
  status = 'waiting',
  sponsorName = 'Edition Limitée',
  hostName = 'EventX Studio',
  theme,
  onBackClick,
  onJoin,
}) {
  const [inputCode, setInputCode] = useState(sessionCode)
  const isLive = status === 'live'

  const themeStyle = useMemo(
    () => ({
      accentFrom: theme?.accentFrom || '#7c3aed',
      accentTo: theme?.accentTo || '#ec4899',
      heroFrom: theme?.heroFrom || '#2a0c55',
      heroVia: theme?.heroVia || '#2d1e7f',
      heroTo: theme?.heroTo || '#0f172a',
      badge: theme?.badge || 'Premium Glow',
    }),
    [theme]
  )

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
            <h1 className="text-4xl md:text-5xl font-black mt-3">Join {eventName} in seconds.</h1>
            <p className="mt-4 text-white/65 text-lg max-w-xl">
              Enter the session code, scan the QR, and jump into a branded live audience experience.
            </p>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
                <div>
                  <div className="text-sm text-white/45 uppercase tracking-[0.25em]">Session</div>
                  <div className="mt-2 text-2xl font-black">{eventName}</div>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: isLive ? 'rgba(236,72,153,0.35)' : 'rgba(34,197,94,0.28)',
                    background: isLive ? 'rgba(236,72,153,0.12)' : 'rgba(34,197,94,0.12)',
                    color: isLive ? '#fbcfe8' : '#bbf7d0',
                  }}
                >
                  {isLive ? 'Live Now' : 'Open for Join'}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  ['Mode', mode],
                  ['Host', hostName],
                  ['Sponsor', sponsorName],
                  ['Theme', themeStyle.badge],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#0a1324] border border-white/10 px-4 py-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">{label}</div>
                    <div className="mt-2 text-sm font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <label className="block text-sm text-white/55 mb-3">Session Code</label>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="EX: EVX-4821"
                className="w-full rounded-2xl bg-[#0a1324] border border-white/10 px-5 py-4 text-xl tracking-[0.25em] uppercase outline-none"
              />
              <button
                onClick={() => onJoin?.(inputCode)}
                className="mt-5 w-full px-6 py-4 rounded-2xl font-semibold shadow-[0_0_35px_rgba(124,58,237,0.3)]"
                style={{
                  background: `linear-gradient(90deg, ${themeStyle.accentFrom}, ${themeStyle.accentTo})`,
                }}
              >
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
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Live Event Preview</div>
            <div className="mt-3 text-3xl font-black">{eventName}</div>
            <div className="mt-2 text-white/60">Hosted by {hostName}</div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0d1326] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-white/45 uppercase tracking-[0.25em]">Experience Mode</div>
                  <div className="mt-2 text-xl font-bold">{mode}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">{themeStyle.badge}</div>
              </div>

              <div
                className="mt-6 rounded-3xl min-h-[220px] border border-white/10 p-6 flex flex-col justify-between"
                style={{
                  background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                    <div className="mt-3 text-xs uppercase tracking-[0.24em] text-white/55">Presented by {sponsorName}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">Join by Code</div>
                </div>
                <div>
                  <div className="text-3xl font-black leading-tight">Ready to join the audience and feel the energy live?</div>
                  <div className="mt-3 text-white/70 text-sm">Fast access • Mobile-first UX • Sponsor visibility • Live leaderboard energy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
