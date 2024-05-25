import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
