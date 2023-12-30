import React,{useState, useEffect} from 'react'
import Buttoncart from './Buttoncart';
import { cartState } from './store/store';
import { useRecoilState } from 'recoil';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  
  const [filterData, setFilterData] = useState("");
  const [cartValues, setCartValues] = useRecoilState(cartState)


  useEffect(()=>{
    fetch('http://localhost:3000/data')
    .then((res)=> res.json())
    .then((json)=>setData(json) )
  })
  

  
  function imgClickHandler(productData){
    navigate('/Productdetails',{state:productData})
  }

  return (
    <div className='container'>
      <div className='row mt-5'>
    {data.filter((e) => filterData ? e.category == filterData : true).map((e) => (
      <div className='col-md-4 '> 
        <div className='card'> 
        <a onClick={() => imgClickHandler(e)} >
          <img className="product-img" src={e.imageUrl}/>
          </a>
          <div> 
            <h3> {e.category}</h3>
            <h3> {e.title}</h3>
            <h2> Price :<span className='price-1'> &#8377;{e.price}</span>
            <del className='text-danger'> &#8377;{e.price+10} </del> </h2>

          </div>
          <Buttoncart productData={e}/>
        </div>
      </div>
    ))}
      </div>
    </div>
  )
}
