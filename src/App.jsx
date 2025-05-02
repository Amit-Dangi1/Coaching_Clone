import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllHome from './components/Home/AllHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Home/Navbar'
import Slider1 from './components/Home/Slider1'
import Card2 from './components/Home/Card2'
 import Support from './components/Home/Support'
import Footer from './components/Home/Footer'
import Btn1 from './components/Home/btn1'
import About1 from './components/Abous/About1'
import Placement from './components/Abous/Placement'
import OurCourses1 from './components/OurCourses/OurCourses1'
import Placement1 from './components/Placement/Placement1'
import Gallery1 from './components/Gallery/Gallery1'
import Scroll1 from './components/Home/Scroll1'
import Blog1 from './components/Blog/Blog1'
import Contact1 from './components/Contacts/Contact1'
import WhatsApp from './components/WhatsApp'
 
 

function App() {
 

  return (
    <>
   
     <BrowserRouter>
     <Routes>

<Route path='/'
element={<> <Navbar/>      
            <Slider1/>
            <Card2/>
             <AllHome/>
            <Btn1/>
            <Support/>
            <WhatsApp/>
            <Footer/></>}/>

 <Route path='/about'
        element={<><Navbar/><About1/><Placement/><WhatsApp/><Footer/></>}/>           

<Route path='/courses'
       element={<><Navbar/><OurCourses1/><WhatsApp/><Footer/></>}/>

<Route path='/gallery'
       element={<><Navbar/><Gallery1/><Scroll1/><WhatsApp/><Footer/></>}/>

<Route path='/placement'
       element={<><Navbar/><Placement1/><WhatsApp/><Footer/></>}/>

<Route path='/blog'
       element={<><Navbar/><Blog1/><WhatsApp/><Footer/></>}           />       


<Route path='/contact'
       element={<><Navbar/><Contact1/><WhatsApp/><Footer/></>}     
/>       
     </Routes>
     </BrowserRouter>
     

         
    </>
  )
}

export default App
