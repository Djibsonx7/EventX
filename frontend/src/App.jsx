import { useState } from 'react'
import HomePage from './pages/HomePage'
import CreateSessionPage from './pages/CreateSessionPage'
import JoinSessionPage from './pages/JoinSessionPage'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'create') {
    return <CreateSessionPage />
  }

  if (page === 'join') {
    return <JoinSessionPage onBackClick={() => setPage('home')} />
  }

  return (
    <HomePage
      onCreateClick={() => setPage('create')}
      onJoinClick={() => setPage('join')}
    />
  )
}
