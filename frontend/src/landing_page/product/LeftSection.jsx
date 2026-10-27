import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function LeftSection() {
  return (
    <div className='container mt-5'>
        <div className="row pt-5">
          <div className="col-6  ">
            <img src="/public/kite.png" alt="" />
          </div>
          <div className="col-6 d-flex flex-column   p-5" style={{}}>
                <h4 className='mt-3'>Kite</h4>
                <p className='fs-5 '>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>

                <div className='d-flex gap-3'>
                  <a style={{textDecoration:'none', fontSize:'1.1rem'}} href="">Try demo <FaArrowRight/> </a>
                  <a style={{textDecoration:'none', fontSize:'1.1rem'}} href="">Learn more <FaArrowRight/></a>
                </div>

                <div className='d-flex gap-3 mt-4'>
                  <img  src="/public/googlePlayBadge.svg" alt="" />
                  <img  src="/public/appstoreBadge.svg" alt="" />
                </div>
          </div>
        </div>
    </div>
  )
}
