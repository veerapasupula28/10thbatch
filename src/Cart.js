import React, { useEffect, useState } from 'react'
import { cartState } from './store/store'
import { useRecoilState } from 'recoil'
import {Link } from "react-router-dom";

export default function Cart() {
  const [cartValues] = useRecoilState(cartState)
  const [clubbedPRoducts,setClubbedPRoducts] = useState()
  let totalPrice = 0
  useEffect(() => {
    let productsMap = new Map()
    cartValues.forEach((val) => {
        if(productsMap.has(val.title)){
          const productsObj = productsMap.get(val.title)
          productsObj.total = productsObj.total + 1
          productsMap.set(val.title,productsObj)
        }else{
            productsMap.set(val.title,{...val,total:1})
        }
    })
    setClubbedPRoducts(productsMap)
    console.log(Array.from(productsMap.values()))
},[])
  return (
    <div className="container">
        <h2> Selected Products </h2>
        <table border="1" className="w-100">
            <tr>
                <th> S.No</th>
                <th> Image</th>
                <th> Product Name</th>
                <th> Qty</th>
                <th> Price</th>
            </tr>
            {
              
              clubbedPRoducts && clubbedPRoducts.size && Array.from(clubbedPRoducts?.values()).map((val,index) => {
                totalPrice = totalPrice + Number(val.price) * Number(val.total)
               return <tr>
                  <td>{index+1}</td>
                  <td><img className="cart-img" src={val.imageUrl}></img></td>
                  <td>{val.title}</td>
                  <td>{val.total}</td>
                  <td>{Number(val.price) * Number(val.total)}</td>
                </tr>
                
              })
            }
            <tr>
              <td colSpan="4"> Total Price </td>
              <td>{totalPrice} </td> 
            </tr>
        </table>
        <br/>
        <br/>
<div>
  <div className="row">
        <div className="col-md-6"> 
        <Link to="/Products"> <button className="btn btn-success">  Go To Products </button> </Link>
        </div>
        <div className="col-md-6 text-right"> 
        <Link to="/Checkout"> <button className="btn btn-success"> CheckOut </button> </Link>
        </div>
  </div>

</div>

        <br/>
    </div>
  )
}
