import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='h-screen bg-black text-white'>
      <Header />
      <Home />
      <Footer />
     </div>
    </>
  )
}

export default App
