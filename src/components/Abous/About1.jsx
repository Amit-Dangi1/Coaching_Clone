import React from 'react'
import "./About1.css"
import Card from '../Home/Card'
import About2 from './About2'

const About1 = () => {
  return (
    <>
      <div className='container-fluid mt-5 pt-4   w-100  about1-back-img pb-5'>
         
     <h4 className='display-5 mt-5 text-white text-center  '> We strive for the highest standards in everything we do</h4>
     <div className='mt-5 px-5 growth rounded-5 p-2 '><h3 className='text-white'>Growth :</h3><p className='text-white lead '>We are dedicated to continuous learning and development for ourselves and our client</p></div>
     <div className='mt-5 px-5 growth rounded-5 p-2  '><h3 className='text-white'>Empathy and Compassion :</h3><p className='text-white lead '>Empathy and CompassionWe create a safe space for growth and self-discovery</p></div>
    
    </div>

     <div className='container'>
      <div className='row'>
      <Card img1="https://t3.ftcdn.net/jpg/04/84/46/40/240_F_484464043_DeVl9kWxKvPn4mRhjbGzzw3mTVCt9FNv.jpg"  h3="Online Courses" p1=""/>
    <Card img1="https://t3.ftcdn.net/jpg/05/02/46/20/240_F_502462081_hhwzaOXGgLT4AAInQpROd1rl7mdgJHnQ.jpg"  h3="Expert Trainer" p1=""/>
    <Card img1="https://t4.ftcdn.net/jpg/08/03/44/43/240_F_803444318_RTLGfWbbbST5xcztj7CtDZ0GZJyrWm2x.jpg"  h3="Get Certificate" p1=""/>
      
      </div>
     </div>

     <div className='container-fluid mt-5 bg-dark-subtle pt-5 pb-5'>
          <h2 className='text-center '>Partners Employing Our Graduates</h2>
<div className='container mt-5'>
  <About2 img2="https://t4.ftcdn.net/jpg/02/15/48/43/240_F_215484326_AkJBpMImRnfCSrJMoMZCPxYfc5ecAzlA.jpg"
          img3="https://t4.ftcdn.net/jpg/02/55/06/53/240_F_255065360_BWhTptcayP6LDumqqK6Oe7QIwFIMFWrH.webp"
          h2="Milestones of Achievement"
          p="Founded in 2021, Indra Institute is dedicated to providing top-quality education for those passionate about building a career in the IT industry. As one of the fastest-growing sectors, IT demands continuous learning and adaptation to keep pace with rapid advancements. At Indra Institute, we employ cutting-edge technology and innovative teaching methods to deliver exceptional training programs tailored to meet each student's unique goals and interests.Our institute has quickly become one of the most trusted training centers in Indore, supported by a team of seasoned professionals with expertise across a range of technical skills. We strive to provide an education that goes beyond conventional learning, helping students gain the critical skills and knowledge that other institutions often overlook. With our skilled faculty, engaging learning environment, and precise teaching methodologies, we prepare our students for success with the industry's most sought-after skills."     />

<hr/>

<About2 img2="https://t3.ftcdn.net/jpg/03/92/12/14/240_F_392121467_svMMMyFigWvBTsCbqve2cNm9xeqDPoZ7.jpg"
          img3="https://img.freepik.com/free-vector/paper-style-red-aircraft-represent-journey-success-leader_1017-43022.jpg?size=626&ext=jpg&ga=GA1.1.286932510.1704466478&semt=ais_hybrid"
          h2="Our Commitment"
          p="At Indra Institute, our mission is to deliver exceptional education that empowers students to become skilled professionals and thrive in their chosen careers. As one of the leading training institutes in Indore, we design our courses not only to build credentials but also to foster creativity, critical thinking, and innovation. We are dedicated to shaping the future leaders of the technological revolution, driving progress in information technology and computer science."    />

</div>
<hr/>

     </div>
     
    </>
  )
}

export default About1
