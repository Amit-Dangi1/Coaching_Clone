import React from 'react'

const Column2 = (props) => {
  return (
    <>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-3'><img className='w-100 rounded' src={props.img2}/></div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-3'><h4 className=' text-center lead bg-secondary text-white py-2 rounded'>{props.h4}</h4><h2 className='display-4'>{props.h2}</h2><p>{props.p}</p><button className='bg-primary rounded text-white py-2 px-3 border'>Read More</button></div>
        </div>
        </div> 
    </>
  )
}

export default Column2
