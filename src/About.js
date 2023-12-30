import React from 'react'
import Img from './images/img1.jpg'

export default function About() {
  return (
    <div className='container'>
      <div className='row mt-5'>
      <div className='col-md-6 text-left'>
    <img src={Img} className='about-img' alt="skillanic"/>
      </div>
      <div className='col-md-6 text-left'>
          <h3 className='header-1'> About Ecommerce</h3>
          <h2 className='header-2'> Ecommerce </h2>

          <p className='text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit qui temporibus placeat deserunt, et delectus officia rem sequi amet dolores aspernatur libero pariatur odio doloremque earum minima, minus ea beatae quasi? Neque distinctio, vel sed vitae quaerat, nesciunt laborum a nobis nemo dolor libero alias voluptatum nam amet hic earum iure reiciendis atque veniam ut deserunt nihil sit! Provident eveniet, repellat rem consequatur voluptate vitae quidem! Fuga ipsum dolorum modi, provident perspiciatis fugiat aliquam quo vel iste ab nesciunt fugit vitae ex autem eligendi mollitia itaque dolores ad ullam quae at dicta aliquid quisquam. Reprehenderit beatae iusto molestiae, laborum laboriosam est dicta veniam. Aspernatur at nostrum ex eaque voluptas veniam commodi tempora id voluptatum repellat similique optio reprehenderit.</p>

      </div>
      </div>
    </div>
  )
}
