import { motion } from 'framer-motion'
import { useMemo, useEffect, useState } from 'react'

const mockPlayers = [
  { name: 'Awa', score: 120, avatar: 'A', badge: 'Fastest' },
  { name: 'Moussa', score: 105, avatar: 'M', badge: 'Sharp' },
  { name: 'Fatou', score: 96, avatar: 'F', badge: 'Clutch' },
  { name: 'Ibra', score: 88, avatar: 'I', badge: 'Rising' },
]

export default function LiveSessionPage({
  sessionCode = 'EVX-4821',
  mode = 'Quiz Battle Live',
  status = 'waiting',
  playersJoined = 24,
  readyPlayers = 18,
  sponsorEnabled = true,
  eventName = 'Innovation Summit Quiz',
  sponsorName = 'Edition Limitée',
  hostName = 'EventX Studio',
  theme,
  currentRound = 1,
  onBackClick,
  onStartExperience,
  onDisplayShowScreen,
}) {
  const isLive = status === 'live'
  const [countdown, setCountdown] = useState(12)

  useEffect(() => {
    if (!isLive) return
    const interval = window.setInterval(() => {
      setCountdown((current) => (current <= 1 ? 12 : current - 1))
    }, 1000)
    return () => window.clearInterval(interval)
  }, [isLive])

  const statusBadge = isLive ? 'Experience Live' : 'Waiting Room Active'
  const statusTone = isLive
    ? 'bg-fuchsia-500/15 border-fuchsia-400/20 text-fuchsia-200'
    : 'bg-emerald-500/15 border-emerald-400/20 text-emerald-300'

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

  const livePulseStyle = {
    background: `radial-gradient(circle at top, ${themeStyle.accentTo}22, transparent 45%)`,
  }

  return (
    <div className="min-h-screen bg-[#07101d] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={livePulseStyle} />
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <button
          onClick={onBackClick}
          className="mb-6 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
        >
          ← Back
        </button>

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Live Control Room</div>
            <h1 className="text-4xl md:text-5xl font-black mt-3">
              {isLive ? `${eventName} is now live.` : `${eventName} is ready to go live.`}
            </h1>
            <p className="mt-4 text-white/65 text-lg max-w-2xl">
              {isLive
                ? `${hostName} is driving the live moment while ${sponsorName} stays visible across the experience.`
                : `Share the session code, let participants join, and launch a branded audience experience when the room is ready.`}
            </p>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-gradient-to-br from-[#151d34] to-[#0a1221] p-6 shadow-2xl">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">Session Code</div>
                  <div className="text-4xl md:text-5xl font-black mt-3 tracking-[0.15em]">{sessionCode}</div>
                  <div className="mt-3 text-white/45 text-sm uppercase tracking-[0.22em]">{eventName}</div>
                </div>
                <div className={`px-4 py-2 rounded-full border text-sm font-semibold ${statusTone}`}>
                  {statusBadge}
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                {[
                  ['Host', hostName],
                  ['Sponsor', sponsorName],
                  ['Theme', themeStyle.badge],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</div>
                    <div className="mt-2 text-lg font-bold">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid md:grid-cols-4 gap-4">
                {[
                  ['Mode', mode],
                  ['Participants', `${playersJoined} joined`],
                  ['Ready', `${readyPlayers}/${playersJoined}`],
                  ['Round', `${currentRound}`],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4">
                    <div className="text-xs uppercase tracking-[0.25em] text-white/40">{label}</div>
                    <div className="mt-2 text-lg font-bold">{value}</div>
                  </div>
                ))}
              </div>

              {isLive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 px-5 py-4 flex items-center justify-between gap-4 flex-wrap"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-fuchsia-200/70">Live Moment</div>
                    <div className="mt-2 text-lg font-bold">Question reveal in progress • Audience reacting now</div>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-fuchsia-300/30 flex items-center justify-center text-xl font-black text-fuchsia-100">
                    {countdown}
                  </div>
                </motion.div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={onStartExperience}
                  disabled={isLive}
                  className="px-6 py-4 rounded-2xl font-semibold shadow-[0_0_35px_rgba(124,58,237,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(90deg, ${themeStyle.accentFrom}, ${themeStyle.accentTo})`,
                  }}
                >
                  {isLive ? 'Experience Running' : 'Start Experience'}
                </button>
                <button
                  onClick={onDisplayShowScreen}
                  className="px-6 py-4 rounded-2xl bg-white/8 border border-white/10 font-semibold text-white/80"
                >
                  Display QR Screen
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Live Preview</div>
            <div className="mt-3 text-2xl font-bold">Audience View</div>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0b1326] overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {isLive ? 'Now Playing' : 'Now Joining'}
                  </div>
                  <div className="text-lg font-bold mt-1">{mode}</div>
                  <div className="text-white/50 text-sm mt-1">{eventName}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                  {sponsorEnabled ? sponsorName : 'Sponsor Off'}
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div
                  className="rounded-3xl min-h-[220px] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})`,
                  }}
                >
                  {isLive && (
                    <motion.div
                      initial={{ opacity: 0.2, scale: 0.96 }}
                      animate={{ opacity: 0.45, scale: 1.04 }}
                      transition={{ repeat: Infinity, duration: 1.2, repeatType: 'reverse' }}
                      className="absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl"
                      style={{ background: `${themeStyle.accentTo}55` }}
                    />
                  )}
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div>
                      <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                      <div className="mt-3 text-xs uppercase tracking-[0.24em] text-white/55">Hosted by {hostName}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">
                      {isLive ? 'Live Round' : themeStyle.badge}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl font-black leading-tight">
                      {isLive
                        ? `${sponsorName} is live on screen while players answer in real time.`
                        : `Join ${eventName} now and get ready for a polished live audience experience.`}
                    </div>
                    <div className="mt-3 text-white/70 text-sm">
                      Sponsor visibility • Mobile-first participation • Premium event feel • Stage-ready visuals
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-sm font-semibold mb-3">Live leaderboard</div>
                  <div className="space-y-3">
                    {mockPlayers.map((player, index) => (
                      <motion.div
                        key={player.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">{index + 1}</div>
                          <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.08] flex items-center justify-center text-sm font-bold">{player.avatar}</div>
                          <div>
                            <div className="font-medium">{player.name}</div>
                            <div className="text-xs text-white/45 uppercase tracking-[0.18em]">{player.badge}</div>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm">{player.score} pts</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
