import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function PlayerWaitingRoomPage({
  sessionCode = 'EVX-4821',
  mode = 'Spin & Win',
  status = 'waiting',
  playersJoined = 24,
  readyPlayers = 18,
  sponsorEnabled = true,
  eventName = 'Innovation Summit Quiz',
  sponsorName = 'Edition Limitée',
  hostName = 'EventX Studio',
  theme,
  playerName = 'You',
  onBackClick,
  onReadyClick,
}) {
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
    <div className="min-h-screen bg-[#07101d] text-white">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-10">
        <button
          onClick={onBackClick}
          className="mb-6 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Player Waiting Room</div>
            <h1 className="text-3xl sm:text-4xl font-black mt-3 leading-tight">
              {isLive ? `${eventName} has started.` : `${playerName}, get ready for ${eventName}.`}
            </h1>
            <p className="mt-4 text-white/65 text-base sm:text-lg">
              {isLive
                ? `${hostName} has launched the experience. ${sponsorName} is now visible across the live moment.`
                : `Stay ready while ${hostName} brings everyone together for a polished live session powered by ${sponsorName}.`}
            </p>

            <div className="mt-6 rounded-[24px] bg-gradient-to-br from-[#171f39] to-[#0d1428] border border-white/10 p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">Session Code</div>
                  <div className="text-3xl sm:text-4xl font-black mt-3 tracking-[0.14em]">{sessionCode}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">{themeStyle.badge}</div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ['Mode', mode],
                  ['Status', isLive ? 'Live' : 'Waiting'],
                  ['Players', `${playersJoined} joined`],
                  ['Ready', `${readyPlayers}/${playersJoined}`],
                  ['Host', hostName],
                  ['Sponsor', sponsorName],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">{label}</div>
                    <div className="mt-2 text-sm sm:text-base font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              {!isLive && (
                <div className="mt-6">
                  <button
                    onClick={onReadyClick}
                    className="w-full px-6 py-4 rounded-2xl font-semibold shadow-[0_0_35px_rgba(124,58,237,0.35)]"
                    style={{
                      background: `linear-gradient(90deg, ${themeStyle.accentFrom}, ${themeStyle.accentTo})`,
                    }}
                  >
                    I’m Ready
                  </button>
                </div>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#11162a] to-[#091120] p-5 sm:p-6"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Audience Experience</div>
            <div className="mt-3 text-2xl sm:text-3xl font-black">{eventName}</div>
            <div className="mt-2 text-white/60">{mode}</div>

            <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0d1326] overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">Waiting Stage</div>
                  <div className="text-lg font-bold mt-1">Hosted by {hostName}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                  {sponsorEnabled ? sponsorName : 'Sponsor Off'}
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div
                  className="rounded-3xl min-h-[240px] border border-white/10 p-6 flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                      <div className="mt-3 text-xs uppercase tracking-[0.24em] text-white/55">Presented by {sponsorName}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">
                      {isLive ? 'Starting...' : themeStyle.badge}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black leading-tight">
                      {isLive
                        ? `${eventName} is launching. Get ready to play live.`
                        : `${eventName} is about to begin. Stay ready for the reveal.`}
                    </div>
                    <div className="mt-3 text-white/70 text-sm sm:text-base">
                      Sponsor media • Real-time ranking • Mobile-first participation • High-energy stage feel
                    </div>
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
