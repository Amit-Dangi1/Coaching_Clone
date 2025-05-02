import React from 'react'

const About2 = (props) => {
  return (
    <>
      <img className='w-50 rounded-5 px-2 ' src={props.img2}/><img className='w-50 rounded-5 py-2' src={props.img3}/>
     <h2 className='mt-3'>{props.h2}</h2>
      <p className='lead mt-5'>{props.p}</p>
    </>
  )
}

export default About2
