 import React, { useState } from 'react'
import "./Blog.css"


const Blog1 = () => {


const[data,setdata]  = useState()
const[data2,setdata2]  = useState()

const getBt1=()=>{
  setdata(()=>{

  
  return(
  <>
  <div className='col text-center mt-4'> 
  <img className='w-50' src='https://i0.wp.com/iiceindore.com/wp-content/uploads/2023/09/Graphic-design-course-indra-institute-iiceindore.jpg?resize=300%2C300'/>
  <h4 className='mt-5 display-5'>The Evolution of Graphic Design</h4>
  <p className='text-secondary'>Graphic design has come a long way since its inception. Once confined to print media, it has now expanded its reach to encompass digital platforms, social media, mobile apps, and beyond. This evolution has transformed the way we perceive and interact with the world around us. Let’s delve into how graphic design is shaping the future of designing skills.</p>
  
  <h5>1. Visual Storytelling in the Digital Age</h5>
  <p className='text-secondary'>In today’s digital age, where information is abundant and attention spans are fleeting, visual storytelling is paramount. Graphic designers have the unique ability to distill complex ideas and messages into visually appealing and easily digestible formats. Through the strategic use of typography, colour, imagery, and layout, they can create narratives that captivate and engage audiences.</p>
  
  <h5>2. Branding and Identity</h5>
  <p className='text-secondary'>In a crowded marketplace, establishing a distinct brand identity is essential for businesses and organizations. Graphic designers are the architects behind memorable logos, eye-catching packaging, and cohesive brand visuals. They understand the psychology of color and design, ensuring that every element communicates the brand’s values and personality effectively.A well-executed brand identity not only attracts customers but also fosters trust and loyalty. As businesses recognize the importance of branding, the demand for skilled graphic designers continues to grow</p>
 
  </div>
  
  </>
  )
})
}
const getBt2=()=>{
  setdata2(()=>{

   
  return(
  <>
  <div className='col text-center mt-5'> 
 
  <h4 className='display-5 mt-5'>The Digital Marketing Revolution</h4>
  <p className='text-secondary'>Digital marketing is not just a buzzword; it’s a revolution that has fundamentally changed the way businesses connect with their audiences. It encompasses a wide range of online activities, including search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click advertising, and more. Let’s delve into how digital marketing is changing the world of marketing.</p>
  
  <h5>1. Unparalleled Reach and Accessibility</h5>
  <p className='text-secondary'>One of the most significant advantages of digital marketing is the unparalleled reach it offers. Unlike traditional marketing, which often had geographical limitations, digital marketing knows no bounds. With a well-executed digital marketing strategy, businesses can reach a global audience, breaking down geographical barriers and expanding their market reach.Whether you’re a local business looking to attract customers in your neighborhood or a global corporation targeting an international audience, digital marketing provides the tools and platforms to connect with your target demographic effectively.</p>
  
  <h5>2. Precision Targeting</h5>
  <p className='text-secondary'>Digital marketing allows for precise audience targeting. Through data analytics and user profiling, businesses can identify their ideal customers and tailor their marketing efforts accordingly. This level of precision ensures that marketing messages are delivered to individuals who are more likely to convert into customers.For instance, Facebook and Google Ads enable businesses to target specific demographics, interests, and behaviors. This means that your ads are shown to people who are already interested in your products or services, increasing the likelihood of conversion and reducing wasted ad spend.</p>
 <p className='display-6'>Conclusion</p>
 <p className='text-secondary'>Digital marketing has ushered in a new era of marketing that is more accessible, precise, cost-effective, and data-driven than ever before. It’s not merely a trend; it’s the future of marketing. To thrive in this digital age, individuals and businesses need to adapt and acquire the skills necessary to navigate the ever-evolving digital landscape.
<br/>
Our specialised digital marketing course is designed to empower individuals and businesses with the knowledge and expertise needed to excel in this dynamic field. Join us on this journey to harness the power of digital marketing and transform the way you connect with your audience.</p>
  </div>
  
  </>)})
}

  return (


    
    <>
      <div className='container mt-5 pt-5'>
        <div className='row'> 
        <div className='col-lg-6 col-md-6 col-sm-12 mt-5 '><span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/10976/10976164.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> IICE Indore</span> <span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/8775/8775739.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> September 9,2023</span>  <span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/9866/9866474.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> No Comments</span> <h4 className='mt-3 display-6'> In a world where visual communication reigns supreme, the role of graphic design has never been more crucial. As we […]</h4>
        {data}<button onClick={getBt1} className='mt-3 rounded-2 text-white bg-primary border px-3 py-2'>Read More</button></div>

        
        <div className='col-lg-6 col-md-6 col-sm-12 mt-5'><span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/10976/10976164.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> IICE Indore</span> <span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/8775/8775739.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> September 9,2023</span>  <span className='lead mx-2'><img className='blog-icon' src='https://cdn-icons-png.freepik.com/256/9866/9866474.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> No Comments</span> <h4 className='mt-3 display-6'>The Digital Marketing Revolution: Transforming the World of Business</h4>
        {data2}<button onClick={getBt2} className='mt-3 rounded-2 text-white bg-primary border px-3 py-2'>Read More</button></div>
         
        </div>
        <div className='col mt-5 text-center  '>
          <label htmlFor="" className=''></label><br/>
          <input className='px-2 py-2 border w-50 rounded-start-2 ' type='search' placeholder='Search'/><button className='border-2 border-dark-subtle px-2 py-2 text-white bg-primary rounded-end-2' type='submit'>Search</button>
       <h4 className='mt-3'>Recent Post</h4>
       <p>How Graphic Design is Shaping the Future of Designing Skills</p>
       
       <h4 className='mt-3'>Recent Comments</h4>
       <p className='text-secondary'>No Comments to Show</p>
       
       
       <input className='px-2 py-2 border w-50' type='search'/><button className='px-2 py-2 border text-white bg-primary'>Search</button>
      <h4 className='mt-5'>Recent Post</h4> 
      <h6>How Graphic Design is Shapping the</h6>
      <p>09 September, 2023</p>

      
      <h6>The Digital Marketing Revolution  Transforming the</h6>
      <p>08 September, 2023</p>
        
        <h4 className='mt-5'>Category</h4>
        <p>Uncategorized(2)</p>
        </div>
        <hr/>
      </div>
    </>
  )
}

export default Blog1
