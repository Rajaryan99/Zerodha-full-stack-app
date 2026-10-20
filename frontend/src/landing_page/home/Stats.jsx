import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Stats() {
  return (
    <div className='container '>
      <div className="row mt-5 mb-5" >
        <div className="col-6">
          <h1 className='mt-5 '>Trust with confidence</h1>

          <h2 className='mt-3'>Customer-first always</h2>
          <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

          <h2>No spam or gimmicks</h2>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="">Our philosophies.</a> </p>

          <h2>The Zerodha universe</h2>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h2>Do better with money</h2>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

        </div>
        <div className="col-6 mt-5">
          <img className='ml-5'  style={{height:'500px', width:'600px'}} src="public/ecosystem.png" alt="" />

           <div className='d-flex justify-content-between '>
          <a href="">Explore our product <FaArrowRight/></a>
          <a href="">Try Kite</a>
        </div>
        </div>
       
      </div>

    </div>
  )
}
