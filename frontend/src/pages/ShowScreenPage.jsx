import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const stageMoments = [
  { key: 'lobby', label: 'Lobby' },
  { key: 'countdown', label: 'Countdown' },
  { key: 'question', label: 'Question' },
  { key: 'reveal', label: 'Reveal' },
  { key: 'leaderboard', label: 'Leaderboard' },
  { key: 'finale', label: 'Finale' },
]

const avatarCloud = [
  { name: 'Awa', avatar: 'A', x: '12%', y: '28%' },
  { name: 'Moussa', avatar: 'M', x: '28%', y: '60%' },
  { name: 'Fatou', avatar: 'F', x: '49%', y: '30%' },
  { name: 'Ibra', avatar: 'I', x: '68%', y: '56%' },
  { name: 'Ndeye', avatar: 'N', x: '82%', y: '34%' },
  { name: 'Lamine', avatar: 'L', x: '60%', y: '76%' },
]

const leaderboardPlayers = [
  { name: 'Awa', avatar: 'A', score: 1250, badge: 'Fastest' },
  { name: 'Moussa', avatar: 'M', score: 1180, badge: 'Sharp' },
  { name: 'Fatou', avatar: 'F', score: 1105, badge: 'Clutch' },
  { name: 'Ibra', avatar: 'I', score: 1042, badge: 'Rising' },
]

function ShowHeader({ eventName, sponsorName, currentRound, themeStyle }) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-6 py-5">
      <div>
        <div className="text-xs uppercase tracking-[0.28em] text-white/45">EventX Stage Screen</div>
        <div className="mt-2 text-3xl md:text-4xl font-black">{eventName}</div>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm font-semibold">
          Round {currentRound}
        </div>
        <div
          className="px-4 py-2 rounded-full text-sm font-semibold shadow-[0_0_30px_rgba(124,58,237,0.18)]"
          style={{
            background: `linear-gradient(90deg, ${themeStyle.accentFrom}25, ${themeStyle.accentTo}25)`,
            border: `1px solid ${themeStyle.accentTo}35`,
          }}
        >
          Sponsored by {sponsorName}
        </div>
      </div>
    </div>
  )
}

function ShowLobbyStage({ sessionCode, playersJoined, readyPlayers, sponsorName, themeStyle }) {
  return (
    <div className="grid xl:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
      <div
        className="rounded-[34px] border border-white/10 min-h-[520px] p-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})` }}
      >
        <motion.div
          className="absolute -top-12 -right-12 h-56 w-56 rounded-full blur-3xl"
          style={{ background: `${themeStyle.accentTo}40` }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.42, 0.25] }}
          transition={{ repeat: Infinity, duration: 3.2 }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/55">Join the Experience</div>
              <div className="mt-3 text-5xl md:text-6xl font-black tracking-[0.16em]">{sessionCode}</div>
            </div>
            <div className="px-4 py-2 rounded-full bg-black/25 border border-white/10 text-sm font-semibold">
              Warm-up Stage
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-black/20 border border-white/10 px-5 py-5">
              <div className="text-xs uppercase tracking-[0.22em] text-white/45">Scan to Join</div>
              <div className="mt-4 h-48 w-48 rounded-[28px] bg-white text-black grid place-items-center text-center font-black text-xl mx-auto shadow-2xl">
                QR
              </div>
              <div className="mt-4 text-center text-white/70 text-sm">Scan with your phone and enter the live session instantly.</div>
            </div>

            <div className="rounded-3xl bg-white/[0.06] border border-white/10 px-5 py-5 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">Live Message</div>
                <div className="mt-4 text-3xl font-black leading-tight">The audience is joining now. Get ready for a premium live battle.</div>
                <div className="mt-4 text-white/70 text-base">Avatars are entering • Sponsor presence is live • Countdown is coming next</div>
              </div>
              <div className="mt-6 px-4 py-3 rounded-2xl bg-black/25 border border-white/10 text-sm font-semibold text-white/85">
                Presented by {sponsorName}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 min-h-[520px] relative overflow-hidden">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Audience Energy</div>
            <div className="mt-2 text-2xl font-black">Players entering the stage</div>
          </div>
          <div className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm font-semibold">
            {playersJoined} joined • {readyPlayers} ready
          </div>
        </div>

        <div className="mt-6 relative min-h-[360px] rounded-[30px] border border-white/10 bg-[#0a1223] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),_transparent_40%)]" />
          {avatarCloud.map((player, index) => (
            <motion.div
              key={player.name}
              className="absolute"
              style={{ left: player.x, top: player.y }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [1, 1.06, 1], y: [0, -6, 0] }}
              transition={{ delay: index * 0.12, repeat: Infinity, duration: 3 + index * 0.2 }}
            >
              <div className="h-16 w-16 rounded-full border border-white/10 bg-white/[0.08] backdrop-blur flex items-center justify-center text-xl font-black shadow-[0_0_30px_rgba(124,58,237,0.18)]">
                {player.avatar}
              </div>
              <div className="mt-2 text-center text-sm text-white/80 font-medium">{player.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShowCountdownStage({ themeStyle }) {
  return (
    <div
      className="rounded-[36px] border border-white/10 min-h-[540px] p-10 relative overflow-hidden flex flex-col justify-center items-center text-center"
      style={{ background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})` }}
    >
      <motion.div
        className="absolute h-80 w-80 rounded-full blur-3xl"
        style={{ background: `${themeStyle.accentTo}55` }}
        animate={{ scale: [0.92, 1.1, 0.92], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      />
      <div className="relative z-10">
        <div className="text-xs uppercase tracking-[0.28em] text-white/50">Launch Sequence</div>
        <div className="mt-5 text-8xl md:text-[11rem] font-black leading-none">03</div>
        <div className="mt-5 text-4xl md:text-5xl font-black">The live battle starts now.</div>
        <div className="mt-4 text-white/75 text-lg max-w-2xl">Lights up • Audience ready • Phones in hand • Stage about to ignite</div>
      </div>
    </div>
  )
}

function ShowQuestionStage({ mode }) {
  return (
    <div className="grid xl:grid-cols-[1.12fr_0.88fr] gap-6 items-stretch">
      <div className="rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-xl min-h-[520px] p-8 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/45">Question Live</div>
          <div className="mt-4 text-5xl md:text-6xl font-black leading-[1.02]">Which activation goal matters most for a live brand experience?</div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {['Audience engagement', 'Decor only', 'Long speeches', 'Silent participation'].map((answer, index) => (
            <div key={answer} className={`rounded-3xl border px-5 py-5 text-xl font-semibold ${index === 0 ? 'bg-white/[0.12] border-fuchsia-400/20' : 'bg-white/[0.04] border-white/10'}`}>
              {answer}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-[#111629] to-[#091120] min-h-[520px] p-6 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Stage Status</div>
          <div className="mt-3 text-2xl font-black">{mode} • Round in progress</div>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-black/20 p-8 text-center">
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">Time Remaining</div>
          <div className="mt-4 text-7xl font-black">12</div>
          <div className="mt-3 text-white/65">Players answer on mobile while the crowd follows on screen.</div>
        </div>
        <div className="rounded-3xl bg-white/[0.05] border border-white/10 px-5 py-5 text-base text-white/75">
          Answer using your phone • Rankings update after reveal • Sponsor visibility stays live throughout the round
        </div>
      </div>
    </div>
  )
}

function ShowRevealStage({ themeStyle }) {
  return (
    <div
      className="rounded-[36px] border border-white/10 min-h-[540px] p-10 relative overflow-hidden flex flex-col justify-center"
      style={{ background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})` }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        style={{ background: `radial-gradient(circle at center, ${themeStyle.accentFrom}28, transparent 45%)` }}
      />
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="text-xs uppercase tracking-[0.28em] text-white/50">Answers Locked</div>
        <div className="mt-5 text-4xl md:text-5xl font-black">And the correct answer is…</div>
        <motion.div
          initial={{ scale: 0.92, opacity: 0.65 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2.1 }}
          className="mt-10 rounded-[34px] border border-emerald-300/20 bg-emerald-500/12 px-8 py-10"
        >
          <div className="text-5xl md:text-6xl font-black text-emerald-200">Audience engagement</div>
          <div className="mt-4 text-white/75 text-lg">Fastest responders are highlighted now • Stage lights react • The leaderboard is updating next</div>
        </motion.div>
      </div>
    </div>
  )
}

function ShowLeaderboardStage() {
  return (
    <div className="rounded-[36px] border border-white/10 bg-white/[0.05] backdrop-blur-xl min-h-[540px] p-8">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/45">Leaderboard</div>
          <div className="mt-3 text-4xl md:text-5xl font-black">Top players on stage</div>
        </div>
        <div className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm font-semibold">Ranks updated live</div>
      </div>

      <div className="mt-8 grid gap-4">
        {leaderboardPlayers.map((player, index) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-[#0b1223] px-6 py-5 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xl font-black">{index + 1}</div>
              <div className="h-16 w-16 rounded-full border border-white/10 bg-white/[0.08] flex items-center justify-center text-xl font-black">{player.avatar}</div>
              <div>
                <div className="text-2xl font-black">{player.name}</div>
                <div className="text-sm uppercase tracking-[0.2em] text-white/45 mt-1">{player.badge}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black">{player.score}</div>
              <div className="text-white/55 text-sm">points</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ShowFinaleStage({ sponsorName, themeStyle }) {
  return (
    <div
      className="rounded-[36px] border border-white/10 min-h-[540px] p-10 relative overflow-hidden flex flex-col justify-center items-center text-center"
      style={{ background: `linear-gradient(135deg, ${themeStyle.heroFrom}, ${themeStyle.heroVia}, ${themeStyle.heroTo})` }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ background: `radial-gradient(circle at center, ${themeStyle.accentTo}30, transparent 50%)` }}
      />
      <div className="relative z-10 max-w-4xl">
        <div className="text-xs uppercase tracking-[0.28em] text-white/50">Finale</div>
        <div className="mt-5 text-6xl md:text-7xl font-black">Awa wins the live battle.</div>
        <div className="mt-5 text-white/75 text-xl">A premium crowd moment powered by {sponsorName}. Celebration, visibility, and audience energy in one final scene.</div>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {['Confetti Burst', 'Sponsor Highlight', 'Winner Podium'].map((item) => (
            <div key={item} className="px-5 py-4 rounded-2xl bg-white/[0.08] border border-white/10 font-semibold text-white/85">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function ShowScreenPage({
  sessionCode = 'EVX-4821',
  mode = 'Quiz Battle Live',
  playersJoined = 24,
  readyPlayers = 18,
  eventName = 'Innovation Summit Quiz',
  sponsorName = 'Edition Limitée',
  currentRound = 1,
  theme,
  onBackClick,
}) {
  const [activeMoment, setActiveMoment] = useState('lobby')

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

  const renderMoment = () => {
    switch (activeMoment) {
      case 'countdown':
        return <ShowCountdownStage themeStyle={themeStyle} />
      case 'question':
        return <ShowQuestionStage mode={mode} />
      case 'reveal':
        return <ShowRevealStage themeStyle={themeStyle} />
      case 'leaderboard':
        return <ShowLeaderboardStage />
      case 'finale':
        return <ShowFinaleStage sponsorName={sponsorName} themeStyle={themeStyle} />
      case 'lobby':
      default:
        return (
          <ShowLobbyStage
            sessionCode={sessionCode}
            playersJoined={playersJoined}
            readyPlayers={readyPlayers}
            sponsorName={sponsorName}
            themeStyle={themeStyle}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22),_transparent_38%),linear-gradient(180deg,#050816_0%,#091120_100%)]" />
      <div className="relative max-w-[1500px] mx-auto px-6 py-8">
        <button
          onClick={onBackClick}
          className="mb-6 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
        >
          ← Back to Control Room
        </button>

        <ShowHeader
          eventName={eventName}
          sponsorName={sponsorName}
          currentRound={currentRound}
          themeStyle={themeStyle}
        />

        <div className="mt-6 rounded-[30px] border border-white/10 bg-white/[0.05] backdrop-blur-xl px-5 py-4 flex flex-wrap gap-3 items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Show Screen Moment</div>
            <div className="mt-2 text-xl font-black">Spectacular live stage mock for {mode}</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {stageMoments.map((moment) => {
              const isActive = moment.key === activeMoment
              return (
                <button
                  key={moment.key}
                  onClick={() => setActiveMoment(moment.key)}
                  className={`px-4 py-3 rounded-2xl border text-sm font-semibold transition ${
                    isActive ? 'text-white border-white/25 bg-white/10' : 'text-white/70 border-white/10 bg-white/[0.04]'
                  }`}
                >
                  {moment.label}
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          key={activeMoment}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          {renderMoment()}
        </motion.div>
      </div>
    </div>
  )
}
