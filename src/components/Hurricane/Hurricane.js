import React from 'react'
import HComponent3 from './Hcomponent3'
import HComponent2 from './Hcomponent2'
import HComponent1 from './Hcomponent1'
import '../../css/Hurricane/Hcomponent0.css'

const Hurricane = () => {
  return (
    <div id="Hurricane">
       
    <h1 id="head-h-0">"Storm Sentry: Hurricane Detection Hub"</h1>
       <HComponent1/>
       <HComponent2/>
       <HComponent3/>
    </div>
  )
}

export default Hurricane