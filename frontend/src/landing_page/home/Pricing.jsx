import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";


export default function Pricing() {
  return (
    <div className='container  pt-5'>
      <div className="row mt-5  ">
        <div className="col-6">
          <h2>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.

</p>
          <a href="">See pricing <FaArrowRight/></a>
        </div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-3 px-5 ">
              <h2><MdCurrencyRupee/>0</h2>
              <p>Free equity delivery and
direct mutule funds</p>
            </div>
            <div className="col-6 border p-3 px-5">
               <h2><MdCurrencyRupee/>20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
