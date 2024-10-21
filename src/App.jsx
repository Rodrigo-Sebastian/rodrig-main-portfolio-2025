import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hem from './pages/Hem';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import ProjectDetail from './pages/ProjectDetail';
import Kontakt from './pages/Kontakt';
import Footer from './components/Footer/Footer';

function App() {

  return (
        <Router>
        <div className='bg-gradiant'>
            <Header />
        </div>
        <Routes>
            <Route path="/"  element={<Hem/>} />
            <Route path="/om" element={<Om/>} />
            <Route path="/projekt" element={<Projekt/>} />
            <Route path="/projekt/:projectId" element={<ProjectDetail/>} />
            <Route path="/kontakt" element={<Kontakt/>} />
        </Routes>
        <Om/>
        <Projekt/>
        <Kontakt/>
        <Footer/>
      </Router>
  )
}

export default App
