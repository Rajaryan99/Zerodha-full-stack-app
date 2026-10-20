import React from 'react'

export default function Awards() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <img src="public/largestBroker.svg" alt="Broket-svg" />
        </div>
        <div className="col-6 ">
          <h1>Largest stock broker in India</h1>
          <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                  <li>
                  <p>Commodity derivatives</p>
                </li>
                  <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
               <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                  <li>
                  <p>Direct mutual funds</p>
                </li>
                  <li>
                  <p>Bond and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img className='mt-2' style={{width:"90%", margin:'0 auto'}} src="public/pressLogos.png" alt="" />
        </div>
      </div>

    </div>
  )
}
