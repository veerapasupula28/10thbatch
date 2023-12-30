import React from 'react'
import Imgsuccess from './images/success.gif'
export default function Success() {
  return (
    <div >
        <div className='mt-5'>
            <img className="success-img" src={Imgsuccess}/>
        </div>
        <div className='text-center mb-5 mt-5'> 
        <h2> Your Order Success </h2>
        <h4> 7-8 Working days React Your Order</h4>
        </div>
    </div>
  )
}
