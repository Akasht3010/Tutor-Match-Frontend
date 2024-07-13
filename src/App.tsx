import './App.css'

import { Route, Routes } from 'react-router-dom'

import UserRegister from './pages/UserRegister'
<<<<<<< HEAD
import TutorRegister from './pages/tutorRegister'
=======
import UserLogin from './pages/UserLogin'
>>>>>>> c0641418e282674f42a4c4bdd738b095d4d801a2

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
<<<<<<< HEAD
        <Route path="/tutor/register" element={<TutorRegister />} />
=======
        <Route path="/user/login" element={<UserLogin />} />
>>>>>>> c0641418e282674f42a4c4bdd738b095d4d801a2
      </Routes>
    </>
  )
}

export default App
