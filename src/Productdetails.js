import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Productdetails() {
    const {state} = useLocation() 
  return (
    <div className="container">
        <div className="row"> 
            <div className="col-md-6">
                
<div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={state.imageUrl} alt="product details" className="banner-img"/>
  </div>
  <div className="carousel-item">
  <img src={state.imageUrl} alt="product details" className="banner-img"/>
  </div>
  <div className="carousel-item">
  <img src={state.imageUrl} alt="product details" className="banner-img"/>
  </div>
</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
            </div>
            <div className="col-md-6">
                <h2> {state?.category} </h2>
                <h3> {state?.title} </h3>
                <h1> Price: &#8377; {state?.price}</h1>
                    
            </div>
        </div>

        <div> 
            <p> S.L.N. Degree college is a premier institution run by Sri V Bhargavarama Sarma, the Correspondent. The institute was started in the year 2016 in picturesque surroundings on a spacious campus in Alamuru Road, Anantapuramu. Within span of 3 years of its establishment, the institution has set a remarkable trend in the field of education offering various job-oriented under graduatecourses. This milestone is achieved through planning, dedication, determination and prompt execution of innovative ideas envisioned by of our Founder, chairman, Sri V.B.R. Sarma . The</p>

            <h2> Reviews </h2>
            <p> Veera:  good product</p>
            <p> Raju:  good product but Delivery late</p>
            <p> Ravi:  Toomuch COst </p>
        </div>
    </div>
  )
}
