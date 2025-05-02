import React from 'react'
import { Link,Outlet} from 'react-router-dom'
import "./Footer.css"


const Footer = () => { 
   return (
    <>
      <div className="container-fluid footer-back-color">
        <div className="container pt-5">
            <div className='row'> 
            <div className="col-lg-3 col-md-3 col-sm-12 text-center"><Link to="/"><img className='w-50 logo1' src='https://www.amstechinc.com/assets/images/technology.png'/></Link>
            <p className='text-white mt-3 footer-word-gap'>At IICE, we go above and beyond to equip our students with the essential skills they need to build a solid foundation for a successful career in software development and  we are dedicated to empowering our students with the vital skills and knowledge needed to launch a thriving career in software development</p></div>
 
        <div className='col col-lg-3 col-md-3 col-sm-12'><h3 className=' text-white'>Navigation</h3>
        <ul>
        <li className='list-group-numbered mt-5'><Link className='text-white text-decoration-none ' to="/">Home</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="/about">About Us</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="/gallery">Gallery</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="/placement">Placement</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="/blog">Blog</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="/contacts">Contacts</Link></li>
        </ul>
        </div>

        <div className='col col-lg-3 col-md-3 col-sm-12'><h3 className='text-white'>Programs Offered</h3>
        <ul>
        <li className='list-group-numbered mt-5'><Link className='text-white text-decoration-none' to="#">Designing</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">Development</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">Programming Langauge</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">Flutter(Mobile App Development)</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">Digital Marketing</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">English Courses</Link></li>
        <li className='list-group-numbered mt-3'><Link className='text-white text-decoration-none' to="#">Computer Courses</Link></li>
        </ul>
        </div>

        <div className='col col-lg-3 col-md-3 col-sm-12'><h3 className='text-white'>Contact Detailes</h3>
        <ul>
        <li className='list-group-numbered text-white mt-5'><h5>Phone</h5>: +(91) 76970-46163 +(91) 70497-17163 0731 4949832</li>
        <li className='list-group-numbered text-white mt-3'><h5>Email</h5>: indrainstitute25@gmail.com info@iiceindore.com</li>
        <li className='list-group-numbered text-white mt-3'><h5>Address</h5>: Room No. 133, 1st Floor Veda Business Park Bhawarkuan, Main Square Near Apple Hospital, Indore</li>
         
        </ul>
        </div>

        <hr className='text-white' />
        </div>
         
        </div>
        <div className='col text-center mt-3'><img className='bg-white footer-media ' src='https://cdn-icons-png.freepik.com/256/1419/1419524.png?ga=GA1.1.286932510.1704466478'/>
        <img className='bg-white footer-media ' src='https://cdn-icons-png.freepik.com/256/14068/14068620.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>      
        <img className='bg-white footer-media ' src='https://cdn-icons-png.freepik.com/256/1077/1077042.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>
        <img className='bg-white footer-media ' src='https://cdn-icons-png.freepik.com/256/14068/14068614.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>
        <img className='bg-white footer-media ' src='https://cdn-icons-png.freepik.com/256/1077/1077046.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>
        
        
        <h4 className='text-white pb-5 mt-5 lead'>Copyright © 2022 INDRA INSTITUTE. All Rights Reserved.</h4>
        </div> 
       
        </div>
      <Outlet/>
    </>
  )
}

export default Footer
