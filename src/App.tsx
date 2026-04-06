import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import NotesPage from './pages/notes'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </>
  )
}

export default App
