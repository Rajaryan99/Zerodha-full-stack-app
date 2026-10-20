import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


export default function Education() {
  return (
    <div className='container mt-5 pt-5 '>
      <div className="row ">
        <div className="col-6">
          <img src="public/education.svg" alt="" />
        </div>
        <div className="col-6 pt-5">
          <h2>Free and open market education
</h2>

<p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

<a href="">Varsity <FaArrowRight/></a>

<p>TradingQ&A, the most active trading and investment community in India for all your market related queries.

</p>

<a href="">TradingQ&A <FaArrowRight/></a>
        </div>
      </div>

    </div>
  )
}
