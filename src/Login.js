import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const redirect = useNavigate();
  const [data, setData] = useState({name:"", password:""})

const loginForm=(e)=>{
  setData((prevValue)=>{
    return {
      ...prevValue,
      [e.target.name] : e.target.value
    }
  })
}
const submitHandler=(e)=>{
  e.preventDefault();
  if(data.name !== "veera"){
    alert("Please Enter Correct User Name")
  }else if(data.password !== "atp@123"){
    alert("Please Enter Correct Password")
  }else{
    localStorage.setItem('auth',JSON.stringify({username:data.username,isAuthenticated:true}))
    redirect('/Home')
    // alert("Login Success")
  }

  // alert(JSON.stringify(data, null, 3))
}



  return (
    <div className='col-md-12'>
      <div className='row mt-5'> 
      <div className='col-md-4'></div>
      <div className='col-md-4 card bg-form p-5'> 
      <div>
        <h2> User Login Form </h2>

        <form className='mt-5' onSubmit={submitHandler}>
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Enter User Name' name="name" value={data.name} required onChange={loginForm}/>
          </div>
          <div className='form-group'>
            <input type="password" className='form-control' placeholder='Enter Password' name="password" required value={data.password}  onChange={loginForm}/>
          </div>
          <div>
            <button className='btn btn-success btn-block'> Login </button>
          </div>
        </form>
      </div>
      </div>
       </div>

       <div className='mt-5 text-center'>
        If you Not register Please <Link  to="/Register">Register Here</Link>  
       </div>
    </div>
  )
}
