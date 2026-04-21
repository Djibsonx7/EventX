import { useState } from 'react'
import HomePage from './pages/HomePage'
import CreateSessionPage from './pages/CreateSessionPage'
import JoinSessionPage from './pages/JoinSessionPage'
import LiveSessionPage from './pages/LiveSessionPage'
import PlayerWaitingRoomPage from './pages/PlayerWaitingRoomPage'
import PlayerGamePage from './pages/PlayerGamePage'

export default function App() {
  const [page, setPage] = useState('home')
  const [sessionMode, setSessionMode] = useState('Quiz Battle Live')

  if (page === 'create') {
    return (
      <CreateSessionPage
        onBackClick={() => setPage('home')}
        onLaunch={(mode) => {
          setSessionMode(mode)
          setPage('live')
        }}
      />
    )
  }

  if (page === 'join') {
    return (
      <JoinSessionPage
        onBackClick={() => setPage('home')}
        onJoin={() => setPage('player')}
      />
    )
  }

  if (page === 'player') {
    return (
      <PlayerWaitingRoomPage
        mode={sessionMode}
        onBackClick={() => setPage('home')}
        onStartClick={() => setPage('game')}
      />
    )
  }

  if (page === 'game') {
    return (
      <PlayerGamePage
        mode={sessionMode}
        onBackClick={() => setPage('player')}
      />
    )
  }

  if (page === 'live') {
    return (
      <LiveSessionPage
        mode={sessionMode}
        onBackClick={() => setPage('create')}
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
