import Portfolio from './contents/portfolio.jsx';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </HashRouter>
  )
}

export default App
