import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Props from './components/Props'
import UseState from './components/Usestate/UseState'
import FormHandler from './components/formHandler/FormHandler'
import TwoWayBinding from './components/formHandler/TwoWayBinding'

const App = () => {
  return (
    <div>
      
      {/* <Navbar />
      <Card />
      <Props user='ka ho ji'  age={18} /> */}
      {/* <UseState /> */}
      {/* <FormHandler /> */}
      <TwoWayBinding />

    </div>
  )
}

export default App