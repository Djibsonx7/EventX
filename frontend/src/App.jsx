import { useEffect, useMemo, useState } from 'react'
import HomePage from './pages/HomePage'
import CreateSessionPage from './pages/CreateSessionPage'
import JoinSessionPage from './pages/JoinSessionPage'
import LiveSessionPage from './pages/LiveSessionPage'
import PlayerWaitingRoomPage from './pages/PlayerWaitingRoomPage'
import PlayerGamePage from './pages/PlayerGamePage'

const defaultSession = {
  code: 'EVX-4821',
  mode: 'Quiz Battle Live',
  status: 'waiting',
  playersJoined: 24,
  readyPlayers: 18,
  sponsorEnabled: true,
  eventName: 'Innovation Summit Quiz',
  currentRound: 1,
}

export default function App() {
  const [page, setPage] = useState('home')
  const [playerName, setPlayerName] = useState('You')
  const [session, setSession] = useState(defaultSession)

  useEffect(() => {
    if (page === 'player' && session.status === 'live') {
      setPage('game')
    }
  }, [page, session.status])

  const sessionSummary = useMemo(
    () => ({
      sessionCode: session.code,
      mode: session.mode,
      status: session.status,
      playersJoined: session.playersJoined,
      readyPlayers: session.readyPlayers,
      sponsorEnabled: session.sponsorEnabled,
      eventName: session.eventName,
      currentRound: session.currentRound,
    }),
    [session]
  )

  const handleLaunchSession = (mode) => {
    setSession((current) => ({
      ...current,
      mode,
      status: 'waiting',
      playersJoined: 24,
      readyPlayers: 18,
      currentRound: 1,
    }))
    setPage('live')
  }

  const handleJoinSession = (code) => {
    const normalizedCode = code?.trim().toUpperCase() || defaultSession.code
    setPlayerName('Guest Player')
    setSession((current) => ({
      ...current,
      code: normalizedCode,
      playersJoined: current.playersJoined + 1,
    }))
    setPage(session.status === 'live' ? 'game' : 'player')
  }

  const handlePlayerReady = () => {
    setSession((current) => ({
      ...current,
      readyPlayers: Math.min(current.playersJoined, current.readyPlayers + 1),
    }))
  }

  const handleStartExperience = () => {
    setSession((current) => ({
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
        sessionCode={session.code}
        eventName={session.eventName}
        mode={session.mode}
        status={session.status}
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
