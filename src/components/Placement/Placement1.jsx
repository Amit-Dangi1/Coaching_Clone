import React, { useState }  from 'react'
 import '../Home/Scroll.css'
 import CountUp from 'react-countup';



const Placement1 = () => {


    const[data,setdata]=useState(
        <>
        <div className='col-lg-6 col-md-6 col-sm-12 '> 
        <img className='w-100 rounded '  src='https://img.freepik.com/free-photo/young-businessman-portrait-ai-generated_268835-11503.jpg?ga=GA1.1.286932510.1704466478'/></div>
        <div className='col-lg-6 col-md-6 col-sm-12'><h1 className='display-5'>Amit Dangi</h1>
        <p>"An exceptional institute with highly qualified professionals. The best place to learn and master modern technology."</p>
        <h6 className=''>By Amit Dangi</h6>
        <h3 className='lead '>Web Developer</h3></div>
        </>)
    
        const getBt1=()=>{
            setdata(()=>{
            return(
                <>
                <div className='col-lg-6 col-md-6 col-sm-12'><img className='w-100 rounded' src='https://img.freepik.com/free-photo/young-businessman-portrait-ai-generated_268835-11503.jpg?ga=GA1.1.286932510.1704466478'/></div>
               <div className='col-lg-6 col-md-6 col-sm-12'> <h1 className='display-6'>Amit Dangi</h1>
                <p>"An exceptional institute with highly qualified professionals. The best place to learn and master modern technology."</p>
                <h4>By Amit Dangi</h4>
                <h5 className='lead'>Web Developer</h5></div>
                </>
          )})
        }
        const getBt2=()=>{
            setdata(()=>{
            return(
                <>
                <div className='col-lg-6 col-md-6 col-sm-12 '><img className='w-100 rounded' src='https://img.freepik.com/free-photo/closeup-confident-businessman-white-shirt-looking-left-smiling-satisfied-standing-whi_1258-112690.jpg?ga=GA1.1.286932510.1704466478'/></div>
                <div className='col-lg-6 col-md-6 col-sm-12 '><h1 className='display-6'>HariKishan Choudhry</h1>
                <p>"The best institute in Indore, known for fostering strong connections with students. A top choice for graphic and web design courses and classes in Indore."</p>
                <h4>By Herry</h4>
                <h5 className='lead'>Software Developer</h5></div>
                </>
          )})
        }
        const getBt3=()=>{
            setdata(()=>{
            return(
                <>
                {/* */}
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <img className='w-100 rounded' src='https://img.freepik.com/free-photo/finance-close-up-handsome-bearded-businessman-suit-showing-plastic-credit-card-standing-seriou_1258-154164.jpg?ga=GA1.1.286932510.1704466478'/></div>
               <div className='col-lg-6 col-md-6 col-sm-12'> <h1 className='display-6'>Atul Karodi</h1>
                <p>"Indore's top choice for graphic and web design courses, where learning goes hand in hand with building strong connections. Discover why our students call us the best!"</p>
                <h4>By Atul</h4>
                <h5 className='lead'>Java Developer</h5></div>
                </>
          )})
        }
        const getBt4=()=>{
            setdata(()=>{
            return(
                <>

                <div className='col-lg-6 col-md-6 col-sm-12 mb-4'><img className='w-100 rounded' src='https://img.freepik.com/free-photo/close-up-redhead-bearded-man-looking-pleased-nod-approval-smiling-standing-pink-tshirt_1258-173366.jpg?ga=GA1.1.286932510.1704466478'/></div>
                
                <div className='col-lg-6 col-md-6 col-sm-12'><h1 className='display-6'>Sanjay Ji</h1>
                <p>"Indra Institute is where passion meets profession. With expert guidance and a supportive environment, we help you turn aspirations into achievements."</p>
                <h4>By Sanju</h4>
                <h5 className='lead'>Fronted Developer</h5></div>
                </>
          )})
        }
    
  return (
    <>
<div className='container mt-3 pt-5 text-center'>
  <p className='lead mt-5'>Land the job of your dreams!</p>
  <p className='display-4 '>Career Placement Opportunities</p>
<div className='row mt-5'>
  <div className='col-lg-6 col-md-6 col-sm-12'><img className='w-100 rounded-4 border-5' src='https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/></div>
  <div className='col-lg-6 col-md-6 col-sm-12 mt-3'><p className='lead'>At Indra Institute, our programs are crafted to align with current industry trends and skill demands. We collaborate with top recruiters to stay ahead of technological shifts and continuously update our courses. Unlike many other institutions, we focus on equipping you to deliver immediate value to our partner organizations, making you a valuable asset from day one.</p>
  <h4 className='mt-3 mb-2'>Indra Institute of Computer Excellence (IICE)</h4>
  <p className='lead'>IICE (Indra Institute of Computer Excellence) stands as Indore's premier training institute, renowned across India for its excellence in education. Our diverse range of courses is designed to provide a comprehensive education, equipping students with the skills and knowledge needed to excel in today’s competitive job market.</p>
  </div>
  </div>
</div>

    
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
    

    
    <div className='container-fluid mb-5 mt-5'>
      <h4 className='lead text-center'>Kickstart your career with guaranteed interview calls at Indra Institute</h4>
      <p className='display-4 mt-3 text-center'>Hear from Our Successful Graduates</p>
        <div className='container text-center'> <div className='row text-center mt-5 mb-5'>
            {data} 
            </div>  
    
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt1}><img className='bg-success-subtle p-1 rounded-3 ' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Dangi Jii</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt4}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Sanjay</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt2}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Herry</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt3}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Atul</button>
     </div> 
    </div> 
    </>
  )
}

export default Placement1
