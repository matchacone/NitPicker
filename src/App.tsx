import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage'
import NotesPage from './pages/notes'
import MockExamPage from './pages/mockexam'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/mockexam" element={<MockExamPage />} />

      </Routes>
    </>
  )
}

export default App
