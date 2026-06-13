import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Contack from './pages/Contack'
import { Routes, Route } from 'react-router-dom'
import PagenotF from './pages/PagenotF'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'

function App() {
  const [count, setCount] = useState(0)

  return (

     <div className='h-screen bg-black text-white'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contack' element={<Contack />} />

        {/* nested route */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<PagenotF />} />
        
      </Routes>
      
      <Footer />
     </div>
    
  )
}

export default App
