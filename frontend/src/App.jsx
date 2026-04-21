import { useEffect, useMemo, useState } from 'react'
import HomePage from './pages/HomePage'
import CreateSessionPage from './pages/CreateSessionPage'
import JoinSessionPage from './pages/JoinSessionPage'
import LiveSessionPage from './pages/LiveSessionPage'
import PlayerWaitingRoomPage from './pages/PlayerWaitingRoomPage'
import PlayerGamePage from './pages/PlayerGamePage'

const SESSION_STORAGE_KEY = 'eventx-live-session'

const defaultTheme = {
  key: 'neonPulse',
  label: 'Neon Pulse',
  accentFrom: '#7c3aed',
  accentTo: '#ec4899',
  heroFrom: '#2a0c55',
  heroVia: '#2d1e7f',
  heroTo: '#0f172a',
  badge: 'Premium Glow',
}

const defaultSession = {
  code: 'EVX-4821',
  mode: 'Quiz Battle Live',
  status: 'waiting',
  playersJoined: 24,
  readyPlayers: 18,
  sponsorEnabled: true,
  eventName: 'Innovation Summit Quiz',
  sponsorName: 'Edition Limitée',
  hostName: 'EventX Studio',
  theme: defaultTheme,
  currentRound: 1,
}

function loadStoredSession() {
  if (typeof window === 'undefined') return defaultSession

  const rawSession = window.localStorage.getItem(SESSION_STORAGE_KEY)
  if (!rawSession) return defaultSession

  try {
    const parsedSession = JSON.parse(rawSession)
    return {
      ...defaultSession,
      ...parsedSession,
      theme: { ...defaultTheme, ...(parsedSession?.theme || {}) },
    }
  } catch {
    return defaultSession
  }
}

function persistSession(nextSession) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextSession))
}

function createSessionCode() {
  return `EVX-${Math.floor(1000 + Math.random() * 9000)}`
}

export default function App() {
  const [page, setPage] = useState('home')
  const [playerName, setPlayerName] = useState('You')
  const [session, setSession] = useState(loadStoredSession)

  useEffect(() => {
    persistSession(session)
  }, [session])

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== SESSION_STORAGE_KEY || !event.newValue) return

      try {
        const nextSession = JSON.parse(event.newValue)
        setSession((current) => ({
          ...current,
          ...nextSession,
          theme: { ...defaultTheme, ...(nextSession?.theme || {}) },
        }))
      } catch {
        // Ignore malformed storage payloads.
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  useEffect(() => {
    if (page === 'player' && session.status === 'live') {
      setPage('game')
    }
  }, [page, session.status])

  const updateSession = (updater) => {
    setSession((current) => {
      const nextSession = typeof updater === 'function' ? updater(current) : updater
      const mergedSession = {
        ...current,
        ...nextSession,
        theme: { ...defaultTheme, ...(nextSession?.theme || current.theme || {}) },
      }
      persistSession(mergedSession)
      return mergedSession
    })
  }

  const sessionSummary = useMemo(
    () => ({
      sessionCode: session.code,
      mode: session.mode,
      status: session.status,
      playersJoined: session.playersJoined,
      readyPlayers: session.readyPlayers,
      sponsorEnabled: session.sponsorEnabled,
      eventName: session.eventName,
      sponsorName: session.sponsorName,
      hostName: session.hostName,
      theme: session.theme,
      currentRound: session.currentRound,
    }),
    [session]
  )

  const handleLaunchSession = (payload) => {
    updateSession((current) => ({
      ...current,
      code: createSessionCode(),
      mode: payload?.mode || current.mode,
      status: 'waiting',
      playersJoined: 24,
      readyPlayers: 18,
      sponsorEnabled: true,
      eventName: payload?.eventName || current.eventName,
      sponsorName: payload?.sponsorName || current.sponsorName,
      hostName: payload?.hostName || current.hostName,
      theme: payload?.theme || current.theme,
      currentRound: 1,
    }))
    setPage('live')
  }

  const handleJoinSession = (code) => {
    const normalizedCode = code?.trim().toUpperCase() || defaultSession.code
    const liveStatus = session.status

    setPlayerName('Guest Player')
    updateSession((current) => ({
      ...current,
      code: normalizedCode,
      playersJoined: current.playersJoined + 1,
    }))
    setPage(liveStatus === 'live' ? 'game' : 'player')
  }

  const handlePlayerReady = () => {
    updateSession((current) => ({
      ...current,
      readyPlayers: Math.min(current.playersJoined, current.readyPlayers + 1),
    }))
  }

  const handleStartExperience = () => {
    updateSession((current) => ({
      ...current,
      status: 'live',
      currentRound: 1,
    }))
  }

  const handleBackToWaitingRoom = () => {
    setPage('player')
  }

  if (page === 'create') {
    return (
      <CreateSessionPage
        onBackClick={() => setPage('home')}
        onLaunch={handleLaunchSession}
      />
    )
  }

  if (page === 'join') {
    return (
      <JoinSessionPage
        {...sessionSummary}
        onBackClick={() => setPage('home')}
        onJoin={handleJoinSession}
      />
    )
  }

  if (page === 'player') {
    return (
      <PlayerWaitingRoomPage
        {...sessionSummary}
        playerName={playerName}
        onBackClick={() => setPage('home')}
        onReadyClick={handlePlayerReady}
      />
    )
  }

  if (page === 'game') {
    return (
      <PlayerGamePage
        {...sessionSummary}
        playerName={playerName}
        onBackClick={handleBackToWaitingRoom}
      />
    )
  }

  if (page === 'live') {
    return (
      <LiveSessionPage
        {...sessionSummary}
        onBackClick={() => setPage('create')}
        onStartExperience={handleStartExperience}
      />
    )
  }

  return (
    <HomePage
      onCreateClick={() => setPage('create')}
      onJoinClick={() => setPage('join')}
    />
  )
}
