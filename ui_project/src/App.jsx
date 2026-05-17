import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {

  const users = [
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1603202662706-62ead3176b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:"",
      tag:"UnderServed"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:"",
      tag:"Underbank"
    }
  ]

  return (
    <>
      <div>
       <Section1 users={users}/>
       <Section2 />
      </div>
     
    </>
  )
}

export default App
