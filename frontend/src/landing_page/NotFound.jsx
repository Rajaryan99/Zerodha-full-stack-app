import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container text-center p-5 '>
      <h2 className='mt-5 mb-4 fw-normal'>Not Found!!</h2>
        <p className='mb-4 fs-4'>Sorry, the page you are looking for does not exist...</p>
        <Link to="/"><button className='p-3 btn fs-5 btn-primary mb-5' style={{width:"20%",  margin:"0 auto"}}>Home page</button></Link>
    </div>
  )
}
