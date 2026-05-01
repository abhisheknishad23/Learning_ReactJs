import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Props from './components/Props'

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Card />
      <Props user='ka ho ji'  age={18} />

    </div>
  )
}

export default App