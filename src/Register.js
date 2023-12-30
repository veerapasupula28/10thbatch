import React,{useState} from 'react'
import { Link } from "react-router-dom";

 function Register() {
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
    // alert(JSON.stringify(data, null ,3))
  }

  return (
    <div className='col-md-12'>
      <div className='row mt-5'> 
      <div className='col-md-2'></div>
      <div className='col-md-4 card bg-form p-5'> 
      <div>
        <h2> User Register Form </h2>

        <form className='mt-5' onSubmit={submitHandler}>
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
            <input type="password" className='form-control' placeholder='Enter Password' required name="password" value={data.password} onChange={regForm}/>
          </div>

          <div>
            <button className='btn btn-success btn-block'> Login </button>
          </div>
        </form>
      </div>
      </div>
      <div className='col-md-4 card bg-form p-5'>
        <div className='text-left'>
          <h4> Name: {data.name}</h4>
          <h4> Mobile: {data.mobile}</h4>
          <h4> Email: {data.email}</h4>
          <h4> City: {data.city}</h4>
          <h4> Password: {data.password}</h4>
        </div>
      </div>
       </div>

       <div className='mt-5'>
        If you already register Please <Link  to="/Login">Login Here</Link>  
       </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
export default Register;