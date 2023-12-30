import React from 'react'
import { Link } from "react-router-dom";
import Logo from './images/Logo.jpg'
import { cartState } from './store/store';
import { useRecoilState } from 'recoil';

export default function Header() {
  const [cartValues] = useRecoilState(cartState)
  function onLogOut() {
      localStorage.clear()
  }
  console.log(cartValues)
  return (
    <div>
        <div className='container-fluid mt-2 border-btm'> 
        <div className='row'>
            <div className='col-md-3'> 
            <img className="logo-1" src={Logo}/>
            </div>
            <div className='col-md-9'> 
            <nav>
        <ul className='menu'>
          <li>
            <Link  to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
         
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Cart">Cart : {cartValues.length}</Link>
          </li>
          <li>
          <Link to="/Login" onClick={onLogOut}>Logout</Link>
          </li>
         
        </ul>
      </nav>
            </div>
        </div>
        </div>

        
    </div>
  )
}
