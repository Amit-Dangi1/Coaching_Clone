import React, { useState } from 'react'
import Card from './Card'

const Card2 = () => {

  const[data,setdata] = useState()

  const getData=()=>{
    return(
      setdata(
        <> 
        <Card img1 = "https://t4.ftcdn.net/jpg/02/03/38/43/240_F_203384394_Iz5KDQ4FUJTAW5faaKDN4tvyTvLJEGuM.jpg"
              h3 = "Internship Courses"
              p1 = "One of the biggest challenges that both students and education institutions face is bridging the gap between" />
           
        <Card img1 = "https://t4.ftcdn.net/jpg/02/15/48/43/240_F_215484326_AkJBpMImRnfCSrJMoMZCPxYfc5ecAzlA.jpg"
              h3 = "MERN Full Stack"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most advance" />
           
        <Card img1 = "https://t4.ftcdn.net/jpg/03/04/48/89/240_F_304488935_fVFJWjyyEGYasnyEvIarwzBIwHcJSKay.jpg"
              h3 = "MEAN Full Stack"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most advance" />
          
       <Card img1 = "https://media.licdn.com/dms/image/v2/D5612AQFG6Z3DyisnxA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1666943492071?e=2147483647&v=beta&t=JpGDfs-KcVNWHIzYVLWbkD4VxtNBA34kpFjvbHhbevs"
              h3 = "WordPress Development"
              p1 = "WordPress is the fastest-growing Content Management System (CMS) used by developers to design" />
           
        <Card img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVqDfS0lyNPxUTAbCZ9_Lhw9XtGl0Tx8vru-XoyhEa16lXJI_vqvSMooX6uJdp2IPYxI&usqp=CAU"
              h3 = "Flutter (Mobile App Development)"
              p1 = "Mobile phones and other mobile devices such as tablets and smart watches have become a part" />
           
        <Card img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLIYVYB42c2ALZcb9KkC9nYxPUp0i5sfAiHIXYIS6RcqqVWQ4AENlC7kv-4uq-W3jFUM&usqp=CAU"
              h3 = "C & C++ Language"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most advanced" />
              
       

          <Card img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-DZk4owXLBwjR2bMS7KD2QrF2iJW4Yi-ug&s"
              h3 = "Core Java"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most advanced" />
           
        <Card img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1Yf7biOAobmJnRgnZVfHpKjGKaMs_mpEp83G9h2DvAKZa5qlPznR15Kw4BY5gT5g6Yc&usqp=CAU"
              h3 = "Core Python"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most" />
           
        <Card img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbrWRjF6qN14pY5DdYFeo2FYVsIRHGRGxlUXi2CMoBoy2iztg-r_Fd281AnsaqbF-SeA&usqp=CAU"
              h3 = "DCA | PGDCA"
              p1 = "Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most" />
          
           </>   
      )
    )


  }
  
  return (
    <>
    <div className='container-fluid'><h3 className='display-5 text-center mt-5'>Discover Our Top Courses to<br/> Kickstart Your Successful Career in IT</h3></div>
    <div className='container mt-3 '>

        <div className='row '>
          
             <Card img1="https://img.freepik.com/free-photo/empty-modern-creative-agency-office-with-dual-monitors-setup-with-processing-video-film-montage-vide_482257-3406.jpg?ga=GA1.1.286932510.1704466478&semt=ais_hybrid"
                                                               h3="Graphic Design" p1="Let the artist in you take the spotlight. Learn to design fascinating illustrations, logos, symbols, infographics, publications, etc"/>
            
             <Card img1="https://img.freepik.com/free-photo/3d-rendering-website-hosting-concept_23-2149484783.jpg?ga=GA1.1.286932510.1704466478&semt=ais_hybrid" 
                                                               h3 = "Web Design" p1="Build the most intuitive interface for the website users to provide them a fluent experience when using web applications. Learn HTML 4.01"/>
             <Card img1="https://t3.ftcdn.net/jpg/08/29/49/04/240_F_829490424_VxKHR6SrSHnqQeoTlzI9N82ZW682y9Ye.jpg"
                                                               h3 = "MERN & MEAN Full Stack Development" p1="Indra Institute is a pioneer for web development course in Indore. Our web development training is one of the most."/>
        </div>
        <div className='row'>
            
            <Card img1="https://t3.ftcdn.net/jpg/04/11/44/64/240_F_411446459_X5J7lYVxHD74AM7It5p2sizFhl1afiV3.jpg" 
                                                               h3="Digital Marketing" p1="Use the internet traffic to market products and websites using Search Engine Optimization, Social Media Marketing, Content Marketing"/>
            
             <Card img1="https://image.shutterstock.com/image-photo/digital-technology-software-development-concept-260nw-2111828198.jpg"
                                                               h3 = "Programming Languages" p1="Learn to build professional applications and tools using the best technology to achieve"/>
            
            <Card img1="https://t3.ftcdn.net/jpg/00/96/13/84/240_F_96138431_88A6Y5a0d3YZpDdunjoZgfuV8NBBETyC.jpg" 
                                                               h3 = "Spoken English" p1="Become the most confident person in the room with a solid proficiency in spoken english and communication skills"/>
        </div>
        <div className='row'>
           {data}
        </div>
       <p className='text-center mt-5'><button onClick={getData} className='text-center border bg-primary rounded text-white px-3 py-2' type="button">More Courses</button></p>

    </div>
   
    </>
  )
}

export default Card2
