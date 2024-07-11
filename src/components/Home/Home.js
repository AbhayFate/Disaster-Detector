import React from 'react'
import '../../css/Home.css'
import Crousel from './Crousel'
import Cards from './Cards'
import Para from './Para'
import ContainerFluidBreakpointExample from './Grid'

const Home = () => {
  return (
    <div>
      <Crousel/>
      <Para/>
      <ContainerFluidBreakpointExample/>
      <Cards/>
      
      
    </div>
  )
}

export default Home