import { motion } from 'framer-motion'

const mockPlayers = [
  { name: 'Awa', score: 120 },
  { name: 'Moussa', score: 105 },
  { name: 'Fatou', score: 96 },
  { name: 'Ibra', score: 88 },
]

export default function LiveSessionPage({
  sessionCode = 'EVX-4821',
  mode = 'Quiz Battle Live',
  status = 'waiting',
  playersJoined = 24,
  readyPlayers = 18,
  sponsorEnabled = true,
  eventName = 'Innovation Summit Quiz',
  currentRound = 1,
  onBackClick,
  onStartExperience,
}) {
  const isLive = status === 'live'
  const statusBadge = isLive ? 'Experience Live' : 'Waiting Room Active'
  const statusTone = isLive
    ? 'bg-fuchsia-500/15 border-fuchsia-400/20 text-fuchsia-200'
    : 'bg-emerald-500/15 border-emerald-400/20 text-emerald-300'

  return (
    <div className="min-h-screen bg-[#07101d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
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
              {isLive ? 'The audience experience is now live.' : 'Session ready to go live.'}
            </h1>
            <p className="mt-4 text-white/65 text-lg max-w-2xl">
              {isLive
                ? 'Players are now inside the experience. Use this view as the host command center.'
                : 'Share the session code, let participants join, and launch the experience when the room is ready.'}
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

              <div className="mt-8 grid md:grid-cols-4 gap-4">
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

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={onStartExperience}
                  disabled={isLive}
                  className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] font-semibold shadow-[0_0_35px_rgba(124,58,237,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLive ? 'Experience Running' : 'Start Experience'}
                </button>
                <button className="px-6 py-4 rounded-2xl bg-white/8 border border-white/10 font-semibold text-white/80">
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
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {isLive ? 'Now Playing' : 'Now Joining'}
                  </div>
                  <div className="text-lg font-bold mt-1">{mode}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
                  {sponsorEnabled ? 'Sponsor On' : 'Sponsor Off'}
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-3xl min-h-[220px] bg-gradient-to-br from-[#34116a] via-[#35207f] to-[#111a31] border border-white/10 p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-white/15 border border-white/20" />
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">
                      {isLive ? 'Live Round' : 'Waiting Countdown'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black leading-tight">
                      {isLive
                        ? 'The host has launched the experience. Players are now answering live.'
                        : 'Join now and be ready when the host launches the session.'}
                    </div>
                    <div className="mt-3 text-white/70 text-sm">
                      Live room • Sponsor visibility • Mobile-first participation • Premium event feel
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-sm font-semibold mb-3">Mock leaderboard</div>
                  <div className="space-y-3">
                    {mockPlayers.map((player, index) => (
                      <div key={player.name} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">{index + 1}</div>
                          <div className="font-medium">{player.name}</div>
                        </div>
                        <div className="text-white/70 text-sm">{player.score} pts</div>
                      </div>
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
