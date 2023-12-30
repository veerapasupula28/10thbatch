import React from 'react'
import Img1 from './images/img1.jpg'
import Img2 from './images/img2.jpg'
import Img3 from './images/img3.jpg'
import About from './About'

export default function Home() {
  return (
    <div>
      <div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={Img1} className="banner-img" alt="skillanic"/>
  </div>
  <div class="carousel-item">
  <img src={Img2} className="banner-img" alt="skillanic"/>
  </div>
  <div class="carousel-item">
  <img src={Img3} className="banner-img" alt="skillanic"/>
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
<About/>
    </div>
  )
}
