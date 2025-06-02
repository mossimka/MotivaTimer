import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Countdown from './components/Countdown/Countdown';


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </main>
  ) 
}

export default App
