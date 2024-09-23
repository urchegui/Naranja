import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Faqs from './components/Faqs'
import TicketPurchase from './components/TicketPurchase'
import Colaboradores from './components/Colaboradores'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
      <Header />
      <div className="body-wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/form" element={<TicketPurchase />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
