import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Props from './components/Props'
import UseState from './components/Usestate/UseState'
import FormHandler from './components/formHandler/FormHandler'
import TwoWayBinding from './components/formHandler/TwoWayBinding'
import localStorage from './components/localStorage'
import ApiCalling from './components/ApiCalling'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div>
      <Navbar2 />
      
      {/* <Navbar />
      <Card />
      <Props user='ka ho ji'  age={18} /> */}
      {/* <UseState /> */}
      {/* <FormHandler /> */}
      {/* <TwoWayBinding />
      <localStorage /> */}
      {/* <ApiCalling /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

    </div>
  )
}

export default App