import React from 'react'
import '../../css/Cards.css'
import Card1Img from "../../assets/Earthquake.jpeg"
import Card2Img from "../../assets/safety shelter.jpeg"
import Card3Img from "../../assets/Eloss.jpeg"

const Cards = () => {
  return (
    <div className='cards-container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 card-home">
      <img src={Card1Img} class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title">Innocent lives matters</h5>
        <p class="card-text">
        Early detection of natural disasters saves lives by enabling timely evacuation.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 card-home">
      <img src={Card2Img} class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Time to prepare</h5>
        <p class="card-text">Pre-detection allows communities to prepare infrastructure and resources for disaster response</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 card-home">
      <img src={Card3Img} class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Econoimcal Loss preventition</h5>
        <p class="card-text">It facilitates proactive measures to minimize economic losses and environmental damage.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards