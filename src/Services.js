import React,{useState, useEffect} from 'react'
import Img from './images/Logo.jpg'

export default function Services() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> res.json())
    .then((json) => setData(json))
  })
  return (
    <div className='container'>

<div className='row mt-5'>
  {data.map((e)=>(
    <div className='col-md-4 '>
      <div className='card-1'> 
      <img className="s-img" src={Img} alt="skillanic"/> 
    {e.title}
    <button className='btn btn-success'> Read More..</button>
   </div>
    </div>
  ))}
  

</div>


    </div>
  )
}
