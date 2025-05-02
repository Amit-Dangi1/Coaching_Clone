import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Card.css"

const Card = (props) => {
  
   

  return (
    <>
     
      <div className='col-lg-4 col-md-4 col-sm-12 text-center border   pb-5 mt-5 card-round'><img className='w-100 card-img1' src={props.img1}/><h3 className='mb-3 mt-4'>{props.h3}</h3><hr/><p className='card-font'>{props.p1}</p>
       <Link  className='' to="#">More Details</Link></div>
      <Outlet/>
    </>
  )
}

export default Card
