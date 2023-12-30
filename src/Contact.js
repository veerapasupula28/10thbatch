import React, {useState} from 'react'

export default function Contact() {
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
    <div >

      <div className='container'> 
      <div className='row mt-5'>
        <div className='col-md-6 text-left'>
        <h2 className='header-2'> Address </h2>
        <div>
          <h3> #200, sln building</h3>
          <h3> Ram Nagar </h3>
          <h3> Anantapur </h3>
          <h3> Andhra Pradesh </h3>
          <h3> Pin Code : 515641 </h3>
        </div>
         </div>
        <div className='col-md-6 text-left'> 
        <h2 className='header-2'> Contact Us </h2>
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
            <input type="password" className='form-control' placeholder='Enter Password' required name="password" value={data.password} onChange={regForm}/>
          </div>

          <div>
            <button className='btn btn-success btn-block'> Login </button>
          </div>
        </form>
        </div>
      </div>
      </div>

      <div className='mt-5'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.229662189234!2d77.69909107412005!3d12.957150815196862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92e050656793703%3A0xcd7abc2624db166e!2sSkillanic%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1703599619983!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
