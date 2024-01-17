// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes,Route} from "react-router-dom"
import CreateAgent from "./pages/CreateAgent"
import CreateTicket from "./pages/CreateTicket"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CreateAgent/>}/>
      <Route path='/ticket' element={<CreateTicket/>} />
    </Routes>
  )
}

export default App