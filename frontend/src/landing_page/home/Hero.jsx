import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className="row  text-center">
        <img src="/public/homeHero.png" alt="imahe"  className='mb-5'/>
        <h1 className='mt-5 fw-normal'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more.

</p>
        <button className='p-3 btn fs-5 btn-primary mb-5' style={{width:"20%",  margin:"0 auto"}}>Signup Now</button>
      </div>

    </div>
  )
}
