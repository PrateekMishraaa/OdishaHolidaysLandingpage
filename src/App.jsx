import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Attractions from './Pages/Attractions'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/attractions' element={<Attractions/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
