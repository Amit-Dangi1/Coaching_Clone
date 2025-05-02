import React from 'react'
import Navbar from './Navbar'
import Slider1 from './Slider1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card2 from './Card2'
import Column2 from './Column2'
import "./AllHome.css"
import Scroll1 from './Scroll1'
import Btn1 from './btn1'
import Support from './Support'
import Footer from './Footer'
 
const AllHome = () => {
  return (
    <div> 
                  <div className='container-fluid column2-back'>
                    <div className='container text-center '>  
                  <Column2 img2="https://t4.ftcdn.net/jpg/01/07/83/35/240_F_107833557_qnybklqAM4oOR4eM6HCuMGECn0fGaAsG.jpg"
                           h4="Explore Our Courses"
                           h2="Unlock Premier Industry Training Right Here in Indore!"
                           p="At Indra Institute, we go above and beyond to equip our students with the essential skills needed for a successful software development career. Recognizing that each student is unique, we focus on nurturing your individual talents and strengths rather than adhering to one-size-fits-all approaches. Our personalized programs are designed to provide a tailored learning experience that aligns with your specific ambitions and goals."  
                            /> <h3 className='display-4 text-center'>Top Categories</h3> <button className='allhome-btn'>Classroom Training</button> <button className='allhome-btn'>Corporate Training</button> <button className='allhome-btn'>Internship Training</button><button className='allhome-btn'> Live Pro</button></div></div>
                            
                            <Scroll1/>
                            <div className='container-fluid column2-back '>
                            <div className='container text-center '> 
                            <Column2 img2="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898686.jpg?ga=GA1.1.286932510.1704466478&semt=ais_hybrid"
                           h4="Why Choose Us"
                           h2="Indore's leading destination for cutting-edge web development courses."
                           p="Indra Institute is your gateway to mastering web development in Indore. Our all-encompassing courses are designed to equip you with the skills and knowledge needed to thrive in the ever-evolving software industry, empowering you to create and innovate with confidence. Start your journey with us and build the future."  
                            /></div></div>
                             
                            
                  
   
    </div>
  )
}

export default AllHome
