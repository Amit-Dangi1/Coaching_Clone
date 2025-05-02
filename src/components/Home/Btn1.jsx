import React, { useState } from 'react'

const Btn1 = () => {
const[data,setdata]=useState(
    <>
    <img className='w-50 rounded'  src='https://img.freepik.com/free-photo/young-businessman-portrait-ai-generated_268835-11503.jpg?ga=GA1.1.286932510.1704466478'/>
    <h1 className='display-5'>Amit Dangi</h1>
    <p>"Thank you, Indra Institute, for an incredible learning experience. Your guidance and expertise have truly shaped my skills and opened new doors to my future".Your expertise and support have been invaluable in my journey to mastering web development. I’m grateful for the knowledge and skills I've gained here.</p>
    <h6 className=''>By Amit Dangi</h6>
    <h3 className='lead'>Web Developer</h3>
    </>)

    const getBt1=()=>{
        setdata(()=>{
        return(
            <>
            <img className='w-50 rounded' src='https://img.freepik.com/free-photo/young-businessman-portrait-ai-generated_268835-11503.jpg?ga=GA1.1.286932510.1704466478'/>
            <h1 className='display-6'>Amit Dangi</h1>
            <p>"Thank you, Indra Institute, for an incredible learning experience. Your guidance and expertise have truly shaped my skills and opened new doors to my future".Your expertise and support have been invaluable in my journey to mastering web development. I’m grateful for the knowledge and skills I've gained here.</p>
            <h4>By Amit Dangi</h4>
            <h5 className='lead'>Web Developer</h5>
            </>
      )})
    }
    const getBt2=()=>{
        setdata(()=>{
        return(
            <>
            <img className='w-50 rounded' src='https://img.freepik.com/free-photo/closeup-confident-businessman-white-shirt-looking-left-smiling-satisfied-standing-whi_1258-112690.jpg?ga=GA1.1.286932510.1704466478'/>
            <h1 className='display-6'>HariKishan Choudhry</h1>
            <p>I want to extend my heartfelt thanks to Indra Institute for providing such an enriching learning experience. The supportive environment and expert guidance have greatly enhanced my understanding and skills in web development. The positive atmosphere and commitment to excellence have made my time here both enjoyable and impactful.</p>
            <h4>By Herry</h4>
            <h5 className='lead'>Software Developer</h5>
            </>
      )})
    }
    const getBt3=()=>{
        setdata(()=>{
        return(
            <>
            {/* */}
            <img className='w-50 rounded' src='https://img.freepik.com/free-photo/finance-close-up-handsome-bearded-businessman-suit-showing-plastic-credit-card-standing-seriou_1258-154164.jpg?ga=GA1.1.286932510.1704466478'/>
            <h1 className='display-6'>Atul Karodi</h1>
            <p>"I sincerely thank Indra Institute for delivering an exceptional learning experience. The encouraging environment and expert guidance have significantly boosted my web development skills and knowledge. The positive atmosphere and dedication to quality have made my time here both rewarding and enjoyable. I deeply appreciate the chance to learn and develop with your support."</p>
            <h4>By Atul</h4>
            <h5 className='lead'>Java Developer</h5>
            </>
      )})
    }
    const getBt4=()=>{
        setdata(()=>{
        return(
            <>
            <img className='w-50 rounded' src='https://img.freepik.com/free-photo/close-up-redhead-bearded-man-looking-pleased-nod-approval-smiling-standing-pink-tshirt_1258-173366.jpg?ga=GA1.1.286932510.1704466478'/>
            <h1 className='display-6'>Sanjay Ji</h1>
            <p>
            "I’m truly grateful to Indra Institute for an extraordinary learning journey. The supportive environment and expert mentorship have profoundly enhanced my web development skills. The vibrant atmosphere and unwavering commitment to excellence have made my experience both fulfilling and enjoyable. Thank you for the invaluable opportunity to learn and grow with you."</p>
            <h4>By Sanju</h4>
            <h5 className='lead'>Fronted Developer</h5>
            </>
      )})
    }

  return (
    <>
    <div className='container-fluid'>
        <div className='container text-center'> <div className='col text-center mt-5'>{data}</div>
        
    
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt1}><img className='bg-success-subtle p-1 rounded-3 ' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Dangi Jii</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt4}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Sanjay</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt2}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Herry</button>
    <button className='lead mt-2 mx-3 border rounded py-2 px-4 bg-secondary text-white' onClick={getBt3}><img className='bg-success-subtle p-1 rounded-3' height="50px" src='https://cdn-icons-png.freepik.com/256/16327/16327810.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/>Mr.Atul</button>
     </div> 
    </div> 
    </>
  )
}

export default Btn1
