import React from 'react'
import "./Contact.css"

const Contact1 = () => {
  return (
    <>
     <div className='container-fluid bg-dark-subtle text-center'>
        {/* <img className='w-100 ' src='https://www.shutterstock.com/shutterstock/photos/1897164763/display_1500/stock-vector-heart-continuous-one-line-drawing-black-and-white-vector-minimalist-illustration-of-love-concept-1897164763.jpg'/> */}
        <div className='container mt-5 pt-5 pb-3'> 
       <p className='mt-3 display-4'>Get in Touch with Us</p>
       <p  className='lead text-center'>We value your feedback, questions, and suggestions! Whether you have a query about our services, need assistance, or just want to say hello, we're here to help. You can reach out to us via email, phone, or social media, and our team will respond as soon as possible. We strive to provide the best experience and are always eager to hear from you. Thank you for considering us, and we look forward to connecting with you!</p>
       
       </div> </div> 

        <div className='container-fluid contact-back-img pt-5 pb-4'>
            <div className='container contact-back-color pt-5 pb-5 mb-5 rounded-2'>
                <div className='row'> 
                <div className='col'>
                    <h3 className='text-white display-5'>Contact Us</h3>
                    
                    <h4 className='text-white mt-5 '> <img className='contact-icon' src='https://cdn-icons-png.freepik.com/256/8862/8862422.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> Call Us</h4>
                    <p className='text-white text-secondary'>+91 7845123689,+91 626845120</p>

                     <h4 className='text-white mt-5'><img className='contact-icon' src='https://cdn-icons-png.freepik.com/256/12235/12235953.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> Address</h4>
                    <p className='text-white text-secondary'>Room No. 133, 1st Floor Veda Business Park Bhawarkuan,<br /> Main Square, Indore (M.P)</p>

                    
                     <h4 className='text-white mt-5'><img className='contact-icon' src='https://cdn-icons-png.freepik.com/256/10732/10732933.png?ga=GA1.1.286932510.1704466478&semt=ais_hybrid'/> Email:</h4>
                    <p className='text-white text-secondary'>indrainstitute25@gmail.com<br/>info@iiceindore.com</p>
                </div>

                <div className='col'>
                    <span> 
                    <label className='text-white' htmlFor="">Email : </label>
                    <input className='mx-2 input1' type='text' placeholder='Enter Your Email'/>   
                    
                    <label className='text-white' htmlFor="">Name :</label>
                    <input className='mx-2 input1' type='text' placeholder='Enter Your Name'/></span>


                      <p className='mt-5'><h6 className='text-white'>Address</h6>
                      <input className='input1 w-100' type="text" name="" id="" placeholder='Enter Your Address' />
                      </p>  

                      <p className='mt-5'><h6 className='text-white' >Message</h6>
                      <textarea className='input1 w-100' name="" id="" placeholder='Enter your Message'></textarea>
                      </p>                   

                      <p className='text-center'> <button className='lead w-100 mt-3 text-center text-white bg-primary border-0 px-2 py-2 rounded-5'>Submit</button></p>
                   
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid mt-5'><iframe className='w-100 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482572172!2d75.69903758875395!3d22.723888290091512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1725521040718!5m2!1sen!2sin" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </>
  )
}

export default Contact1
