import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const gameModes = [
  {
    key: 'quiz',
    title: 'Quiz Battle Live',
    subtitle: 'Competitive live quiz format',
    headline: 'Which team will dominate the leaderboard?',
    bullets: ['Fast join', 'Branded transitions', 'Ranking excitement', 'Reward finale'],
    chips: ['Logo sponsor', 'Countdown lobby', 'Live rankings', 'Reward scene'],
    theme: 'Innovation Summit 2026',
  },
  {
    key: 'poll',
    title: 'Live Polls',
    subtitle: 'Instant audience voting',
    headline: 'What does the audience think right now?',
    bullets: ['Live voting', 'Decision moments', 'Stage visualization', 'Fast feedback'],
    chips: ['Instant charts', 'Audience insight', 'Brand pulse', 'Session opener'],
    theme: 'Leadership Forum 2026',
  },
  {
    key: 'cloud',
    title: 'Word Cloud',
    subtitle: 'Capture reactions and ideas',
    headline: 'What word best defines this event?',
    bullets: ['Icebreaker energy', 'Open reactions', 'Visual participation', 'Collective expression'],
    chips: ['Emotion wall', 'Brand language', 'Audience voice', 'Live display'],
    theme: 'Campus Experience Day',
  },
  {
    key: 'spin',
    title: 'Spin & Win',
    subtitle: 'Sponsor-friendly reward moment',
    headline: 'Spin the wheel and unlock sponsor rewards.',
    bullets: ['Prize reveal', 'Stand attraction', 'Reward suspense', 'Sponsor boost'],
    chips: ['Coupons', 'Gift moments', 'Booth traffic', 'Closing hype'],
    theme: 'Brand Activation Night',
  },
]

const themePresets = {
  neonPulse: {
    key: 'neonPulse',
    label: 'Neon Pulse',
    accentFrom: '#7c3aed',
    accentTo: '#ec4899',
    heroFrom: '#2a0c55',
    heroVia: '#2d1e7f',
    heroTo: '#0f172a',
    badge: 'Premium Glow',
  },
  electricBlue: {
    key: 'electricBlue',
    label: 'Electric Blue',
    accentFrom: '#2563eb',
    accentTo: '#06b6d4',
    heroFrom: '#102a5c',
    heroVia: '#153b82',
    heroTo: '#0f1b35',
    badge: 'Blue Stage',
  },
  emeraldStage: {
    key: 'emeraldStage',
    label: 'Emerald Stage',
    accentFrom: '#059669',
    accentTo: '#22c55e',
    heroFrom: '#0d3b32',
    heroVia: '#145647',
    heroTo: '#0f1f1c',
    badge: 'Fresh Impact',
  },
}

export default function CreateSessionPage({ onBackClick, onLaunch }) {
  const [selectedKey, setSelectedKey] = useState('quiz')
  const [eventName, setEventName] = useState('Innovation Summit Quiz')
  const [sponsorName, setSponsorName] = useState('Nova Partner')
  const [themeKey, setThemeKey] = useState('neonPulse')
  const [hostName, setHostName] = useState('EventX Studio')

  const selectedMode = useMemo(
    () => gameModes.find((mode) => mode.key === selectedKey) || gameModes[0],
    [selectedKey]
  )

  const selectedTheme = themePresets[themeKey] || themePresets.neonPulse

  const launchPayload = {
    mode: selectedMode.title,
    eventName: eventName.trim() || selectedMode.theme,
    sponsorName: sponsorName.trim() || 'Nova Partner',
    hostName: hostName.trim() || 'EventX Studio',
    theme: selectedTheme,
  }

  return (
    <div className="min-h-screen bg-[#08101f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          {onBackClick && (
            <button
              onClick={onBackClick}
              className="mb-6 px-4 py-2 rounded-xl bg-white/8 border border-white/10 text-white/80"
            >
              ← Back
            </button>
          )}

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
              {gameModes.map((mode, idx) => {
                const isSelected = mode.key === selectedKey
                return (
                  <motion.button
                    type="button"
                    key={mode.key}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedKey(mode.key)}
                    className={`rounded-[24px] p-5 border text-left transition ${
                      isSelected
                        ? 'border-fuchsia-400/40 bg-gradient-to-br from-[#22103a] to-[#121b35] shadow-[0_0_30px_rgba(124,58,237,0.15)]'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#ec4899] mb-5" />
                    <div className="text-xl font-bold">{mode.title}</div>
                    <div className="text-white/60 mt-2">{mode.subtitle}</div>
                    <div className="mt-5 inline-flex px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold">
                      {isSelected ? 'Selected' : 'Select'}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/55 mb-3">Event Name</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full rounded-2xl bg-[#0a1324] border border-white/10 px-4 py-4 outline-none"
                  placeholder="Innovation Summit Quiz"
                />
              </div>
              <div>
                <label className="block text-sm text-white/55 mb-3">Sponsor / Brand</label>
                <input
                  type="text"
                  value={sponsorName}
                  onChange={(e) => setSponsorName(e.target.value)}
                  className="w-full rounded-2xl bg-[#0a1324] border border-white/10 px-4 py-4 outline-none"
                  placeholder="Nova Partner"
                />
              </div>
              <div>
                <label className="block text-sm text-white/55 mb-3">Host Label</label>
                <input
                  type="text"
                  value={hostName}
                  onChange={(e) => setHostName(e.target.value)}
                  className="w-full rounded-2xl bg-[#0a1324] border border-white/10 px-4 py-4 outline-none"
                  placeholder="EventX Studio"
                />
              </div>
              <div>
                <label className="block text-sm text-white/55 mb-3">Theme Preset</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.values(themePresets).map((theme) => {
                    const isActive = theme.key === themeKey
                    return (
                      <button
                        key={theme.key}
                        type="button"
                        onClick={() => setThemeKey(theme.key)}
                        className={`rounded-2xl border px-3 py-3 text-left ${
                          isActive ? 'border-white/30 bg-white/10' : 'border-white/10 bg-white/[0.03]'
                        }`}
                      >
                        <div
                          className="h-8 rounded-xl mb-2"
                          style={{
                            background: `linear-gradient(135deg, ${theme.accentFrom}, ${theme.accentTo})`,
                          }}
                        />
                        <div className="text-xs font-semibold">{theme.label}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onLaunch?.(launchPayload)}
                className="px-6 py-4 rounded-2xl font-semibold shadow-[0_0_35px_rgba(124,58,237,0.35)]"
                style={{
                  background: `linear-gradient(90deg, ${selectedTheme.accentFrom}, ${selectedTheme.accentTo})`,
                }}
              >
                Launch Session
              </button>
              <button className="px-6 py-4 rounded-2xl bg-white/8 border border-white/10 font-semibold text-white/80">
                Save as Draft
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#11162a] to-[#0a1121] p-6 shadow-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Live Preview</div>
            <div className="mt-3 text-2xl font-bold">{selectedMode.title}</div>
            <div className="mt-6 rounded-[26px] border border-white/10 bg-[#0b1326] overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40">Session Theme</div>
                  <div className="text-lg font-bold mt-1">{launchPayload.eventName}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">{selectedTheme.badge}</div>
              </div>

              <div className="p-5 space-y-4">
                <div
                  className="rounded-3xl min-h-[210px] border border-white/10 p-6 flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${selectedTheme.heroFrom}, ${selectedTheme.heroVia}, ${selectedTheme.heroTo})`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="h-11 w-11 rounded-full bg-white/15 border border-white/20" />
                      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/55">Hosted by {launchPayload.hostName}</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-black/30 text-xs font-bold">Sponsored by {launchPayload.sponsorName}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black leading-tight">{selectedMode.headline}</div>
                    <div className="mt-3 text-white/65 text-sm">{selectedMode.bullets.join(' • ')}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedMode.chips.map((item) => (
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
