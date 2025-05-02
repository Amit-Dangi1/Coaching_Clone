import React from 'react'
import "./Slider.css"
import { Link ,Outlet} from 'react-router-dom'

const Slider1 = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner mt-5 ">
     
    <div className="carousel-item active">
      <div className='container-fluid Home-backimg1'>
        <div className='container '>
            <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Become a Graphics Designer</h2><h1 className='text-center text-white mt-4'>Learn how to Design UI/UX</h1>
<p className='text-white lead mt-3 text-center mb-5'>Good art is talent, good desinging is a Skill.Learn to design graphics  that captives the eye,build elegant  and Professional  user  interface and art.</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button>

</div>
        </div>
      </div>
      {/* <img src="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898686.jpg?ga=GA1.1.286932510.1704466478&semt=ais_hybrid" className="d-block w-100" alt="..."/> */}
    </div>
   
     
    <div className="carousel-item">
    <div className='container-fluid Home-backimg3'>
        <div className='container '>
        <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Become Web Developer</h2><h1 className='text-center text-white mt-4'>Learb MEAN | MERN Full Stack Developer</h1>
<p className='text-white lead mt-3 text-center mb-5'>Build web  applications  with  amazing  functions  and  robust  performance using the favorite tech stack MongoDB,  Express, Angular, React and Node.js.</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button></div>
         
        </div>
      </div>
        
     </div>
     
    <div className="carousel-item">
    <div className='container-fluid Home-backimg4'>
        <div className='container '>
        <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Start your career in Digital Marketing</h2><h1 className='text-center text-white mt-4'>SEO and Digital Marketing Campaings</h1>
<p className='text-white lead mt-3 text-center mb-5'>Empower bussinesses the power of the internet to reach out to the market.Learn  to optimize websites  and run various campaings.</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button></div>
         
        </div>
      </div>
        
     </div>
     
    <div className="carousel-item">
    <div className='container-fluid Home-backimg5'>
        <div className='container '>
        <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Use the Techlogoly to your advantage</h2><h1 className='text-center text-white mt-4'>Build your  Computer  Foundation</h1>
<p className='text-white lead mt-3 text-center mb-5'>With our PGDCA, DCA, CPT courses  you will learn  about how popular computer programs used  widely work.We also teach  hindi english  typing  .</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button></div>
         
        </div>
      </div>
        
     </div>
    <div className="carousel-item">
    <div className='container-fluid Home-backimg6'>
        <div className='container '>

        <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Become Software Developer</h2><h1 className='text-center text-white mt-4'>Learn Programming Languages</h1>
<p className='text-white lead mt-3 text-center'>Add charms to your software developer  kit by learning  various programing lamguages and technology so  you can leverage the best advantages they offer   .</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button></div>
        </div></div>
       </div>

       <div className="carousel-item">
    <div className='container-fluid Home-backimg2'>
        <div className='container '>
        <div className='col pt-5 '><h2 className='text-white text-center mt-4'>Learn to present your thought professinally</h2><h1 className='text-center text-white mt-4'>Take our Spoken English Course</h1>
<p className='text-white lead mt-3 text-center '>No idea the recongnition it deserve  unless you are  able to convey  it efficently abn proficenlty to the  stakeholders. Build your  confidence and communication skills with us.</p>
<button className='slider-btn1 mx-5'><Link className='text-white text-decoration-none' to="/courses">Explore Courses</Link></button>
<button className=' slider-btn1  px-4' ><Link className='text-white text-decoration-none' to="/contact">Contact Us</Link></button></div>
         
        </div>
      </div>
        
     </div>
      </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<Outlet/>
    </>
  )
}

export default Slider1
