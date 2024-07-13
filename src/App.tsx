import './App.css'

import { Route, Routes } from 'react-router-dom'

import UserRegister from './pages/UserRegister'
import TutorRegister from './pages/tutorRegister'

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/tutor/register" element={<TutorRegister />} />
      </Routes>
    </>
  )
}

export default App
