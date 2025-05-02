import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
 
import "./Navbar.css"


const Navbar = () => {

    const[btn1,setbtn1] = useState("")

 

  return (
    <>
      
<nav className="navbar navbar-expand-lg navbar-dark  nav-backcolor fixed-top  ">

 <div className="container-fluid ">
  <Link className="navbar-brand mx-5" to="/"><img className='nav-img bg-light rounded-2' src='https://iidesign.in/iiceindore/wp-content/uploads/2023/02/01-01.png'/></Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse mx-5 " id="main_nav">
	<ul className="navbar-nav">
		<li className="nav-item active"> <Link className="nav-link text-white mx-3 nav-hover " to="/">Home </Link> </li>
		<li className="nav-item"><Link className="nav-link text-white mx-3 nav-hover" to="/about"> About </Link></li>
 		<li className="nav-item dropdown">
      
		   <Link to="/courses" className="nav-link  dropdown-toggle text-white mx-3"   data-bs-toggle="dropdown" id='i11'  > Our Courses</Link>
       <ul className="dropdown-menu rounded-4 ">
                <li><Link className="dropdown-item rounded-4 " to="/courses">All Courses</Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#">Desingning</Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Development</Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Programming Language </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> WordPress Courses </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Flutter </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Digital Marketing </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Computer Courses </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> English Spoken</Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Tally Course </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> DCA | PGDCA </Link></li>
                <li><Link className="dropdown-item rounded-4 " to="#"> Internship Courses </Link></li>
              </ul>
		</li>
    <li className="nav-item"><Link className="nav-link text-white mx-3 nav-hover" to="/gallery"> Gallery </Link></li>
		<li className="nav-item"><Link className="nav-link text-white mx-3 nav-hover" to="/placement"> Placement </Link></li>
    <li className="nav-item"><Link className="nav-link text-white mx-3 nav-hover" to="/blog"> Blog </Link></li>
		<li className="nav-item"><Link className="nav-link text-white mx-3 nav-hover" to="/contact"> Contact </Link></li>
		<li className="nav-item mx-3"><button className='nav-btn1'>+917697046163</button></li>

	</ul>
  </div> 
 </div> 
 
</nav>
 
 
<Outlet/>
    </>
  )
}

export default Navbar

