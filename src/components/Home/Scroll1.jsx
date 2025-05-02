import React from 'react'
import CountUp from 'react-countup';
import "./Scroll.css"

const Scroll1 = () => {
 


  return (
    <>
     <div className='container-fluid mt-5 scroll-back-img'> 
      <h2 className='text-center display-4 pt-5'>Your future starts here & Shape Your Future with Us</h2>
      <div className='container'>
        <div className='row text-center mt-5'>
          <div className='col'><h3 className='display-5 border1'><CountUp start={0} end={1000} duration={5} />+</h3><p className='lead text-white'>Students Enrolled</p></div>
          <div className='col'><h3 className='display-5 border1'><CountUp start={0} end={98} duration={5} />+</h3><p className='lead text-white'>Total Courses</p></div>
          <div className='col'><h3 className='display-5 border1'><CountUp start={0} end={400} duration={5} />+</h3><p className='lead text-white'>Online Learners</p></div>
          <div className='col'><h3 className='display-5 border1'><CountUp start={0} end={70} duration={5} />%</h3><p className='lead text-white'>Placemant Record</p></div>
        </div>
        <hr/>
      </div>
       </div> 
    </>
  )
}

export default Scroll1
