import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function Hero() {
  return (
    <>
    <div className='container mt-5'>
      <div className="heroSection text-center">
        <h1>Zerodha Products</h1>
        <h3 className='mt-3'  style={{color:'gray'}}>Sleek, modern, and intuitive trading platforms</h3>

        <h5 className='mt-5' style={{color:'gray'}}>Check out our <a href="" style={{textDecoration:'none'}}>investment offerings</a> →</h5>
      </div>




    </div>

    <LeftSection/>
    <RightSection/>
    </>
  )
}
