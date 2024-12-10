import FetchEstudiantes from './components/fetchEstudiantes'
import './css/App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <h1>Navbar</h1>
        <Routes>
            <Route path='/' element={<FetchEstudiantes/>} />
            <Route/>
            <Route/>
            <Route/>
        </Routes>
    </Router>
  )
}

export default App
