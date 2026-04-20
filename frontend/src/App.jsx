import { useState } from 'react'
import HomePage from './pages/HomePage'
import CreateSessionPage from './pages/CreateSessionPage'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'create') {
    return <CreateSessionPage />
  }

  return (
    <HomePage
      onCreateClick={() => setPage('create')}
      onJoinClick={() => alert('Join flow coming next')}
    />
  )
}
