import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Attractions from './Pages/Attractions'
import Destinations from './Pages/Destinations'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Gallery from './Pages/Gallery'
import Packages from './Pages/Packages'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/attractions' element={<Attractions/>}/>
      <Route path="/destinations" element={<Destinations/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
