import React,{useState} from 'react'
import { Link } from "react-router-dom";


export default function Checkout() {
    const [data, setData] = useState({name:"", mobile:"", email:"", city:"", password:"", })

  const regForm=(e)=>{
    setData((prevValue)=>{
      return {
        ...prevValue,
        [e.target.name] : e.target.value
      }
    })
  }

  const submitHandler=(e)=>{
    e.preventDefault();
     alert(JSON.stringify(data, null ,3))
  }
  return (
    <div>
        <div className='container'> 
      <div className='row mt-5 mb-5'>
       
        <div className='col-md-6 text-left'> 
        <h2 className='header-2'> Delivery Address </h2>
        <form  onSubmit={submitHandler}>
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Enter Name' required name="name" value={data.name} onChange={regForm}/>
          </div>
          <div className='form-group'>
            <input type="email" className='form-control' placeholder='Enter Email Id' required name="email" value={data.email} onChange={regForm}/>
          </div>
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Enter Mobile' required name="mobile" value={data.mobile} onChange={regForm}/>
          </div>

          <div className='form-group'>
         <select className='form-control' name="city" value={data.city} onChange={regForm}>
          <option> Select City </option>
          <option> Hyderabad </option>
          <option> Banglore </option>
          <option> ATP </option>
         </select>
          </div>

          <div className='form-group'>
           <textarea className='form-control' value="Address"> </textarea>
          </div>

          <div>
            <button className='btn btn-success btn-block'> Login </button>
          </div>
        </form>
        </div>
        <div className='col-md-6 text-left'>
        <h2 className='header-2'> Payment  </h2>
        <div>
        <div>
            <input type="radio" name="payment" />  Cashon Delivery &nbsp; 
            <input type="radio" name="payment" />  Online Payment
        </div>

        <div className='mt-5'>
           <Link to="/Success">  <button className='btn btn-success btn-block'> Proceed TO Payment  </button></Link>
          </div>

        </div>
         </div>
      </div>
      </div>
    </div>
  )
}
